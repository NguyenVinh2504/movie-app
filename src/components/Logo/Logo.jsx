import { Typography } from '@mui/material';
import { NavLink } from 'react-router-dom';

function Logo() {
    return (
        <NavLink to={'/'}>
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
