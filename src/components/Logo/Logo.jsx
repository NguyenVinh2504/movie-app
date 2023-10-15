// import { Typography } from '@mui/material';
import { NavLink } from 'react-router-dom';
import routes from '~/config/routes';
import MoviLogo from '~/assets/image/MoviLogo.svg';
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
                <img src={MoviLogo} height={'18px'} alt="Logos" />
            </NavLink>
        </Box>
    );
}

export default Logo;
