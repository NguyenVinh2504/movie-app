import { memo } from 'react';
import { Container } from '@mui/material';
import { useInfiniteQuery, keepPreviousData } from '@tanstack/react-query';
import mediaApi from '~/api/module/media.api';
import HeroSlice from '~/components/HeroSlice';
import TabItems from '~/components/TabItems';
import { homeTabItems } from '~/config/HomeTabMenuItems/HomeTabMenuItems';
import MediaGrid from '~/components/Media/MediaGrid';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet';

function Home() {
    const { mediaType, category } = useParams();
    // const params = {};
    // searchParams.forEach((value, key) => {
    //     params[key] = value;
    // });
    // const { mediaType, category} = params;
    // console.log(mediaType, category);
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
    let title = '';
    homeTabItems.forEach((item) => {
        if (category === item.mediaCategory && mediaType === item.mediaType) {
            // document.title = item.name;
            title = item.name;
        }
    });
    // console.log(title);
    return (
        <>
            <Helmet>
                <title>{title}</title>
                <meta
                    name="description"
                    content="Trang Viejoy là một trang web cung cấp cho người dùng khả năng xem phim trực tuyến. Trang web có một thư viện phim khổng lồ, bao gồm các bộ phim mới nhất, phim cũ, phim bom tấn, phim nghệ thuật,...Nguồn phim được cung cấp từ trang Themoviedb. Người dùng có thể tìm kiếm phim theo thể loại, quốc gia, diễn viên, đạo diễn,... và xem phim miễn phí."
                />
            </Helmet>
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
