import { Google } from '@mui/icons-material';
import { Box, Button, useMediaQuery } from '@mui/material';
import { GoogleAuthProvider, signInWithPopup, getAuth } from 'firebase/auth';
import { memo, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useQueryParams } from '~/Hooks';
import userApi from '~/api/module/user.api';
import { env } from '~/config/environtments';
import { app } from '~/firebase';
import { setToken } from '~/redux/features/authSlice';
import { setFavorites } from '~/redux/features/favoritesSlice';
import { setIsAuthenticated } from '~/redux/features/isAuthenticated';
import { setUser } from '~/redux/features/userSlice';
import { setAccessTokenLs, setRefreshTokenLs } from '~/utils/auth';

function ButtonGoogle() {
    const queryParams = useQueryParams();
    const { accessToken, refreshToken, error } = queryParams;
    const dispatch = useDispatch();
    // console.log(accessToken, refreshToken);
    useEffect(() => {
        const login = async () => {
            if (accessToken !== undefined && refreshToken !== undefined) {
                setAccessTokenLs(accessToken);
                setRefreshTokenLs(refreshToken);
                dispatch(setToken({ accessToken, refreshToken }));

                userApi.getInfo().then(({ response, err }) => {
                    const { favorites, ...user } = response;
                    dispatch(setUser(user));
                    dispatch(setIsAuthenticated(true));
                    dispatch(setFavorites(favorites));
                    toast.success(`Xin chào, ${user.name}`, {
                        position: 'top-center',
                    });
                });
            }
        };
        login();
    }, [accessToken, dispatch, refreshToken]);

    useEffect(() => {
        if (error) toast.error('Bạn đã hủy đăng nhập bằng Google', { position: 'top-center' });
    }, [error]);
    // const isLogged = useSelector(isAuthenticated);

    // const { data: profileUser } = useQuery({
    //     queryKey: ['profile'],
    //     enabled: isLogged,
    //     queryFn: async () => {
    //         const { response, err } = await userApi.getInfo();
    //         if (response) return response;
    //         return Promise.reject(err);
    //     },
    // });

    // useEffect(() => {
    //     console.log(profileUser);
    //     if (profileUser) {
    //         const { accessToken, refreshToken, favorites, ...user } = profileUser;
    //         dispatch(setFavorites(favorites));
    //         dispatch(setUser(user));
    //         toast.success(`Xin chào, ${user.name}`, {
    //             position: 'top-center',
    //         });
    //     }
    // }, [dispatch, profileUser]);

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
    // const handleGoogleClick = async () => {
    //     setIsLoading(true);
    //     const { result, error } = await signInGoogle();
    //     if (result) {
    //         const { displayName, email, uid, photoURL } = result.user;
    //         const { response, err } = await userApi.loginGoogle({
    //             name: displayName,
    //             email,
    //             avatar: photoURL,
    //             password: `${uid}@`,
    //             confirmPassword: `${uid}@`,
    //         });
    //         if (response) {
    //             location(config.routes.home);
    //             const { accessToken, refreshToken, favorites, ...user } = response;
    //             dispatch(setFavorites(favorites));
    //             dispatch(setIsAuthenticated(true));
    //             dispatch(setUser(user));
    //             dispatch(setToken({ accessToken, refreshToken }));
    //             toast.success(`Xin chào, ${response.name}`, {
    //                 position: 'top-center',
    //             });
    //         }
    //         if (err) {
    //             toast.success(err.data.message, {
    //                 position: 'top-center',
    //             });
    //         }
    //     }
    //     if (error) {
    //         setIsLoading(false);
    //         console.log(error);
    //     }
    // };

    const url = 'https://accounts.google.com/o/oauth2/v2/auth';
    const query = {
        client_id: env.CLIENT_ID_GOOGLE,
        redirect_uri: env.REDIRECT_URI_GOOGLE,
        response_type: 'code',
        scope: [
            'https://www.googleapis.com/auth/userinfo.email',
            'https://www.googleapis.com/auth/userinfo.profile',
        ].join(' '),
        prompt: 'consent',
    };

    const redirectUrl = `${url}?${new URLSearchParams(query).toString()}`;

    return (
        <Button
            variant="pill-outline"
            color="white-outline"
            startIcon={<Google />}
            size={pointDownSm ? 'small' : 'medium'}
            // onClick={handleGoogleClick}
            component={Link}
            to={redirectUrl}
        >
            <Box
                sx={{
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    whiteSpace: 'nowrap',
                }}
            >
                Đăng nhập bằng Google
            </Box>
        </Button>
    );
}

export default memo(ButtonGoogle);
