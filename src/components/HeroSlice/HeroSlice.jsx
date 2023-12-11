import { useDispatch } from 'react-redux';
import { getIdDetail, toggleDetail } from '~/redux/features/mediaDetailSlice';
import { memo, useEffect, useState } from 'react';
import mediaApi from '~/api/module/media.api';
import { toast } from 'react-toastify';
import { useParams } from 'react-router-dom';
import HeroSliceList from './HeroSliceList';
function HeroSlice() {
    const [isLoading, setIsLoading] = useState(true);
    const [medias, setMedias] = useState([]);
    const { mediaType } = useParams();

    useEffect(() => {
        setIsLoading(true);
        setMedias([]);
        const getDataSearch = async () => {
            const { response, err } = await mediaApi.getListTrending({
                mediaType: mediaType ?? 'all',
                timeWindow: 'day',
                page: 1,
            });
            if (err) toast.error(err.message);
            if (response) {
                setIsLoading(false);
                setMedias([...response.results]);
            }
        };
        getDataSearch();
    }, [mediaType]);

    const dispatch = useDispatch();

    const handleOpen = (item) => {
        dispatch(toggleDetail(true));
        dispatch(
            getIdDetail({
                mediaType: item.media_type ?? mediaType,
                id: item.id,
            }),
        );
    };
    return <HeroSliceList onOpen={handleOpen} medias={medias} isLoading={isLoading} />;
}

export default memo(HeroSlice);
