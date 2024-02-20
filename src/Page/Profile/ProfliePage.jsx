import { Outlet, useNavigate } from 'react-router-dom';
import { Box } from '@mui/material';
import { profileItems } from '~/config/ProfileMenuItems';
import HeaderProfile from '~/Page/Profile/HeaderProfile';

import { useSelector } from 'react-redux';
import { userValue } from '~/redux/selectors';
import config from '~/config';
import { useEffect } from 'react';
import Wrapper from '~/components/Wrapper';

function Profile() {
    const user = useSelector(userValue);
    const location = useNavigate();
    useEffect(() => {
    if (!user) {
        location(config.routes.login);
    }
    }, [user, location]);
    useEffect(() => {
        document.title = 'Trang Cá Nhân';
    }, []);
    return (
        <Wrapper>
            {/* head */}
            <HeaderProfile valueTabItems={profileItems} />
            {/* head */}
            {/* content */}
            <Box component={'section'} sx={{ mt: 3 }}>
                <Outlet />
            </Box>
            {/* content */}
        </Wrapper>
    );
}

export default Profile;
