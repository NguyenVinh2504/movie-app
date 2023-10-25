import { Outlet } from 'react-router-dom';
import { Box } from '@mui/material';
import HeaderProfile from '~/components/HeaderProfile';
import { settingUserItems } from '~/config/SettingUserMenuItems';

function Settings() {
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
