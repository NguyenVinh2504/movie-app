const routes = {
    normal: '/',
    home: '/movie-app',
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
    settingProfile: '/movie-app/edit-profile',
    deleteAccount: '/movie-app/edit-profile/delete-account',
    //setting

    //auth
    // account: '/movie-app/account',
    signup: '/movie-app/signup',
    login: '/movie-app/login',
    error: '*',
};

export default routes;
