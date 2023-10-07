import { Typography } from '@mui/material';
import { NavLink } from 'react-router-dom';
import routes from '~/config/routes';

function Logo() {
    return (
        <NavLink to={routes.home}>
            <Typography
                variant="span"
                sx={{
                    color: 'primary.main',
                    fontWeight: '700',
                }}
            >
                MOVI
                <Typography variant="span" sx={{ color: 'white', fontWeight: '700' }}>
                    .COM
                </Typography>
            </Typography>
        </NavLink>
    );
}

export default Logo;
