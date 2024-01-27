import { Box } from '@mui/material';
import React from 'react';

const Wrapper = ({ children }) => {
    return (
        <Box
            sx={{
                width: { md: '850px', lg: '1100px', xl: '100%' },
                maxWidth: '1400px',
                mx: 'auto',
                // bgcolor: (theme) => theme.palette.secondary.main,
            }}
        >
            {children}
        </Box>
    );
};

export default Wrapper;
