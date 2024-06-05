import { homeTabItems } from '~/config/HomeTabMenuItems/HomeTabMenuItems';
import { MovieTabItems } from '~/config/MovieTabMenuItems/MovieTabMenuItems';
import { TvTabItems } from '~/config/TvShowTabMenuItems/TvShowTabMenuItems';

const routes = {
    homeList: '/home/:mediaType/:category',
    home: homeTabItems[0].path,
    aboutUs: '/about',
    mediaList: '/:mediaType/:key/:category',
    movie: MovieTabItems[0].path,
    tv: TvTabItems[0].path,
    homeCategory: {
        trending: "/home/all/day",
        nowPlaying: "/home/movie/now_playing",
        airingToday: "/home/tv/airing_today",
        popularMovie: "/home/movie/popular",
        popularTv: "/home/tv/popular",
    },

    searchPage: '/search',
    searchMovie: '/search/movie',
    searchTv: '/search/tv',
    //profile
    profile: '/profile',
    favorite: '/profile/favorite',
    favoriteTvList: '/profile/favorite/tv',
    editProfile: '/profile/edit-profile',
    settingProfile: '/profile/setting-profile',
    //profile

    //setting
    deleteAccount: '/edit-profile/delete-account',
    //setting

    //auth
    // account: '/movie-app/account',
    signup: '/signup',
    login: '/login',

    forgotPassword: '/forgot-password',

    watchMovieId: '/watch/movie/:slugifyMovieName',
    watchMovie: '/watch/movie',

    watchTvId: '/watch/tv/:slugifyMovieName/:epNumber',
    watchTv: '/watch/tv',

    error: '*',
};

export default routes;
