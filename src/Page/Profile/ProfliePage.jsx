import { Outlet, useLocation } from 'react-router-dom';
import { Box } from '@mui/material';
import { profileItems } from '~/config/ProfileMenuItems';
import HeaderProfile from '~/Page/Profile/HeaderProfile';
import Wrapper from '~/components/Wrapper';
import { Helmet } from 'react-helmet';
import useDetailMovie from '~/Hooks/useIsDetailMovie';
import { useQuery } from '@tanstack/react-query';
import userApi from '~/api/module/user.api';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { updateUser } from '~/redux/features/userSlice';
import { setFavorites } from '~/redux/features/favoritesSlice';

function Profile() {
    const location = useLocation();
    const dispatch = useDispatch();

    const isDetailMovie = useDetailMovie();
    const { data, isSuccess } = useQuery({
        queryKey: ['profile'],
        queryFn: async () => {
            const { response, err } = await userApi.getInfo();
            if (response) return response;
            return Promise.reject(err);
        },
        staleTime: 0,
    });
    let title = '';
    profileItems.forEach((item) => {
        if (item.path === location.pathname) {
            title = item.title;
        }
    });
    useEffect(() => {
        if (data && isSuccess) {
            const { favorites, ...user } = data;
            dispatch(updateUser(user));
            dispatch(setFavorites(favorites));
        }
    }, [data, dispatch, isSuccess]);
    return (
        <>
            {!isDetailMovie && <Helmet title={title} />}
            <Wrapper>
                {/* head */}
                <HeaderProfile valueTabItems={profileItems} location={location} />
                {/* head */}
                {/* content */}
                <Box component={'section'} sx={{ mt: 3 }}>
                    <Outlet />
                </Box>
                {/* content */}
            </Wrapper>
        </>
    );
}

export default Profile;
