import WrapperMovieDetail from '../components/WrapperMovieDetail';
import BannerMovieDetail from './BannerMovieDetail';
import TitleMovieDetail from './TitleMovieDetail';

const HeaderMovieDetail = ({ loading, dataDetail, mediaType, genres }) => {
    return (
        <WrapperMovieDetail noPadding>
            <BannerMovieDetail loading={loading} dataDetail={dataDetail} mediaType={mediaType} />
            <TitleMovieDetail loading={loading} dataDetail={dataDetail} genres={genres} mediaType={mediaType} />
        </WrapperMovieDetail>
    );
};

export default HeaderMovieDetail;
