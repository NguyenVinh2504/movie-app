import { Box } from '@mui/material';
import images from '~/assets/image';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { globalLoadingValue } from '~/redux/selectors';

function GlobalLoading() {
    const [isLoading, setIsLoading] = useState(false);
    const globalLoading = useSelector(globalLoadingValue);
    useEffect(() => {
        if (globalLoading) {
            setIsLoading(true);
        } else {
            setTimeout(() => {
                setIsLoading(false);
            }, 1000);
        }
    }, [globalLoading]);
    return (
        <Box
            sx={{
                position: 'fixed',
                opacity: isLoading ? 1 : 0,
                transition: 'opacity 0.3s ease',
                width: '100vw',
                height: '100vh',
                zIndex: '10000',
                background: 'black',
                flexDirection: { xs: 'column', sm: 'row' },
                display: 'flex',
                pointerEvents: 'none',
                justifyContent: 'center',
                alignItems: 'center',
            }}
        >
            <Box sx={{ width: { xs: '60%', sm: 'auto' } }}>
                <img src={images.logo} alt="Logos" loading="lazy" />
            </Box>
            <Box
                sx={{
                    width: '120px',
                    height: '60px',
                    padding: '10px',
                    boxSizing: 'border-box',
                    display: 'flex',
                    justifyContent: 'space-between',
                    background: 'black',
                    filter: 'blur(5px) contrast(10) hue-rotate(60deg)',
                    ':before,\n:after': {
                        content: '""',
                        width: '40px',
                        borderRadius: '50%',
                        background: '#ff00ff',
                        animation: 'l3 0.7s infinite alternate',
                    },
                    ':after': { '--s': '-1' },
                    '@keyframes l3': {
                        '90%,100%': { transform: 'translate(calc(var(--s,1)*30px))' },
                    },
                }}
            ></Box>
        </Box>
    );
}

export default GlobalLoading;
