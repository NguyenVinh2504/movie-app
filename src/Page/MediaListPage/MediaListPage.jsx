import { useCallback, useState } from 'react';
import { Container } from '@mui/material';
import { useParams } from 'react-router-dom';
import { useInfiniteQuery, keepPreviousData } from '@tanstack/react-query';
import mediaApi from '~/api/module/media.api';
import HeroSlice from '~/components/HeroSlice';
import TabItems from '~/components/TabItems';
import MediaGrid from '~/components/Media/MediaGrid';
import { MovieTabItems } from '~/config/MovieTabMenuItems/MovieTabMenuItems';
import { TvTabItems } from '~/config/TvShowTabMenuItems/TvShowTabMenuItems';

function MediaListPage() {
    const [currCategory, setCurrCategory] = useState(0);
    const { mediaType } = useParams();

    const getMedias = async ({ mediaType, key, mediaCategory, pageParam }) => {
        if (key === 'getList') {
            return await mediaApi.getList({
                mediaType: mediaType,
                mediaCategory,
                page: pageParam,
            });
        } else {
            return await mediaApi.getDiscoverGenres({
                mediaType: mediaType,
                withoutGenres: mediaCategory,
                page: pageParam,
            });
        }
    };

    const fetchData = async ({ queryKey, pageParam }) => {
        const [mediaType, key, mediaCategory] = queryKey;

        const { response, err } = await getMedias({ mediaType, key, mediaCategory, pageParam });
        if (response) return response;
        if (err) throw err;
    };

    const { data, isLoading, fetchNextPage, hasNextPage, isFetchingNextPage, isError } = useInfiniteQuery({
        queryKey: [
            mediaType,
            MovieTabItems[currCategory].key,
            MovieTabItems[currCategory].key === 'getList' || TvTabItems[currCategory].key === 'getList'
                ? mediaType === 'movie'
                    ? MovieTabItems[currCategory].mediaCategory
                    : TvTabItems[currCategory].mediaCategory
                : mediaType === 'movie'
                ? MovieTabItems[currCategory].id
                : TvTabItems[currCategory].id,
        ],
        queryFn: ({ queryKey, pageParam }) => fetchData({ queryKey, pageParam }),
        getNextPageParam: (lastPage) => {
            return lastPage?.page === lastPage?.total_pages ? undefined : lastPage?.page + 1;
        },
        placeholderData: keepPreviousData,
        initialPageParam: 1,
    });

    const handleCurrCategory = useCallback(
        (newValue) => {
            if (currCategory === newValue) return;
            setCurrCategory(newValue);
        },
        [currCategory],
    );
    const handleLoadingMore = () => {
        fetchNextPage();
    };
console.log('isFetchingNextPage', isFetchingNextPage, 'hasNextPage', hasNextPage);
    return (
        <>
            <HeroSlice />
            <Container maxWidth={'xl'} sx={{ px: '0' }}>
                <TabItems
                    contentItems={mediaType === 'movie' ? MovieTabItems : TvTabItems}
                    onCurrCategory={handleCurrCategory}
                />
                <MediaGrid
                    isLoadingButton={!isFetchingNextPage && hasNextPage}
                    isLoadingSekeleton={isLoading || isFetchingNextPage || isError}
                    mediaType={mediaType}
                    medias={data}
                    onLoadingMore={handleLoadingMore}
                />
            </Container>
        </>
    );
}

export default MediaListPage;
