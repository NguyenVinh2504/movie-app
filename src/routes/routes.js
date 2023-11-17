import Home from '~/Page/Home/HomePage';
import AboutUs from '~/Page/AboutUS/AboutUsPage';
import MediaList from '~/Page/MediaList/MediaListPage';
import MediaSearch from '~/Page/MediaSearch/SearchPage';
import config from '~/config';
import InfoPage from '~/Page/Profile/Info/InfoPage';
import FavoriteTvList from '~/Page/Profile/FavoriteTvList/FavoriteTvListPage';
import FavoriteMovieList from '~/Page/Profile/FavoriteMovieList/FavoriteMovieListPage';
import Profile from '~/Page/Profile/ProfliePage';
import Settings from '~/Page/Setting/SettingPage';
import EditAccount from '~/Page/Profile/EditAccount/EditAccountPage';
import DeleteAccount from '~/Page/Setting/DeleteAccount/DeleteAccountPage';
import ErrorPage from '~/Page/ErrorPage/ErrorPage';
import AuthPage from '~/Page/AuthPage/AuthPage';
export const routesMainLayout = [
    {
        index: true,
        element: <Home />,
        state: 'home',
    },
    {
        path: config.routes.aboutUs,
        element: <AboutUs />,
    },
    {
        path: config.routes.mediaList,
        element: <MediaList />,
    },
    {
        path: config.routes.search,
        element: <MediaSearch />,
    },
    {
        path: config.routes.login,
        element: <AuthPage />,
    },
    {
        path: config.routes.signup,
        element: <AuthPage />,
    },
    // {
    //     path: config.routes.signup,
    //     element: <AuthPage />,
    // },
    // {
    //     path: config.routes.account,
    //     element: <AuthPage />,
    //     child: [
    //         {
    //             path: config.routes.login,
    //             index: true,
    //             element: <SingIn />,
    //         },
    //         {
    //             path: config.routes.signup,
    //             element: <SingUp />,
    //         },
    //     ],
    // },
    {
        path: config.routes.profile,
        element: <Profile />,
        child: [
            {
                index: true,
                element: <InfoPage />,
            },
            {
                path: config.routes.editProfile,
                element: <EditAccount />,
            },
            {
                path: config.routes.favorite,
                element: <FavoriteMovieList />,
            },
            {
                path: config.routes.favoriteTvList,
                element: <FavoriteTvList />,
            },
        ],
    },
    // {
    //     path: config.routes.settingProfile,
    //     element: <Settings />,
    //     child: [
    //         {
    //             index: true,
    //             element: <EditAccount />,
    //         },
    //         {
    //             path: config.routes.deleteAccount,
    //             element: <DeleteAccount />,
    //         },
    //     ],
    // },
    {
        path: config.routes.error,
        element: <ErrorPage />,
    },
];
