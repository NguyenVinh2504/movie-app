import Home from '~/Page/Home';
import AboutUs from '~/Page/AboutUS';
import MediaList from '~/Page/MediaList';
import MediaSearch from '~/Page/MediaSearch';
import config from '~/config';
import InfoPage from '~/Page/Profile/Info';
import FavoriteTvList from '~/Page/Profile/FavoriteTvList';
import FavoriteMovieList from '~/Page/Profile/FavoriteMovieList';
import Profile from '~/Page/Profile/Proflie';
import Settings from '~/Page/Setting/Setting';
import EditAccount from '~/Page/Setting/EditAccount';
import DeleteAccount from '~/Page/Setting/DeleteAccount';
import ErrorPage from '~/Page/ErrorPage/ErrorPage';
import LoginPage from '~/Page/Login';
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
        path: config.routes.account,
        element: <LoginPage />,
    },
    {
        path: config.routes.profile,
        element: <Profile />,
        child: [
            {
                index: true,
                element: <InfoPage />,
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
    {
        path: config.routes.settingProfile,
        element: <Settings />,
        child: [
            {
                index: true,
                element: <EditAccount />,
            },
            {
                path: config.routes.deleteAccount,
                element: <DeleteAccount />,
            },
        ],
    },
    {
        path: config.routes.error,
        element: <ErrorPage />,
    },
];
