import 'swiper/scss';
import 'swiper/scss/navigation';
import { Paper, Typography, useMediaQuery } from '@mui/material';
import { memo } from 'react';
import VideoSliceList from './VideoSliceList';
import VideoSliceSkeleton from './VideoSliceSkeleton';
function VideoSlice({ videos, loading }) {
    const pointDownSm = useMediaQuery((theme) => theme.breakpoints.down('sm'));
    return (
        <Paper sx={{ mt: 1, p: 2 }}>
            <Typography variant={pointDownSm ? 'h6' : 'h5'} mb={1} fontWeight={'500'}>
                Trailer
            </Typography>
            {loading ? (
                <VideoSliceSkeleton />
            ) : videos?.length !== 0 ? (
                <VideoSliceList videos={videos} />
            ) : (
                <Typography variant="subtitle1">Không có nội dung</Typography>
            )}
        </Paper>
    );
}

export default memo(VideoSlice);
