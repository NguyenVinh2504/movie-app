import { Outlet, useLocation } from 'react-router-dom';
import { Box } from '@mui/material';
import { profileItems } from '~/config/ProfileMenuItems';
import HeaderProfile from '~/Page/Profile/HeaderProfile';
import Wrapper from '~/components/Wrapper';
import { Helmet } from 'react-helmet';
import useDetailMovie from '~/Hooks/useIsDetailMovie';

function Profile() {
    const location = useLocation();
    const isDetailMovie = useDetailMovie();

    let title = '';
    profileItems.forEach((item) => {
        if (item.path === location.pathname) {
            title = item.title;
        }
    });
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
