import { useDispatch } from 'react-redux';
import { getIdDetail, toggleDetail } from '~/redux/features/mediaDetailSlice';
import { memo } from 'react';
import mediaApi from '~/api/module/media.api';
import { useParams } from 'react-router-dom';
import HeroSliceList from './HeroSliceList';
import { useQuery, keepPreviousData } from '@tanstack/react-query';

function HeroSlice() {
    const { mediaType } = useParams();

    const getDataSearch = async ({ queryKey }) => {
        const mediaType = queryKey[1];
        const { response, err } = await mediaApi.getListTrending({
            mediaType: mediaType,
            timeWindow: 'day',
            page: 1,
        });
        if (response) return response
        if (err) throw err
    };
    const { data: medias, isLoading, isError } = useQuery({
        queryKey: ['Hero slice', mediaType ?? 'all'],
        queryFn: getDataSearch,
        placeholderData: keepPreviousData
    });
    // console.log('data', medias,'isFetching', isPlaceholderData);

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
    return <HeroSliceList onOpen={handleOpen} medias={medias?.results} isLoading={isLoading || isError } />;
}

export default memo(HeroSlice);
