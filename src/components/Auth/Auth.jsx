import { Box, LinearProgress, Paper, Typography } from '@mui/material';
import Logo from '~/components/Logo';
import uiConfigs from '~/config/ui.config';

function Auth({ titleAuth, children, isLoading }) {
    return (
        <Paper
            variant="outlined"
            sx={{
                display: 'flex',
                position: 'relative',
                flexDirection: 'column',
                width: '100%',
                minWidth: '380px',
                maxWidth: '35rem',
                margin: 'auto',
                opacity: 1,
                overflow: 'hidden',
                p: '32px',
                mt: { xs: 2, sm: 6 },
                animation: `myEffect 0.8s ease-out`,
                '@keyframes myEffect': {
                    from: {
                        opacity: 0,
                        transform: 'translateY(-50%)',
                    },
                    to: {
                        opacity: 1,
                        transform: 'translateY(0)',
                    },
                },
            }}
        >
            {isLoading && (
                <LinearProgress
                    sx={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        backgroundColor: 'secondary.main',
                        zIndex: 3,
                    }}
                    color="primary"
                    variant="indeterminate"
                />
            )}
            {isLoading && (
                <Box sx={{ ...uiConfigs.style.positionFullSize, bgcolor: 'rgba(0, 0, 0, 0.2)', zIndex: 2 }}></Box>
            )}
            {/* title */}
            <Box sx={{ display: 'flex', alignItems: 'center', flexDirection: 'column', gap: 2, mb: 3, mt: 1 }}>
                {/* logo */}
                <Box sx={{ img: { height: '40px' } }}>
                    <Logo />
                </Box>
                {/* logo */}

                {/* text-heading */}
                <Typography variant="h5" sx={{ fontWeight: 500 }} textAlign={'center'}>
                    {titleAuth}
                </Typography>
                {/* text-heading */}
            </Box>
            {/* title */}
            {children}
        </Paper>
    );
}

export default Auth;
