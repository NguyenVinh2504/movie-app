const routes = {
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
    //profile

    //setting
    settingProfile: '/settings/profile',
    deleteAccount: '/settings/delete-account',
    //setting

    error: '*',
};

export default routes;
