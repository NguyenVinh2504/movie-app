import { Box, Typography } from '@mui/material';
import images from '~/assets/image';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { globalLoadingValue } from '~/redux/selectors';
import theme from '~/theme';

function GlobalLoading() {
    const [isLoading, setIsLoading] = useState(true);
    const [shouldRender, setRender] = useState(true);
    const globalLoading = useSelector(globalLoadingValue);
    useEffect(() => {
        if (globalLoading) {
            document.querySelector('body').style.cssText = 'overflow: hidden';
            setIsLoading(true);
        } else {
            setTimeout(() => {
                document.querySelector('body').removeAttribute('style');
                setIsLoading(false);
            }, 1500);
        }
    }, [globalLoading]);
    const handleonAnimationEnd = () => {
        if (!isLoading) setRender(false);
    };
    return (
        shouldRender && (
            <Box
                sx={{
                    position: 'fixed',
                    opacity: isLoading ? 1 : 0,
                    transition: `opacity 0.3s ${theme.transitions.easing.easeOut}`,
                    width: '100vw',
                    height: '100vh',
                    zIndex: '10000',
                    background: 'black',
                    flexDirection: 'column',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
                onTransitionEnd={handleonAnimationEnd}
            >
                <Box sx={{ width: { xs: '45%', sm: 'auto' }, mt: { xs: '-40%', sm: '0' } }}>
                    <img src={images.logo} alt="Logos" loading="lazy" />
                </Box>
                <Typography position={'absolute'} bottom={0} mb={5} variant='subtitle2'>Powered by Nguyen Vinh</Typography>
                {/* <Box
                sx={{
                    width: '110px',
                    height: '60px',
                    padding: '10px',
                    // boxSizing: 'border-box',
                    display: 'flex',
                    justifyContent: 'space-between',
                    background: 'black',
                    filter: 'blur(5px) contrast(10) hue-rotate(60deg)',
                    ':before,\n:after': {
                        content: '""',
                        width: '30px',
                        height: '30px',
                        borderRadius: '50%',
                        background: '#ff00ff',
                        animation: 'l3 0.8s infinite alternate',
                    },
                    ':after': { '--s': '-1' },
                    '@keyframes l3': {
                        '90%,100%': { transform: 'translate(calc(var(--s,1)*30px))' },
                    },
                }}
            ></Box> */}
            </Box>
        )
    );
}

export default GlobalLoading;
