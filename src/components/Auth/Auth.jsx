import { Box, Typography } from '@mui/material';
import Logo from '~/components/Logo';
import SingIn from '../SingIn';
import SingUp from '../SingUp';
import { useParams } from 'react-router-dom';

function Auth() {
    let { accountType } = useParams();
    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                width: '100%',
                maxWidth: '35rem',
                bgcolor: '#ffffff08',
                // height: '200px',
                margin: 'auto',
                border: '1px solid hsla(0,0%,100%,.1)',
                p: '32px',
                mt: {xs: 2, sm: 15},
                borderRadius: '0.5rem',
                animation: `myEffect 0.8s ease-out`,
                "@keyframes myEffect": {
                    "from": {
                      opacity: 0,
                      transform: "translateY(-50%)"
                    },
                    "to": {
                      opacity: 1,
                      transform: "translateY(0)"
                    }
                  },
            }}
        >
            {/* title */}
            <Box sx={{ display: 'flex', alignItems: 'center', flexDirection: 'column', gap: 2, mb: 3, mt: 1 }}>
                {/* logo */}
                <Box sx={{ img: { height: '25px' } }}>
                    <Logo />
                </Box>
                {/* logo */}

                {/* text-heading */}
                <Typography variant="h5" sx={{ fontWeight: 500 }}>
                    Sign in to your account
                </Typography>
                {/* text-heading */}
            </Box>
            {/* title */}
            {accountType === 'login' && <SingIn></SingIn>}
            {accountType === 'signup' && <SingUp></SingUp>}
        </Box>
    );
}

export default Auth;
