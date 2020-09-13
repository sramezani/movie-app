import {actionTypes} from './actionTypes';
import {AppAPI} from '../../lib';

export const addFavoriteData = (data) => {
    return {
        type: actionTypes.ADD_FAVORITE,
        payload: data,
    };
};

export const removeFavoriteData = (data) => {
    return {
        type: actionTypes.REMOVE_FAVORITE,
        payload: data,
    };
};

export const getTrendListAction = (data) => {
    return (dispatch, getState) =>
        new Promise(async (resolve, reject) => {
            AppAPI.trending(data)
                .then((res) => {
                    return resolve(res);
                })
                .catch((err) => {
                    return reject(err);
                });
        });
};

export const getMovieListAction = (data) => {
    return (dispatch, getState) =>
        new Promise(async (resolve, reject) => {
            AppAPI.movie(data)
                .then((res) => {
                    return resolve(res);
                })
                .catch((err) => {
                    return reject(err);
                });
        });
};

export const getTvListAction = (data) => {
    return (dispatch, getState) =>
        new Promise(async (resolve, reject) => {
            AppAPI.tv(data)
                .then((res) => {
                    return resolve(res);
                })
                .catch((err) => {
                    return reject(err);
                });
        });
};

export const getSearchAction = (data) => {
    return (dispatch, getState) =>
        new Promise(async (resolve, reject) => {
            AppAPI.search(data)
                .then((res) => {
                    return resolve(res);
                })
                .catch((err) => {
                    return reject(err);
                });
        });
};
