import config from '~/config';
import { createSearchParams, useNavigate } from 'react-router-dom';
import encodeObject from '~/utils/encodeObject';

function useGoWatchMovie() {
    const navigate = useNavigate();
    const handleOpen = ({
        id,
        mediaType,
        episodeNumber,
        seasonNumber,
        episodeId,
    }) => {
        const query = {
            mediaType,
            id,
            ...(mediaType === 'tv' && {
                episodeId,
                episodeNumber,
                seasonNumber,
            }),
        };

        const encodeQuery = encodeObject(query);

        navigate({
            pathname: config.routes.watchMovie,
            search: createSearchParams({ v: encodeQuery }).toString(),
        });
    };

    return { handleOpen };
}

export default useGoWatchMovie;
