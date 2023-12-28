import CastSliceList from './CastSliceList';
import { Paper, Typography, useMediaQuery } from '@mui/material';
import CastSliceSkeleton from './CastSliceSkeleton';

function CastSlice({ loading, cast }) {
    const pointDownSm = useMediaQuery((theme) => theme.breakpoints.down('sm'));
    return (
        <Paper sx={{ mt: 1, p: 2 }}>
            <Typography variant={pointDownSm ? 'h6' : 'h5'} mb={1} fontWeight={'500'}>
                Diễn Viên
            </Typography>
            {loading ? (
                <CastSliceSkeleton />
            ) : cast?.length !== 0 ? (
                <CastSliceList cast={cast} />
            ) : (
                <Typography variant="subtitle1">Không có nội dung</Typography>
            )}
        </Paper>
    );
}

export default CastSlice;
