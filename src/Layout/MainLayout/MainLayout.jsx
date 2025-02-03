import Header from '../components/Header';
import { Container } from '@mui/material';
import Footer from '../components/Footer';
import MediaDetail from '~/components/MediaDetail';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setFavorites } from '~/redux/features/favoritesSlice';
import { useQuery, keepPreviousData } from '@tanstack/react-query';
import { Outlet } from 'react-router-dom';
import { isAuthenticated } from '~/redux/selectors';
import favoriteApi from '~/api/module/favorite.api';
import userApi from '~/api/module/user.api';
import { updateUser } from '~/redux/features/userSlice';
import ScrollButton from '~/components/ScrollButton';

function MainLayout() {
    const dispatch = useDispatch();
    const isLogged = useSelector(isAuthenticated);
    const { data, isSuccess } = useQuery({
        queryKey: ['favorite list'],
        queryFn: favoriteApi.getFavorites,
        enabled: isLogged,
        placeholderData: keepPreviousData,
    });

    useEffect(() => {
        if (data && isSuccess) {
            const { favorites } = data;
            dispatch(setFavorites(favorites));
        }
    }, [data, dispatch, isSuccess]);

    const { data: profileUser } = useQuery({
        queryKey: ['profile'],
        enabled: isLogged,
        queryFn: async () => {
            const { response, err } = await userApi.getInfo();
            if (response) return response;
            return Promise.reject(err);
        },
    });

    useEffect(() => {
        if (profileUser) {
            dispatch(updateUser(profileUser));
        }
    }, [data, dispatch, profileUser]);

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
                <MediaDetail />
                <Header isLoading={false} />
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
                <ScrollButton />
            </Container>
        </>
    );
}

export default MainLayout;
