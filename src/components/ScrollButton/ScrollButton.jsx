import { ArrowUpward } from '@mui/icons-material';
import { IconButton } from '@mui/material';
import React, { useEffect, useState } from 'react';

function ScrollButton() {
    const [visible, setVisible] = useState(false);
    const handleScroll = () => {
        if (window.scrollY > 900) {
            setVisible(true);
        } else {
            setVisible(false);
        }
    };
    const handleClick = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };
    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    return (
        <IconButton
            onClick={handleClick}
            color="primary"
            sx={{
                visibility: visible ? 'visible' : 'hidden',
                display: { xs: 'none', sm: 'inline-flex' },
                opacity: visible ? 1 : 0,
                transition:
                    'visibility, opacity 0.3s cubic-bezier(0.550, 0.055, 0.675, 0.190)',
                position: 'fixed',
                bottom: '9%',
                right: '4%',
                zIndex: 1000,
            }}
        >
            <ArrowUpward sx={{ fill: 'white' }} fontSize="large" />
        </IconButton>
    );
}

export default ScrollButton;
