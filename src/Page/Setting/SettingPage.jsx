import { Outlet, useNavigate } from 'react-router-dom';
import { Box } from '@mui/material';
import HeaderProfile from '~/Page/Profile/HeaderProfile';
import { settingUserItems } from '~/config/SettingUserMenuItems';
import { useEffect } from 'react';
import config from '~/config';

import { useSelector } from 'react-redux';
import { userValue } from '~/redux/selectors';

function Settings() {
    const user = useSelector(userValue);

    const location = useNavigate();

    useEffect(() => {
        if (!user) {
            location(config.routes.login);
        }
    }, [location, user]);
    return (
        <>
            <Box
                sx={{
                    width: { md: '850px', lg: '1100px', xl: '100%' },
                    maxWidth: '1536px',
                    m: 'auto',
                    // bgcolor: (theme) => theme.palette.secondary.main,
                }}
            >
                {/* head */}
                <HeaderProfile valueTabItems={settingUserItems} />
                {/* head */}
                {/* content */}
                <Box component={'section'} sx={{ mt: 3 }}>
                    <Outlet />
                </Box>
                {/* content */}
            </Box>
        </>
    );
}

export default Settings;
