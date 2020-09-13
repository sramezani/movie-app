/**
 * API Config
 *
 * */

export default {
    hostname: 'https://api.themoviedb.org/3',
    imageHost: 'https://image.tmdb.org/t/p/w500',

    endpoints: [
        {key: 'trending', url: '/trending/{id}/day', method: 'GET'},
        {key: 'movie', url: '/movie/{id}', method: 'GET'},
        {key: 'tv', url: '/tv/{id}', method: 'GET'},
        {key: 'search', url: '/search/movie', method: 'GET'},
    ],
};
