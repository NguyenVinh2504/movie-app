import { AboutIcon, EditIcon, HeartIcon, HomeIcon, MovieIcon, TvShowIcon, UserIcon } from '~/components/Icon';
import config from '.';

export const menuItems = [
    {
        title: 'Home',
        path: config.routes.home,
        icon: <HomeIcon />,
    },
    {
        title: 'Movie',
        path: config.routes.movie,
        icon: <MovieIcon />,
    },
    {
        title: 'Tv Shows',
        path: config.routes.tv,
        icon: <TvShowIcon />,
    },
    {
        title: 'About Us',
        path: config.routes.aboutUs,
        icon: <AboutIcon />,
    },
];

export const userMenu = [
    {
        title: 'Trang cá nhân',
        path: config.routes.profile,
        icon: <UserIcon />,
    },
    {
        title: 'Yêu thích',
        path: config.routes.favorite,
        icon: <HeartIcon />,
    },
    {
        title: 'Chỉnh sửa thông tin',
        path: config.routes.settingProfile,
        icon: <EditIcon />,
    },
];

// export const movieItem = [
//     {
//         title: 'Popular',
//         path: config.routes.movie,
//     },
//     {
//         title: 'Top Rate',
//         path: config.routes.topRateMovie,
//     },
// ];
