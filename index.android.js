import App from './src/App';
import {AppRegistry} from 'react-native';
import {Provider} from 'react-redux';
import React from 'react';
import store from './src/store/store';

const Demo = (props) => (
    <Provider store={store}>
        <App {...props}/>
    </Provider>
);

AppRegistry.registerComponent('Demo', () => Demo);
