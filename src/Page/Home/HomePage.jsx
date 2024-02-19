import { memo } from 'react';
import { Container } from '@mui/material';
import { useInfiniteQuery, keepPreviousData } from '@tanstack/react-query';
import mediaApi from '~/api/module/media.api';
import HeroSlice from '~/components/HeroSlice';
import TabItems from '~/components/TabItems';
import { homeTabItems } from '~/config/HomeTabMenuItems/HomeTabMenuItems';
import MediaGrid from '~/components/Media/MediaGrid';
import { useParams } from 'react-router-dom';

function Home() {
    const { mediaType, category } = useParams();
    // const params = {};
    // searchParams.forEach((value, key) => {
    //     params[key] = value;
    // });
    // const { mediaType, category} = params;
    console.log(mediaType, category);
    const getMedias = async ({ pageParam, mediaType, mediaCategory }) => {
        if (mediaType === 'all') {
            return await mediaApi.getListTrending({
                mediaType: mediaType,
                timeWindow: 'day',
                page: pageParam,
            });
        } else {
            return await mediaApi.getList({
                mediaType,
                mediaCategory,
                page: pageParam,
            });
        }
    };

    const fetchData = async ({ queryKey, pageParam }) => {
        const [mediaType, mediaCategory] = queryKey;
        const { response, err } = await getMedias({ pageParam, mediaType, mediaCategory });
        if (response) return response;
        if (err) throw err;
    };

    const { data, error, isLoading, fetchNextPage, hasNextPage, isFetchingNextPage } = useInfiniteQuery({
        queryKey: [mediaType, category],
        queryFn: ({ queryKey, pageParam }) => fetchData({ queryKey, pageParam }),
        getNextPageParam: (lastPage) => {
            return lastPage?.page === lastPage?.total_pages ? undefined : lastPage?.page + 1;
        },
        initialPageParam: 1,
        placeholderData: keepPreviousData,
    });

    // // console.log('data', data, 'isLoading', isLoading, 'isFetching');
    // const handleCurrCategory = useCallback(
    //     (newValue) => {
    //         if (currCategory === newValue) return;
    //         setCurrCategory(newValue);
    //     },
    //     [currCategory],
    // );
    const handleLoadingMore = () => {
        fetchNextPage();
    };
    // console.log('!isPaused', !isPaused, '!isError', !isError);
    return (
        <>
            <HeroSlice mediaType={'all'} />
            <Container maxWidth={'xl'} sx={{ px: '0' }}>
                <TabItems
                    contentItems={homeTabItems}
                    //  onCurrCategory={handleCurrCategory}
                />
                <MediaGrid
                    isLoadingButton={!isFetchingNextPage && hasNextPage}
                    isLoadingSekeleton={isLoading || isFetchingNextPage || error}
                    mediaType={mediaType}
                    medias={data}
                    onLoadingMore={handleLoadingMore}
                />
                {/* {(isPaused || error) && (
                    <Box sx={{ height: '500px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <Typography variant="h5" fontWeight={500}>
                            Không có kết nối mạng
                        </Typography>
                    </Box>
                )} */}
            </Container>
        </>
    );
}

export default memo(Home);
