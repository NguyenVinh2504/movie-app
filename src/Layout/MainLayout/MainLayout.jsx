// import { Outlet } from 'react-router-dom';
import Header from '../components/Header';
import { Container } from '@mui/material';
import Footer from '../components/Footer';
import MediaDetail from '~/components/MediaDetail';
// import GlobalLoading from '~/components/GlobalLoading';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { toggleGlobalLoading } from '~/redux/features/globalLoadingSlice';
import userApi from '~/api/module/user.api';
import { loginOut, updateUser } from '~/redux/features/userSlice';
import { accessToken, openSelector } from '~/redux/selectors';
import { toggleGlobalLoading } from '~/redux/features/globalLoadingSlice';
import { removeToken } from '~/redux/features/authSlice';
import { removeFavorites, setFavorites } from '~/redux/features/favoritesSlice';
// import Search from '../components/Search';
import { useQuery, keepPreviousData } from '@tanstack/react-query';
import { Outlet } from 'react-router-dom';

function MainLayout() {
    const dispatch = useDispatch();
    const open = useSelector(openSelector);
    const token = useSelector(accessToken);
    const fetchApi = async () => {
        const { response, err } = await userApi.getInfo();
        if (response) return response;
        if (err) throw err;
    };
    const { data, isLoading, error } = useQuery({
        queryKey: ['user info'],
        queryFn: fetchApi,
        placeholderData: keepPreviousData,
        refetchOnMount: false,
        refetchOnWindowFocus: false,
        retryOnMount: false,
        refetchOnReconnect: false,
        retry: 0,
        enabled: Boolean(token)
    });
    console.log('data user 1', data, 'isLoading', isLoading);
    useEffect(() => {
        if (data) {
            console.log('data user', data);
            const { favorites, ...user } = data;
            dispatch(updateUser(user));
            dispatch(setFavorites(favorites));
            dispatch(toggleGlobalLoading(false));
        }
        if (error) {
            console.log('error user', error);
            dispatch(loginOut());
            dispatch(removeToken());
            dispatch(removeFavorites());
            dispatch(toggleGlobalLoading(false));
        }
    }, [data, dispatch, error]);
    return (
        <>
            {/* <GlobalLoading /> */}
            <Container
                disableGutters
                maxWidth="auto"
                sx={{
                    maxWidth: { xl: '1904px' },
                }}
            >
                {open && <MediaDetail />}
                <Header isLoading={false} />
                {/* <Box sx={{ position: 'fixed', left: '0', right: '0', top: '64px', display: { md: 'none' } }} px={3}>
                        <Search />
                    </Box> */}
                <Container
                    component={'main'}
                    maxWidth="auto"
                    sx={{
                        marginY: '20px',
                        minHeight: '100vh',
                    }}
                >
                    <Outlet />
                </Container>
                <Footer />
            </Container>
        </>
    );
}

export default MainLayout;
