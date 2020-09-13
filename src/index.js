import React from 'react';
import {Provider} from 'react-redux';
import {NavigationContainer} from '@react-navigation/native';
import {appStore} from './redux/store';
import {PersistGate} from 'redux-persist/integration/react';
import {persistStore} from 'redux-persist';

// import Navigation from '@navigation';
import Navigation from '../src/navigation';

const persistor = persistStore(appStore);

function App() {
    return (
        <Provider store={appStore}>
            <PersistGate loading={null} persistor={persistor}>
                <NavigationContainer>
                    <Navigation />
                </NavigationContainer>
            </PersistGate>
        </Provider>
    );
}

export default App;
