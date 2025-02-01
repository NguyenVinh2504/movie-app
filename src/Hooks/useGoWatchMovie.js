import config from '~/config';
import { isUndefined, omitBy } from 'lodash';
import { createSearchParams, useNavigate } from 'react-router-dom';

function useGoWatchMovie() {
    const navigate = useNavigate();
    const handleOpen = ({
        id,
        mediaType,
        episodeNumber,
        seasonNumber,
        episodeId,
    }) => {
        navigate({
            pathname: config.routes.watchMovie,
            search: createSearchParams(
                omitBy(
                    {
                        media_type: mediaType,
                        id,
                        episode_id: episodeId,
                        episode_number: episodeNumber,
                        season_number: seasonNumber,
                    },
                    isUndefined,
                ),
            ).toString(),
        });
    };

    return { handleOpen };
}

export default useGoWatchMovie;
