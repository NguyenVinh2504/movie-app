const routes = {
    normal: '/',
    home: '/',
    aboutUs: '/about',
    movie: '/movie',
    topRateMovie: '/movie/top-rate',
    tv: '/tv',
    mediaList: '/:mediaType',
    search: '/search',
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

    watchMovieId: '/watch/movie/:movieId',
    watchMovie: '/watch/movie',

    watchTvId: '/watch/tv/:showId/:ssId/:epId',
    watchTv: '/watch/tv',

    error: '*',
};

export default routes;
