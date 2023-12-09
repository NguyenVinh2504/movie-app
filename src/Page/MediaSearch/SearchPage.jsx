import { Box, Button, Container, Stack, Typography, useMediaQuery } from '@mui/material';
import Search from './Search';
import Media from '~/components/Media';
import { useSearchParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import mediaApi from '~/api/module/media.api';
import { SvgSpinners3DotsBounce } from '~/components/Icon';
import { usePrevious } from '~/Hooks';

function MediaSearch() {
    const pointDownLg = useMediaQuery((theme) => theme.breakpoints.down('lg'));
    const [dataSearch, setDataSearch] = useState([]);
    const [currPage, setCurrPage] = useState(1);
    const [isLoading, setIsLoading] = useState(false);
    const [moreButton, setMoreButton] = useState(false);
    const [totalPage, setTotalPage] = useState(null);

    let [searchParams] = useSearchParams();
    const query = searchParams.get('query');
    const prevQuery = usePrevious(query);
    useEffect(() => {
        if (query !== null) setIsLoading(true);
        // setMoreButton(false);
        const getDataSearch = async () => {
            // console.log('get');
            const { response, err } = await mediaApi.search({
                mediaType: 'multi',
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
    }, [currPage, prevQuery, query]);
    const handleLoadingMore = () => {
        setCurrPage(currPage + 1);
    };
    useEffect(() => {
        if (currPage === totalPage) {
            setMoreButton(false);
        } else {
            setMoreButton(true);
        }
    }, [currPage, totalPage]);
    return (
        <Container maxWidth={'auto'} sx={{ px: '0' }}>
            <Container maxWidth={'xl'}>
                {pointDownLg && (
                    <Box mb={'20px'}>
                        <Search />
                    </Box>
                )}
                <Typography variant={pointDownLg ? 'h5' : 'h4'} fontWeight={500} mb={'4px'} display={'block'}>
                    Kết quả tìm kiếm: {query}
                </Typography>
                <Media medias={dataSearch} isLoading={isLoading} />
                {isLoading && (
                    <Stack mt={2} alignItems={'center'}>
                        <SvgSpinners3DotsBounce />
                    </Stack>
                )}
                {!isLoading && moreButton && query !== null && (
                    <Stack mt={2} justifyContent={'center'} flexDirection={'row'}>
                        <Button variant="contained" color="secondary" onClick={handleLoadingMore}>
                            Loading More
                        </Button>
                    </Stack>
                )}
            </Container>
        </Container>
    );
}

export default MediaSearch;
