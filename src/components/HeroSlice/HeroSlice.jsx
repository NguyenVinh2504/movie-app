import { useDispatch } from 'react-redux';
import { getIdDetail, toggleDetail } from '~/redux/features/mediaDetailSlice';
import { memo } from 'react';
import mediaApi from '~/api/module/media.api';
import HeroSliceList from './HeroSliceList';
import { useQuery, keepPreviousData } from '@tanstack/react-query';
import { createSearchParams, useNavigate } from 'react-router-dom';

function HeroSlice({mediaType}) {

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
        placeholderData: keepPreviousData,
    });
    // console.log('data', medias,'isFetching', isPlaceholderData);

    const dispatch = useDispatch();
    const location = useNavigate();

    const handleOpen = (item) => {
        location({
            search: createSearchParams({ detailId: '1111', detailType: 'movie' }),
        });
        dispatch(toggleDetail(true));
        dispatch(
            getIdDetail({
                mediaType: item.media_type ?? mediaType,
                id: item.id,
            }),
        );
    };
    return <HeroSliceList onOpen={handleOpen} medias={medias?.results} isLoading={isLoading || isError } mediaType={mediaType} />;
}

export default memo(HeroSlice);
