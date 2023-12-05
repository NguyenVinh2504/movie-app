import mediaApi from '~/api/module/media.api';
import Media from '../Media';
import TabItems from '../TabItems';
import { useCallback, useEffect, useMemo, useState } from 'react';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';

function MediaList({ tabsCategories }) {
    const [tabsCategoriesValue, setTabsCategoriesValue] = useState('Thịnh Hành');
    const [medias, setMedias] = useState([]);
    const [currPage, setCurrPage] = useState(1);
    const [currCategory, setCurrCategory] = useState(0);

    const { mediaType } = useParams();
    const mediaCategories = useMemo(() => {
        return [
            {
                name: 'Thịnh Hành',
            },
            {
                mediaType: 'movie',
                mediaCategory: 'now_playing',
            },
            {
                mediaType: 'tv',
                mediaCategory: 'airing_today',
            },
            {
                mediaType: 'movie',
                mediaCategory: 'upcoming',
            },
            {
                mediaType: 'tv',
                mediaCategory: 'popular',
            },
        ];
    }, []);
    useEffect(() => {
        const getMedias = async () => {
            if (tabsCategoriesValue === 'Thịnh Hành') {
                const { response, err } = await mediaApi.getListTrending({
                    mediaType: 'all',
                    timeWindow: 'day',
                    page: currPage,
                });
                if (err) toast.error(err.message);
                if (response) {
                    if (currPage !== 1) setMedias((m) => [...m, ...response.results]);
                    else setMedias([...response.results]);
                }
            } else {
                const { response, err } = await mediaApi.getList({
                    mediaType: mediaCategories[currCategory].mediaType,
                    mediaCategory: mediaCategories[currCategory].mediaCategory,
                    page: currPage,
                });
                if (err) toast.error(err.message);
                if (response) {
                    if (currPage !== 1) setMedias((m) => [...m, ...response.results]);
                    else setMedias([...response.results]);
                }
            }
        };

        getMedias();
    }, [currCategory, currPage, mediaCategories, tabsCategoriesValue]);
    const handleCurrCategory = (event, newValue) => {
        if (currCategory === newValue) return;
        setMedias([]);
        setCurrPage(1);
        setCurrCategory(newValue);
        setTabsCategoriesValue(event.target.innerText);
    };
    return (
        <>
            <TabItems contentItems={tabsCategories} onCurrCategory={handleCurrCategory} />
            <Media medias={medias} />
        </>
    );
}

export default MediaList;
