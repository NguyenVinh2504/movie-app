const routes = {
    normal: '/',
    home: '/movie-app/',
    aboutUs: '/movie-app/about',
    movie: '/movie-app/movie',
    topRateMovie: '/movie-app/movie/top-rate',
    tv: '/movie-app/tv',
    mediaList: '/movie-app/:mediaType',
    search: '/movie-app/search',
    //profile
    profile: '/movie-app/profile',
    favorite: '/movie-app/profile/favorite',
    favoriteTvList: '/movie-app/profile/favorite/tv',
    //profile

    //setting
    settingProfile: '/movie-app/settings/profile',
    deleteAccount: '/movie-app/settings/delete-account',
    //setting

    error: '*',
};

export default routes;
