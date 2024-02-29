import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import { Box } from '@mui/material';
import { profileItems } from '~/config/ProfileMenuItems';
import HeaderProfile from '~/Page/Profile/HeaderProfile';

import { useSelector } from 'react-redux';
import { userValue } from '~/redux/selectors';
import config from '~/config';
import { useEffect } from 'react';
import Wrapper from '~/components/Wrapper';
import { Helmet } from 'react-helmet';

function Profile() {
    const user = useSelector(userValue);
    const navigate = useNavigate();
    const location = useLocation();
    useEffect(() => {
        if (!user) {
            navigate(config.routes.login);
        }
    }, [user, navigate]);

    let title = '';
    profileItems.forEach((item) => {
        if (item.path === location.pathname) {
            title = item.title;
        }
    });
    return (
        <>
            <Helmet title={title} />
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
