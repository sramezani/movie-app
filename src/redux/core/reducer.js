import {actionTypes} from './actionTypes';
import {REHYDRATE} from 'redux-persist/lib/constants';

const initialState = {
    favorite: [],
};

export default function core(state = initialState, action) {
    switch (action.type) {
        case actionTypes.ADD_FAVORITE:
            if (!action.payload) return state;
            return {
                ...state,
                favorite: [
                    ...state.favorite,
                    {
                        ...action.payload,
                    },
                ],
            };

        case actionTypes.REMOVE_FAVORITE:
            if (!action.payload) return state;
            console.log('action', action.payload);
            const filtered = state.favorite.filter(
                (el) => el.id != action.payload.id,
            );
            console.log('ss', filtered);
            return {
                ...state,
                favorite: [...filtered],
            };

        case actionTypes.EMPTY_FAVORITE:
            return {
                ...state,
                favorite: [],
            };

        case REHYDRATE:
            if (!action.payload) return state;
            if (!action.payload.core) return state;

            const incoming = action.payload.core;
            return {
                ...state,
                ...incoming,
            };

        default:
            return {...state};
    }
}
