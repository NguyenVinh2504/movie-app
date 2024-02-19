import React, { useEffect, useRef, useState } from 'react';
import { useParams, useSearchParams } from 'react-router-dom';
import { Box, Container, Grid, Stack, Typography, useMediaQuery } from '@mui/material';
import { debounce } from 'lodash';
import { useInfiniteQuery, keepPreviousData } from '@tanstack/react-query';
import mediaApi from '~/api/module/media.api';
import Search from './Search';
import TabsSearchTypeMobile from './TabsSearchTypeMobile';
import TabsSearch from './TabsSearch';
import images from '~/assets/image';
import uiConfigs from '~/config/ui.config';
import MediaGrid from '~/components/Media/MediaGrid';

function SearchPage() {
    const isLgDown = useMediaQuery((theme) => theme.breakpoints.down('lg'));
    const isSmDown = useMediaQuery((theme) => theme.breakpoints.down('sm'));
    const [valueInput, setValueInput] = useState(null);
    // const [selectedIndex, setSelectedIndex] = useState(0);

    const [searchParams] = useSearchParams();
    const query = searchParams.get('query');
    const { mediaType } = useParams();
    const setValue = useRef(
        debounce((query) => {
            setValueInput(query);
        }, 1000),
    );

    useEffect(() => {
        setValue.current(query);
    }, [query, setValue]);

    const fetchData = async ({ queryKey, pageParam }) => {
        const [mediaType, valueInput] = queryKey;
        const { response, err } = await mediaApi.search({
            mediaType,
            query: valueInput,
            page: pageParam,
        });

        if (response) return response;
        if (err) throw err;
    };

    const handleLoadMore = () => {
        fetchNextPage();
    };

    // const handleListItemClick = useCallback(
    //     (index) => {
    //         if (selectedIndex === index) return;
    //         setSelectedIndex(index);
    //     },
    //     [selectedIndex],
    // );

    const { data, isLoading, isFetchingNextPage, isError, fetchNextPage, hasNextPage } = useInfiniteQuery({
        queryKey: [mediaType, valueInput],
        queryFn: ({ queryKey, pageParam }) => fetchData({ queryKey, pageParam }),
        getNextPageParam: (lastPage) => {
            return lastPage.page === lastPage.total_pages ? undefined : lastPage.page + 1;
        },
        enabled: Boolean(valueInput),
        initialPageParam: 1,
        placeholderData: keepPreviousData,
    });
    console.log(valueInput);
    return (
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
                        <TabsSearch valueInput={valueInput} />
                    </Grid>
                )}
                {/* Tab type search */}

                {/* Tab type search mobile */}
                {isSmDown && (
                    <Grid item xs={12}>
                        <TabsSearchTypeMobile valueInput={valueInput}/>
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
                                mediaType={mediaType}
                                medias={data}
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
    );
}

export default SearchPage;
