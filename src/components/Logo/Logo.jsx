// import { Typography } from '@mui/material';
import { NavLink } from 'react-router-dom';
import routes from '~/config/routes';
import images from '~/assets/image';
import { Box } from '@mui/material';

function Logo() {
    return (
        <Box sx={{ height: '100%', display: 'flex', alignItems: 'center' }}>
            <NavLink to={routes.home}>
                {/* <Typography
                    variant="h5"
                    sx={{
                        color: 'primary.main',
                        fontWeight: '500',
                    }}
                >
                    MOVI
                    <Typography
                        variant="span"
                        sx={{
                            color: 'white',
                        }}
                    >
                        .COM
                    </Typography>
                </Typography> */}
                <img src={images.logo} style={{ height: '18px' }} alt="Logos" />
            </NavLink>
        </Box>
    );
}

export default Logo;
