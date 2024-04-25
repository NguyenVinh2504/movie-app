import React, { useEffect, useRef, useState } from 'react';
import { Box, Container, Grid, Stack, Typography, useMediaQuery } from '@mui/material';
import { debounce } from 'lodash';
import { useInfiniteQuery, keepPreviousData } from '@tanstack/react-query';
import mediaApi from '~/api/module/media.api';
import Search from '../../components/Search';
import TabsSearchTypeMobile from './TabsSearchTypeMobile';
import TabsSearch from './TabsSearch';
import images from '~/assets/image';
import uiConfigs from '~/config/ui.config';
import MediaGrid from '~/components/Media/MediaGrid';
import { useMediaList, useQueryConfig } from '~/Hooks';
import { Helmet } from 'react-helmet';
import useDetailMovie from '~/Hooks/useIsDetailMovie';

function SearchPage() {
    const isLgDown = useMediaQuery((theme) => theme.breakpoints.down('lg'));
    const isSmDown = useMediaQuery((theme) => theme.breakpoints.down('sm'));
    const [valueInput, setValueInput] = useState(null);
    const { query, media_type } = useQueryConfig();
    const isDetailMovie = useDetailMovie();

    const setValue = useRef(
        debounce((query) => {
            setValueInput(query);
        }, 1000),
    );

    useEffect(() => {
        if (query) setValue.current(query);
    }, [query, setValue]);

    const fetchData = async (pageParam) => {
        const { response, err } = await mediaApi.search({
            mediaType: media_type ?? 'movie',
            query: valueInput,
            page: pageParam,
        });

        if (response) return response;
        if (err) throw err;
    };

    const handleLoadMore = () => {
        fetchNextPage();
    };

    const { data, isLoading, isFetchingNextPage, isError, fetchNextPage, hasNextPage } = useInfiniteQuery({
        queryKey: [media_type ?? 'movie', valueInput],
        queryFn: ({ pageParam }) => fetchData(pageParam),
        getNextPageParam: (lastPage) => {
            return lastPage.page === lastPage.total_pages ? undefined : lastPage.page + 1;
        },
        enabled: Boolean(valueInput),
        initialPageParam: 1,
        placeholderData: keepPreviousData,
    });

    const medias = useMediaList(data);

    return (
        <>
            {!isDetailMovie && <Helmet title={`Tìm kiếm: ${query || ''}`} />}
            <Container maxWidth="xl">
                {isLgDown && (
                    <Box mb="20px">
                        <Search />
                    </Box>
                )}

                <Grid container columnSpacing={2} rowSpacing={2}>
                    {/* Tab type search */}
                    {!isSmDown && (
                        <Grid item xs={12} sm={4} md={3} lg={2.5} xl={2}>
                            <TabsSearch valueInput={query} />
                        </Grid>
                    )}
                    {/* Tab type search */}

                    {/* Tab type search mobile */}
                    {isSmDown && (
                        <Grid item xs={12}>
                            <TabsSearchTypeMobile valueInput={query} />
                        </Grid>
                    )}
                    {/* Tab type search mobile */}

                    <Grid
                        item
                        xs={12}
                        sm={isSmDown ? 12 : 8}
                        md={isSmDown ? 12 : 9}
                        lg={isSmDown ? 12 : 9.5}
                        xl={isSmDown ? 12 : 10}
                    >
                        <Stack>
                            {query && (
                                <Typography variant={isLgDown ? 'h5' : 'h4'} fontWeight={500} mb={2} display="block">
                                    Kết quả tìm kiếm: {query}
                                </Typography>
                            )}
                            {data?.pages[0]?.total_results !== 0 ? (
                                <MediaGrid
                                    isLoadingButton={!isFetchingNextPage && hasNextPage && !isLoading}
                                    isLoadingSekeleton={isLoading || isFetchingNextPage || isError}
                                    mediaType={media_type ?? 'movie'}
                                    medias={medias}
                                    onLoadingMore={handleLoadMore}
                                />
                            ) : (
                                <Box
                                    sx={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        width: '100%',
                                        flexDirection: 'column',
                                    }}
                                >
                                    <Box sx={{ width: { xs: '80%', sm: '50%' } }}>
                                        <Box sx={{ pt: 'calc((150/225)*100%)', position: 'relative' }}>
                                            <Box sx={{ ...uiConfigs.style.positionFullSize }}>
                                                <img src={images.noResult} alt="noResult" />
                                            </Box>
                                        </Box>
                                    </Box>
                                </Box>
                            )}
                        </Stack>
                    </Grid>
                </Grid>
            </Container>
        </>
    );
}

export default SearchPage;
