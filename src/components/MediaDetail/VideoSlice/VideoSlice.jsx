import 'swiper/scss';
import 'swiper/scss/navigation';
import { Box, Typography, useMediaQuery } from '@mui/material';
import { memo } from 'react';
import VideoSliceList from './VideoSliceList';
import VideoSliceSkeleton from './VideoSliceSkeleton';
function VideoSlice({ videos, loading }) {
    const pointDownSm = useMediaQuery((theme) => theme.breakpoints.down('sm'));
    return (
        <Box mt={3}>
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
        </Box>
    );
}

export default memo(VideoSlice);
