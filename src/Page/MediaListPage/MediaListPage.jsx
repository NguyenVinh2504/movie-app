import { Container } from '@mui/material';
import { useParams } from 'react-router-dom';
import { useInfiniteQuery, keepPreviousData } from '@tanstack/react-query';
import mediaApi from '~/api/module/media.api';
import HeroSlice from '~/components/HeroSlice';
import TabItems from '~/components/TabItems';
import MediaGrid from '~/components/Media/MediaGrid';
import { MovieTabItems } from '~/config/MovieTabMenuItems/MovieTabMenuItems';
import { TvTabItems } from '~/config/TvShowTabMenuItems/TvShowTabMenuItems';
import { Helmet } from 'react-helmet';

function MediaListPage() {
    const { mediaType, key, category } = useParams();
    // console.log(mediaType, key, category);
    const getMedias = async ({ mediaType, key, category, pageParam }) => {
        if (key === 'get-list') {
            return await mediaApi.getList({
                mediaType: mediaType,
                mediaCategory: category,
                page: pageParam,
            });
        } else {
            return await mediaApi.getDiscoverGenres({
                mediaType: mediaType,
                withoutGenres: category,
                page: pageParam,
            });
        }
    };

    const fetchData = async ({ queryKey, pageParam }) => {
        const [mediaType, category, key] = queryKey;

        const { response, err } = await getMedias({ mediaType, key, category, pageParam });
        if (response) return response;
        if (err) throw err;
    };

    const { data, isLoading, fetchNextPage, hasNextPage, isFetchingNextPage, isError } = useInfiniteQuery({
        queryKey: [mediaType, category, key],
        queryFn: ({ queryKey, pageParam }) => fetchData({ queryKey, pageParam }),
        getNextPageParam: (lastPage) => {
            return lastPage?.page === lastPage?.total_pages ? undefined : lastPage?.page + 1;
        },
        placeholderData: keepPreviousData,
        initialPageParam: 1,
    });

    const handleLoadingMore = () => {
        fetchNextPage();
    };
    let title = '';

    // console.log('isFetchingNextPage', isFetchingNextPage, 'hasNextPage', hasNextPage);
    if (mediaType === 'movie') {
        MovieTabItems.forEach((item) => {
            if (category === item.mediaCategory || Number(category) === item.id) {
                title = item.name;
            }
        });
    } else {
        TvTabItems.forEach((item) => {
            if (category === item.mediaCategory || Number(category) === item.id) {
                title = item.name;
            }
        });
    }

    return (
        <>
            <Helmet>
                <title>{title}</title>
                <meta name="description" content="Phim chiếu rạp mới nhất" />
            </Helmet>
            <HeroSlice mediaType={mediaType} />
            <Container maxWidth={'xl'} sx={{ px: '0' }}>
                <TabItems contentItems={mediaType === 'movie' ? MovieTabItems : TvTabItems} />
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
