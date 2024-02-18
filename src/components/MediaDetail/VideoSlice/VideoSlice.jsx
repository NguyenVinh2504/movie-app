import 'swiper/scss';
import 'swiper/scss/navigation';
import { Typography } from '@mui/material';
import { memo } from 'react';
import VideoSliceList from './VideoSliceList';
import VideoSliceSkeleton from './VideoSliceSkeleton';
import WrapperMovieDetail from '../components/WrapperMovieDetail';
import CategoryMovieDetail from '../components/CategoryMovieDetail';
function VideoSlice({ videos, loading }) {
    return (
        <WrapperMovieDetail>
            <CategoryMovieDetail valueTitle={'Trailer'} />
            {loading ? (
                <VideoSliceSkeleton />
            ) : videos?.length !== 0 ? (
                <VideoSliceList videos={videos} />
            ) : (
                <Typography variant="subtitle1">Không có nội dung</Typography>
            )}
        </WrapperMovieDetail>
    );
}

export default memo(VideoSlice);
