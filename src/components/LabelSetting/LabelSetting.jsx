import { Typography } from '@mui/material';
import { memo } from 'react';

const Label = ({ children }) => {
    return (
        <Typography variant="subtitle1" fontWeight={500} mb={0.5}>
            {children}
        </Typography>
    );
};
export default memo(Label);
