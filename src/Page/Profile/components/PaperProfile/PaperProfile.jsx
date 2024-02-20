import { Paper } from '@mui/material';

const PaperProfile = ({ children, ...props }) => {
    return (
        <Paper variant="outlined" spacing={1} overflow={'hidden'} {...props}>
            {children}
        </Paper>
    );
};

export default PaperProfile;
