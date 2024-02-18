import { Paper } from '@mui/material';

const WrapperMovieDetail = ({ children, noPadding = false }) => {
    return (
        <Paper variant="outlined" sx={noPadding ? { overflow: 'hidden' } : { overflow: 'hidden', mt: 1, p: 2 }}>
            {children}
        </Paper>
    );
};

export default WrapperMovieDetail;
