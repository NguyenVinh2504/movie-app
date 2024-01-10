// import { useRouteError } from 'react-router-dom';

import { Box, Button } from '@mui/material';
import { NavLink } from 'react-router-dom';
import images from '~/assets/image';

export default function ErrorPage() {
    return (
        <Box sx={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
            <Box px={2} sx={{ width: { xs: '100%', sm: '50%' } }}>
                <img src={images.notFoundPage} alt="notFound" />
            </Box>
            <Button variant="contained">
                <NavLink to={'/'}>Về Trang Chủ</NavLink>
            </Button>
        </Box>
    );
}
