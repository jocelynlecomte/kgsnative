import React, { useState, useEffect } from 'react';
import { createStore, applyMiddleware } from 'redux';
import { combineEpics, createEpicMiddleware } from 'redux-observable';
import { Provider } from 'react-redux';
import { AppLoading } from 'expo';
import * as Font from 'expo-font';
import { Ionicons } from '@expo/vector-icons';

import { rootReducer } from './store';
import { loginEpic } from './store/system/epics';
import Main from './containers/main/Main';

const rootEpic = combineEpics(loginEpic);
const epicMiddleware = createEpicMiddleware();

const store = createStore(rootReducer, applyMiddleware(epicMiddleware));

epicMiddleware.run(rootEpic);

const App: React.ReactNode = () => {
    const [ready, setReady] = useState(false);

    async function prepareFont(): Promise<void> {
        await Font.loadAsync({
            Roboto: require('native-base/Fonts/Roboto.ttf'),
            Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'), // eslint-disable-line @typescript-eslint/camelcase
            ...Ionicons.font,
        });
        setReady(true);
    }

    useEffect(() => {
        prepareFont();
    }, []);

    if (!ready) {
        return <AppLoading />;
    } else {
        return (
            <Provider store={store}>
                <Main />
            </Provider>
        );
    }
};

export default App;
