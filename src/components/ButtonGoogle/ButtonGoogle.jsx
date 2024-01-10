import { Google } from '@mui/icons-material';
import { Button, useMediaQuery } from '@mui/material';
import { GoogleAuthProvider, signInWithPopup, getAuth } from 'firebase/auth';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import userApi from '~/api/module/user.api';
import config from '~/config';
import { app } from '~/firebase';
import { setToken } from '~/redux/features/authSlice';
import { setUser } from '~/redux/features/userSlice';

function ButtonGoogle({ setIsLoading }) {
    const location = useNavigate();

    const dispatch = useDispatch();

    const pointDownSm = useMediaQuery((theme) => theme.breakpoints.down('sm'));
    const signInGoogle = async () => {
        try {
            const provider = new GoogleAuthProvider();
            const auth = getAuth(app);
            const result = await signInWithPopup(auth, provider);
            return { result };
        } catch (error) {
            return { error };
        }
    };
    const handleGoogleClick = async () => {
        setIsLoading(true);
        const { result, error } = await signInGoogle();
        if (result) {
            const { displayName, email, uid, photoURL } = result.user;
            const { response, err } = await userApi.loginGoogle({
                name: displayName,
                email,
                avatar: photoURL,
                password: `${uid}@`,
                confirmPassword: `${uid}@`,
            });
            if (response) {
                location(config.routes.home);
                const { accessToken, refreshToken, ...user } = response;
                dispatch(setUser(user));
                dispatch(setToken({ accessToken, refreshToken }));
                toast.success(`Xin chào, ${response.name}`, {
                    position: 'top-center',
                });
            }
            if (err) {
                toast.success(err.message, {
                    position: 'top-center',
                });
            }
        }
        if (error) {
            setIsLoading(false);
            console.log(error);
        }
    };
    return (
        <Button
            variant="pill-outline"
            color="white-outline"
            startIcon={<Google />}
            size={pointDownSm ? 'small' : 'medium'}
            onClick={handleGoogleClick}
        >
            <div>Đăng nhập bằng Google</div>
        </Button>
    );
}

export default ButtonGoogle;
