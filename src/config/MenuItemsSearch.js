import { MovieIcon, TvShowIcon } from '~/components/Icon';
import config from '.';

const menuItemsSearch = [
    {
        title: 'Movie',
        icon: <MovieIcon />,
        path: config.routes.searchMovie
    },
    {
        title: 'Tv Shows',
        icon: <TvShowIcon />,
        path: config.routes.searchTv
    },
];

export default menuItemsSearch;
