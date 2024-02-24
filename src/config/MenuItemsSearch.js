import { MovieIcon, TvShowIcon } from '~/components/Icon';
import config from '.';

const menuItemsSearch = [
    {
        title: 'Movie',
        icon: <MovieIcon />,
        type: 'movie',
        path: config.routes.searchMovie
    },
    {
        title: 'Tv Shows',
        icon: <TvShowIcon />,
        type: 'tv',
        path: config.routes.searchTv
    },
];

export default menuItemsSearch;
