/**
 * Combine All Reducers
 *
 * */

import {combineReducers} from 'redux';
import {createFilter} from 'redux-persist-transform-filter';
import core from './core/reducer';

// Combine all
const appReducer = combineReducers({
    core,
});

// Setup root reducer
const RootReducer = (state, action) => {
    const newState = action.type === 'RESET' ? undefined : state;
    return appReducer(newState, action);
};

// store only a subset of state of reducers
export const SaveSubsetFilter = [createFilter('core', ['favorite'])];

export default RootReducer;
