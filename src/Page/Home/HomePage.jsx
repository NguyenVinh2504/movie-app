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
import config from '~/config';
import useDetailMovie from '~/Hooks/useIsDetailMovie';
import { useMediaList } from '~/Hooks';

function Home() {
    const { mediaType, category } = useParams();
    const isDetailMovie = useDetailMovie();
    // const [data, setData] = useState();
    async function fetchData({ pageParam }) {
        const { response, err } =
            mediaType === 'all'
                ? await mediaApi.getListTrending({
                      mediaType,
                      timeWindow: 'day',
                      page: pageParam,
                  })
                : await mediaApi.getList({
                      mediaType,
                      mediaCategory: category,
                      page: pageParam,
                  });

        if (!response && err) {
            return Promise.reject(err);
        }
        return response;
    }

    const {
        data,
        error,
        isLoading,
        fetchNextPage,
        hasNextPage,
        isFetchingNextPage,
    } = useInfiniteQuery({
        queryKey: [mediaType, category],
        queryFn: ({ pageParam }) => fetchData({ pageParam }),
        getNextPageParam: (lastPage) => {
            return lastPage?.page === lastPage?.total_pages
                ? undefined
                : lastPage?.page + 1;
        },
        initialPageParam: 1,
        placeholderData: keepPreviousData,
    });

    const medias = useMediaList(data);
    // useEffect(() => {
    //     if (medias) {
    //         setData(medias);
    //     }
    // }, [medias]);
    // // console.log('data', data, 'isLoading', isLoading, 'isFetching');
    // const handleCurrCategory = useCallback(
    //     (newValue) => {
    //         if (currCategory === newValue) return;
    //         setCurrCategory(newValue);
    //     },
    //     [currCategory],
    // );
    // useEffect(() => {

    // setData({ ...medias, pages: newList });
    // }, [medias, favorites]);
    const handleLoadingMore = () => {
        fetchNextPage();
    };
    let title = '';
    homeTabItems.forEach((item) => {
        if (category === item.mediaCategory && mediaType === item.mediaType) {
            // document.title = item.name;
            title = item.name;
        }
    });
    // console.log('data', data);

    return (
        <>
            {!isDetailMovie && (
                <Helmet>
                    <title>{title}</title>
                    <meta
                        name="description"
                        content="Trang Viejoy là một trang web cung cấp cho người dùng khả năng xem phim trực tuyến. Trang web có một thư viện phim khổng lồ, bao gồm các bộ phim mới nhất, phim cũ, phim bom tấn, phim nghệ thuật."
                    />
                </Helmet>
            )}
            <HeroSlice mediaType={'all'} path={config.routes.home} />
            <Container maxWidth={'xl'} sx={{ px: '0' }}>
                <TabItems
                    contentItems={homeTabItems}
                    //  onCurrCategory={handleCurrCategory}
                />
                <MediaGrid
                    isLoadingButton={!isFetchingNextPage && hasNextPage}
                    isLoadingSekeleton={
                        isLoading || isFetchingNextPage || error
                    }
                    mediaType={mediaType}
                    medias={medias}
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
