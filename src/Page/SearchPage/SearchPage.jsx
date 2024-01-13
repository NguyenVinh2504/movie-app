import React, { useCallback, useEffect, useRef, useState } from 'react';
import { Box, Button, Container, Grid, Stack, Typography, useMediaQuery } from '@mui/material';
import { useSearchParams } from 'react-router-dom';
import { usePrevious } from '~/Hooks';
import Search from './Search';
import Media from '~/components/Media';
import mediaApi from '~/api/module/media.api';
import TabsSearchTypeMobile from './TabsSearchTypeMobile';
import TabsSearch from './TabsSearch';
import menuItemsSearch from '~/config/MenuItemsSearch';
import { debounce } from 'lodash';

function SearchPage() {
    const isLgDown = useMediaQuery((theme) => theme.breakpoints.down('lg'));
    const isSmDown = useMediaQuery((theme) => theme.breakpoints.down('sm'));
    const [dataSearch, setDataSearch] = useState([]);
    const [valueInput, setValueInput] = useState(null);
    const [currPage, setCurrPage] = useState(1);
    const [isLoading, setIsLoading] = useState(false);
    const [moreButton, setMoreButton] = useState(false);
    const [selectedIndex, setSelectedIndex] = useState(0);

    const [searchParams] = useSearchParams();
    const query = searchParams.get('query');

    const setValue = useRef(
        debounce((query) => {
            // console.log('value', query);
            setValueInput(query);
        }, 1000),
    );

    useEffect(() => {
        // console.log('query', query);
        setValue.current(query);
    }, [query, setValue]);

    const prevQuery = usePrevious(valueInput);
    // console.log('valueInput', valueInput, 'prevQuery', prevQuery);
    useEffect(() => {
        // console.log(
        //     'currPage',
        //     currPage,
        //     'valueInput',
        //     valueInput,
        //     'selectedIndex',
        //     selectedIndex,
        //     'prevQuery',
        //     prevQuery,
        // );
        const fetchData = async () => {
            setMoreButton(false);
            setIsLoading(true);
            const { response } = await mediaApi.search({
                mediaType: menuItemsSearch[selectedIndex].type,
                query: valueInput,
                page: currPage,
            });

            if (response) {
                setIsLoading(false);
                setMoreButton(currPage < response.total_pages);
                setDataSearch((prevData) =>
                    currPage !== 1 ? [...prevData, ...response.results] : [...response.results],
                );
            }
        };

        if (prevQuery !== valueInput) {
            // console.log('co');
            setCurrPage(1);
            setMoreButton(false);
            setDataSearch([]);
            return;
        }
        if (valueInput !== null) fetchData();
    }, [currPage, valueInput, selectedIndex, prevQuery]);

    const handleLoadMore = () => {
        setCurrPage((prevPage) => prevPage + 1);
    };

    const handleListItemClick = useCallback(
        (index) => {
            if (selectedIndex === index) return;
            setDataSearch([]);
            setCurrPage(1);
            setMoreButton(false);
            setSelectedIndex(index);
        },
        [selectedIndex],
    );

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
                        <TabsSearch value={selectedIndex} onListItemClick={handleListItemClick} />
                    </Grid>
                )}
                {/* Tab type search */}

                {/* Tab type search mobile */}
                {isSmDown && (
                    <Grid item xs={12}>
                        <TabsSearchTypeMobile value={selectedIndex} onListItemClick={handleListItemClick} />
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
                    {query && (
                        <Typography variant={isLgDown ? 'h5' : 'h4'} fontWeight={500} mb={2} display="block">
                            Kết quả tìm kiếm: {query}
                        </Typography>
                    )}

                    {dataSearch?.length !== 0 ? (
                        <Media
                            medias={dataSearch}
                            isLoading={isLoading}
                            mediaType={menuItemsSearch[selectedIndex].type}
                        />
                    ) : (
                        <Box height={'500px'} display={'flex'} alignItems={'center'} justifyContent={'center'}>
                            <Typography variant="h4" fontWeight={500} textAlign={'center'}>
                                Không tìm thấy phim
                            </Typography>
                        </Box>
                    )}

                    {moreButton && (
                        <Stack mt={2} justifyContent="center" flexDirection="row">
                            <Button variant="contained" color="secondary" onClick={handleLoadMore}>
                                View More
                            </Button>
                        </Stack>
                    )}
                </Grid>
            </Grid>
        </Container>
    );
}

export default SearchPage;
