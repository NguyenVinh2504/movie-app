import { memo } from 'react';
import mediaApi from '~/api/module/media.api';
import HeroSliceList from './HeroSliceList';
import { useQuery, keepPreviousData } from '@tanstack/react-query';

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
    return <HeroSliceList  medias={medias?.results} isLoading={isLoading || isError } mediaType={mediaType} />;
}

export default memo(HeroSlice);
