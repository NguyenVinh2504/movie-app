import CastSliceList from './CastSliceList';
import { Typography } from '@mui/material';
import CastSliceSkeleton from './CastSliceSkeleton';
import WrapperMovieDetail from '../components/WrapperMovieDetail';
import CategoryMovieDetail from '../components/CategoryMovieDetail';

function CastSlice({ loading, cast }) {
    return (
        <WrapperMovieDetail>
            <CategoryMovieDetail valueTitle={'Diễn Viên'} />
            {loading ? (
                <CastSliceSkeleton />
            ) : cast?.length !== 0 ? (
                <CastSliceList cast={cast} />
            ) : (
                <Typography variant="subtitle1">Không có nội dung</Typography>
            )}
        </WrapperMovieDetail>
    );
}

export default CastSlice;
