import Home from '~/Page/Home/HomePage';
import AboutUs from '~/Page/AboutUS/AboutUsPage';
import SearchPage from '~/Page/SearchPage/SearchPage';
import config from '~/config';
import InfoPage from '~/Page/Profile/Info/InfoPage';
import FavoriteMovieList from '~/Page/Profile/FavoriteMovieList/FavoriteMovieListPage';
import Profile from '~/Page/Profile/ProfliePage';
import EditAccount from '~/Page/Profile/EditAccount/EditAccountPage';
import ErrorPage from '~/Page/ErrorPage/ErrorPage';
import AuthPage from '~/Page/AuthPage/AuthPage';
import SettingProfile from '~/Page/Profile/SettingProfile/SettingProfile';
import MediaListPage from '~/Page/MediaListPage/MediaListPage';
import ForgotPassword from '~/Page/ForgotPassword/ForgotPassword';
import WatchMovie from '~/Page/WatchMovie/WatchMovie';
import { MainLayout } from '~/Layout';
import { Navigate } from 'react-router-dom';
import MediaDetail from '~/components/MediaDetail';
export const routesMainLayout = [
    {
        element: <MainLayout />,
        children: [
            {
                path: '/',
                element: <Navigate to={config.routes.home} replace/>,
            },
            {
                path: config.routes.homeList,
                element: <Home />,
                children: [ 
                    {
                        path: 'modal/:mediaTypeDetail/:id',
                        element: <MediaDetail/>,
                    },
                ]
            },
            {
                path: config.routes.aboutUs,
                element: <AboutUs />,
            },
            {
                path: config.routes.mediaList,
                element: <MediaListPage />,
                children: [ 
                    {
                        path: 'modal/:mediaTypeDetail/:id',
                        element: <MediaDetail/>,
                    },
                ]
            },
            {
                path: config.routes.searchPage,
                element: <SearchPage />,
                children: [ 
                    {
                        path: 'modal/:mediaTypeDetail/:id',
                        element: <MediaDetail/>,
                    },
                ]
            },
            {
                path: config.routes.login,
                element: <AuthPage />,
            },
            {
                path: config.routes.signup,
                element: <AuthPage />,
            },
            {
                path: config.routes.forgotPassword,
                element: <ForgotPassword />,
            },
            {
                path: config.routes.profile,
                element: <Profile />,
                children: [
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
                        children: [ 
                            {
                                path: 'modal/:mediaTypeDetail/:id',
                                element: <MediaDetail/>,
                            },
                        ]
                    },
                    {
                        path: config.routes.settingProfile,
                        element: <SettingProfile />,
                    },
                ],
            },
            {
                path: config.routes.watchMovieId,
                element: <WatchMovie />,
            },
            {
                path: config.routes.watchTvId,
                element: <WatchMovie />,
            },
            {
                path: config.routes.error,
                element: <ErrorPage />,
            },
        ],
    },
];
