import { Typography } from '@mui/material';
import { NavLink } from 'react-router-dom';
import routes from '~/config/routes';

function Logo() {
    return (
        <NavLink to={routes.home}>
            <Typography
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
            </Typography>
        </NavLink>
    );
}

export default Logo;
