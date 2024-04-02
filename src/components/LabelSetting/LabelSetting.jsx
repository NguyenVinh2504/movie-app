import { Typography } from '@mui/material';
import { memo } from 'react';

const Label = ({ children }) => {
    return (
        <Typography variant="subtitle1" fontWeight={500} mb={0.5} component={'label'} display={'block'}>
            {children}
        </Typography>
    );
};
export default memo(Label);
