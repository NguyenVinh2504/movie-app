import { Box, Button, Container, Grid, Stack, Typography, useMediaQuery } from '@mui/material';
import Search from './Search';
import Media from '~/components/Media';
import { useSearchParams } from 'react-router-dom';
import { useCallback, useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import mediaApi from '~/api/module/media.api';
import { usePrevious } from '~/Hooks';
import menuItemsSearch from '~/config/MenuItemsSearch';
import TabsSearchTypeMobile from './TabsSearchTypeMobile';
import TabsSearch from './TabsSearch';

function MediaSearch() {
    const pointDownLg = useMediaQuery((theme) => theme.breakpoints.down('lg'));
    const pointDownSm = useMediaQuery((theme) => theme.breakpoints.down('sm'));
    const [dataSearch, setDataSearch] = useState([]);
    const [currPage, setCurrPage] = useState(1);
    const [isLoading, setIsLoading] = useState(false);
    const [moreButton, setMoreButton] = useState(false);
    const [totalPage, setTotalPage] = useState(null);
    const [selectedIndex, setSelectedIndex] = useState(0);

    let [searchParams] = useSearchParams();
    const query = searchParams.get('query');
    const prevQuery = usePrevious(query);
    useEffect(() => {
        if (query !== null) {
            setIsLoading(true);
        } else if (query === null) {
            setIsLoading(false);
        }
        const getDataSearch = async () => {
            // console.log('get');
            const { response, err } = await mediaApi.search({
                mediaType: menuItemsSearch[selectedIndex].type,
                query: query,
                page: currPage,
            });
            if (err) toast.error(err.message);
            if (response) {
                setIsLoading(false);
                if (currPage !== 1) {
                    setDataSearch((m) => [...m, ...response.results]);
                    setTotalPage(response.total_pages);
                } else {
                    setDataSearch([...response.results]);
                    setTotalPage(response.total_pages);
                }
            }
        };
        if (prevQuery !== query) {
            setCurrPage(1);
            setDataSearch([]);
        }
        const timer = setTimeout(() => {
            if (query !== null) getDataSearch();
        }, [1000]);
        return () => clearTimeout(timer);
    }, [currPage, prevQuery, query, selectedIndex]);
    const handleLoadingMore = () => {
        setCurrPage(currPage + 1);
    };
    // useEffect(() => {
    //     if (query === null) {
    //         setIsLoading(false);
    //     }
    // }, [query]);
    useEffect(() => {
        if (currPage === totalPage) {
            setMoreButton(false);
        } else if (query !== null) {
            setMoreButton(true);
        }
    }, [currPage, query, totalPage]);

    const handleListItemClick = useCallback(
        (index) => {
            if (selectedIndex === index) return;
            setDataSearch([]);
            setSelectedIndex(index);
        },
        [selectedIndex],
    );

    return (
        <Container maxWidth={'xl'}>
            {pointDownLg && (
                <Box mb={'20px'}>
                    <Search />
                </Box>
            )}
            <Grid container columnSpacing={2} rowSpacing={2}>
                {/* tab type search */}
                {!pointDownSm && (
                    <Grid item xs={12} sm={4} md={3} lg={2.5} xl={2}>
                        <TabsSearch value={selectedIndex} onListItemClick={handleListItemClick} />
                    </Grid>
                )}
                {/* tab type search */}
                {/* tab type search mobile*/}
                {pointDownSm && (
                    <Grid item xs={12}>
                        <TabsSearchTypeMobile value={selectedIndex} onListItemClick={handleListItemClick} />
                    </Grid>
                )}
                {/* tab type search mobile*/}
                <Grid item xs={12} sm={8} md={9} lg={9.5} xl={10}>
                    {query && (
                        <Typography variant={pointDownLg ? 'h5' : 'h4'} fontWeight={500} mb={2} display={'block'}>
                            Kết quả tìm kiếm: {query}
                        </Typography>
                    )}
                    <Media medias={dataSearch} isLoading={isLoading} mediaType={menuItemsSearch[selectedIndex].type} />
                    {!isLoading && moreButton && query !== null && (
                        <Stack mt={2} justifyContent={'center'} flexDirection={'row'}>
                            <Button variant="contained" color="secondary" onClick={handleLoadingMore}>
                                See More
                            </Button>
                        </Stack>
                    )}
                </Grid>
            </Grid>
        </Container>
    );
}

export default MediaSearch;
