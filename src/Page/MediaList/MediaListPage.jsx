import HeroSlice from '~/components/HeroSlice';
import { Button, Container, Stack } from '@mui/material';
import { useCallback, useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import TabItems from '~/components/TabItems';
import Media from '~/components/Media';
import mediaApi from '~/api/module/media.api';
import { useParams } from 'react-router-dom';
import { MovieTabItems } from '~/config/MovieTabMenuItems/MovieTabMenuItems';
import { TvTabItems } from '~/config/TvShowTabMenuItems/TvShowTabMenuItems';
function MediaListPage() {
    // const [tabsCategoriesValue, setTabsCategoriesValue] = useState(homeTabItems[0].name);
    const [medias, setMedias] = useState([]);
    const [currPage, setCurrPage] = useState(1);
    const [currCategory, setCurrCategory] = useState(0);
    const [isLoading, setIsLoading] = useState(true);
    const { mediaType } = useParams();
    useEffect(() => {
        // window.scrollTo(0, 0);
        setCurrPage(1);
        setMedias([]);
    }, [mediaType]);
    useEffect(() => {
        const getMedias = async () => {
            if (MovieTabItems[currCategory].key === 'getList' || TvTabItems[currCategory].key === 'getList') {
                return await mediaApi.getList({
                    mediaType: mediaType,
                    mediaCategory:
                        mediaType === 'movie'
                            ? MovieTabItems[currCategory].mediaCategory
                            : TvTabItems[currCategory].mediaCategory,
                    page: currPage,
                });
            } else {
                return await mediaApi.getDiscoverGenres({
                    mediaType: mediaType,
                    withoutGenres: mediaType === 'movie' ? MovieTabItems[currCategory].id : TvTabItems[currCategory].id,
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
                // if (response.results.length === 0) setIsLoading(true);
                if (currPage !== 1) {
                    setMedias((m) => [...m, ...response.results]);
                } else {
                    setMedias([...response.results]);
                }
            }
        };
        fetchData();
    }, [currCategory, currPage, mediaType]);
    // useEffect(() => {
    //     isLoading && window.scrollTo(0, document.body.scrollHeight);
    // }, [isLoading]);
    const handleCurrCategory = useCallback(
        (event, newValue) => {
            if (currCategory === newValue) return;
            setMedias([]);
            setCurrPage(1);
            setCurrCategory(newValue);
        },
        [currCategory],
    );
    const handleLoadingMore = () => {
        // setIsLoading(true);
        setCurrPage(currPage + 1);
    };
    // useEffect(() => {
    //     if (medias.length !== 0 && isLoading === false) {
    //         const handleScroll = () => {
    //             if (window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 800) {
    //                 setIsLoading(true);
    //                 setCurrPage(currPage + 1);
    //             }
    //         };
    //         window.addEventListener('scroll', handleScroll);
    //         return () => window.removeEventListener('scroll', handleScroll);
    //     }
    // }, [currPage, isLoading, medias]);
    return (
        <>
            <HeroSlice />
            <Container maxWidth={'xl'} sx={{ px: '0' }}>
                <TabItems
                    contentItems={mediaType === 'movie' ? MovieTabItems : TvTabItems}
                    onCurrCategory={handleCurrCategory}
                />
                <Media medias={medias} isLoading={isLoading} mediaType={mediaType} />
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

export default MediaListPage;
