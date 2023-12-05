import CastSliceList from './CastSliceList';
import { Box, Typography } from '@mui/material';
import CastSliceSkeleton from './CastSliceSkeleton';

function CastSlice({ loading, cast }) {
    return (
        <Box mt={3}>
            <Typography variant={'h5'} mb={1} fontWeight={'500'}>
                Diễn Viên
            </Typography>
            {loading ? (
                <CastSliceSkeleton />
            ) : cast?.length !== 0 ? (
                <CastSliceList cast={cast} />
            ) : (
                <Typography variant="subtitle1">Không có nội dung</Typography>
            )}
        </Box>
    );
}

export default CastSlice;
