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
import { updateUser } from '~/redux/features/userSlice';
// import { toggleGlobalLoading } from '~/redux/features/globalLoadingSlice';
// import { removeToken } from '~/redux/features/authSlice';
import { setFavorites } from '~/redux/features/favoritesSlice';
// import Search from '../components/Search';
import { useQuery, keepPreviousData } from '@tanstack/react-query';
import { Outlet } from 'react-router-dom';
import { isAuthenticated } from '~/redux/selectors';
// import { useQueryConfig } from '~/Hooks';
// import { clearLS } from '~/utils/auth';

function MainLayout() {
    const dispatch = useDispatch();
    const isLogged = useSelector(isAuthenticated);
    const fetchApi = async () => {
        const { response, err } = await userApi.getInfo();
        if (response) return response;
        if (err) throw err;
    };
    const { data, error, isSuccess } = useQuery({
        queryKey: ['user info'],
        queryFn: fetchApi,
        enabled: isLogged,
        placeholderData: keepPreviousData,
        refetchOnMount: false,
        refetchOnWindowFocus: false,
        retryOnMount: false,
        refetchOnReconnect: false,
        retry: 0,
        gcTime: 0,
        staleTime: 0,
        // enabled: Boolean(token)
    });
    // console.log('data user 1', data, 'isLoading', isLoading);
    // console.log(isSuccess, data);
    useEffect(() => {
        if (data && isSuccess) {
            const { favorites, ...user } = data;
            dispatch(updateUser(user));
            dispatch(setFavorites(favorites));
        }
    }, [data, dispatch, error, isSuccess]);
    // const queryConfig = useQueryConfig();
    // const { category: open } = queryConfig;
    return (
        <>
            {/* <GlobalLoading /> */}
            <Container
                disableGutters
                maxWidth="auto"
                sx={{
                    maxWidth: { xl: '1904px' },
                    minWidth: '250px',
                }}
            >
                {/* {Boolean(open) && <MediaDetail />} */}
                <MediaDetail />
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
