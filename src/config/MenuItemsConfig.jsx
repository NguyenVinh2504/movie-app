import {
    AboutIcon,
    AboutIconActive,
    ArchiveIcon,
    ArchiveIconActive,
    EditIcon,
    EditIconActive,
    HomeIcon,
    HomeIconActive,
    MovieIcon,
    MovieIconActive,
    TvShowIcon,
    TvShowIconActive,
    UserIcon,
    UserIconActive,
} from '~/components/Icon';
import config from '.';

export const menuItems = [
    {
        title: 'Trang chủ',
        path: config.routes.home,
        icon: <HomeIcon />,
        iconActive: <HomeIconActive />,
    },
    {
        title: 'Phim chiếu rạp',
        path: config.routes.movie,
        icon: <MovieIcon />,
        iconActive: <MovieIconActive />,
    },
    {
        title: 'Phim truyền hình',
        path: config.routes.tv,
        icon: <TvShowIcon />,
        iconActive: <TvShowIconActive />,
    },
    {
        title: 'Giới thiệu',
        path: config.routes.aboutUs,
        icon: <AboutIcon />,
        iconActive: <AboutIconActive />,
    },
];

export const userMenu = [
    {
        title: 'Trang cá nhân',
        path: config.routes.profile,
        icon: <UserIcon />,
        iconActive: <UserIconActive />,
    },
    {
        title: 'Yêu thích',
        path: config.routes.favorite,
        icon: <ArchiveIcon />,
        iconActive: <ArchiveIconActive />,
    },
    {
        title: 'Chỉnh sửa thông tin',
        path: config.routes.editProfile,
        icon: <EditIcon />,
        iconActive: <EditIconActive />,
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
