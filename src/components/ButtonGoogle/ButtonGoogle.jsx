import { Google } from '@mui/icons-material';
import { Button, useMediaQuery } from '@mui/material';
import { GoogleAuthProvider, signInWithPopup, getAuth } from 'firebase/auth';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import userApi from '~/api/module/user.api';
import config from '~/config';
import { app } from '~/firebase';
import { setUser } from '~/redux/features/userSlice';

function ButtonGoogle() {
    const location = useNavigate();

    const dispatch = useDispatch();

    const pointDownSm = useMediaQuery((theme) => theme.breakpoints.down('sm'));
    const handleGoogleClick = async () => {
        try {
            const provider = new GoogleAuthProvider();
            const auth = getAuth(app);

            const result = await signInWithPopup(auth, provider);
            const { displayName, email, uid, photoURL } = result.user;
            const { response } = await userApi.loginGoogle({
                name: `${displayName}_${uid}`,
                email,
                avatar: photoURL,
                password: `${uid}@`,
                confirmPassword: `${uid}@`,
            });
            if (response) {
                dispatch(setUser(response));
                location(config.routes.home);
                toast.success(`Xin chào, ${response.name}`, {
                    position: 'top-center',
                });
            }
            console.log(result);
        } catch (error) {
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
