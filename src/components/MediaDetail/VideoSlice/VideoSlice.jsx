import 'swiper/scss';
import 'swiper/scss/navigation';
import { Box, Typography } from '@mui/material';
import { memo } from 'react';
import VideoSliceList from './VideoSliceList';
import VideoSliceSkeleton from './VideoSliceSkeleton';
function VideoSlice({ videos, loading }) {
    return (
        <Box mt={3}>
            <Typography variant={'h5'} mb={1} fontWeight={'500'}>
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
