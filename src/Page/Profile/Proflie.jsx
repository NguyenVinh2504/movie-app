import { Outlet } from 'react-router-dom';
import { Box } from '@mui/material';
import { profileItems } from '~/config/ProfileMenuItems';
import HeaderProfile from '~/components/HeaderProfile';

function Profile() {
    return (
        <Box
            sx={{
                width: { md: '850px', lg: '1100px', xl: '100%' },
                maxWidth: '1536px',
                m: 'auto',
                // bgcolor: (theme) => theme.palette.secondary.main,
            }}
        >
            {/* head */}
            <HeaderProfile valueTabItems={profileItems} />
            {/* head */}
            {/* content */}
            <Box component={'section'} sx={{ mt: 3 }}>
                <Outlet />
            </Box>
            {/* content */}
        </Box>
    );
}

export default Profile;
