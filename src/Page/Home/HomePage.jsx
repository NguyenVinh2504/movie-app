import HeroSlice from '~/components/HeroSlice';
import { Button, Container, Stack } from '@mui/material';
import { homeTabItems } from '~/config/HoneTabMenuItems/HomeTabMenuItems';
import TabItems from '~/components/TabItems';
import Media from '~/components/Media';
import { toast } from 'react-toastify';
import mediaApi from '~/api/module/media.api';
import { memo, useCallback, useEffect, useState } from 'react';
function Home() {
    const [medias, setMedias] = useState([]);
    const [currPage, setCurrPage] = useState(1);
    const [currCategory, setCurrCategory] = useState(0);
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        const getMedias = async () => {
            if (homeTabItems[currCategory].name === 'Thịnh Hành') {
                return await mediaApi.getListTrending({
                    mediaType: 'all',
                    timeWindow: 'day',
                    page: currPage,
                });
            } else {
                return await mediaApi.getList({
                    mediaType: homeTabItems[currCategory].mediaType,
                    mediaCategory: homeTabItems[currCategory].mediaCategory,
                    page: currPage,
                });
            }
        };
        const fetchData = async () => {
            setIsLoading(true);
            const { response, err } = await getMedias();
            if (err) toast.error(err.message);
            if (response) {
                setIsLoading(false);
                if (response.total_pages === currPage) return;
                else if (response?.results?.length === 0) setIsLoading(true);
                else if (currPage !== 1) setMedias((m) => [...m, ...response.results]);
                else setMedias([...response.results]);
            }
        };
        fetchData();
    }, [currCategory, currPage]);
    const handleCurrCategory = useCallback(
        (event, newValue) => {
            if (currCategory === newValue) return;
            setMedias([]);
            setCurrPage(1);
            setCurrCategory(newValue);
        },
        [currCategory],
    );
    // useEffect(() => {
    //     if (medias.length !== 0 && isLoading === false) {
    //         const handleScroll = () => {
    //             if (window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 800) {
    //                 setCurrPage(currPage + 1);
    //             }
    //         };
    //         window.addEventListener('scroll', handleScroll);
    //         return () => window.removeEventListener('scroll', handleScroll);
    //     }
    // }, [currPage, isLoading, medias]);
    // useEffect(() => {
    //     isLoading && window.scrollTo(0, document.body.scrollHeight);
    // }, [isLoading]);
    const handleLoadingMore = () => {
        setCurrPage(currPage + 1);
    };
    return (
        <>
            <HeroSlice />
            <Container maxWidth={'xl'} sx={{ px: '0' }}>
                <TabItems contentItems={homeTabItems} onCurrCategory={handleCurrCategory} />
                <Media medias={medias} isLoading={isLoading} mediaType={homeTabItems[currCategory].mediaType} />
                {!isLoading && (
                    <Stack mt={2} justifyContent={'center'} flexDirection={'row'}>
                        <Button variant="contained" color="secondary" onClick={handleLoadingMore}>
                            See More
                        </Button>
                    </Stack>
                )}
            </Container>
        </>
    );
}

// export default Home;
export default memo(Home);
