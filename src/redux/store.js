import {createStore, applyMiddleware, compose} from 'redux';
import rootReducer, {SaveSubsetFilter} from './rootReducer';
import thunk from 'redux-thunk';
import {persistReducer} from 'redux-persist';
import AsyncStorage from '@react-native-community/async-storage';

let composer;
if (__DEV__) {
    const composeEnhancers =  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
    composer = composeEnhancers;
} else {
    composer = compose;
    console.log = () => {};
    console.warn = () => {};
    console.error = () => {};
}

// Persist Config
const config = {
    key: 'root',
    whitelist: ['core'],
    storage: AsyncStorage,
    debug: false,
    transforms: SaveSubsetFilter,
};

// Init redux store (using the given reducer & middleware)
const enhancer = composer(applyMiddleware(thunk));

const reducer = persistReducer(config, rootReducer);
const appStore = createStore(reducer, enhancer);

if (module.hot) {
    module.hot.accept(() => {
        const nextRootReducer = require('./rootReducer').default;
        const nextReducer = persistReducer(config, nextRootReducer);
        appStore.replaceReducer(nextReducer);
    });
}

export {appStore};
