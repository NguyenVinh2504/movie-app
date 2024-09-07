import { memo } from 'react';
import WrapperMovieDetail from '../components/WrapperMovieDetail';
import CategoryMovieDetail from '../components/CategoryMovieDetail';
import BodyText from '~/components/BodyText';
function OverviewMovieDetail({ loading, dataDetail }) {
    return (
        <WrapperMovieDetail>
            <CategoryMovieDetail valueTitle={'Mô Tả'} />
            <BodyText content={dataDetail.overview} loading={loading} />
        </WrapperMovieDetail>
    );
}

export default memo(OverviewMovieDetail);
