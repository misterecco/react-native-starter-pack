import {composeWithDevTools} from 'remote-redux-devtools';
import createSagaMiddleWare from 'redux-saga';
import rootSaga from '../sagas/index';
import rootReducer from '../reducers/index'

import {
    applyMiddleware,
    createStore,
} from 'redux'

const sagaMiddleware = createSagaMiddleWare();

const composeEnhancers = composeWithDevTools({
    name: 'Starter pack',
    realtime: true,
    hostname: 'localhost',
    port: 13371,
    maxAge: 30,
    filters: {
        blacklist: ['EFFECT_RESOLVED'],
    },
});

const enhancers = composeEnhancers(
    applyMiddleware(sagaMiddleware),
);

const store = createStore(
    rootReducer,
    {},
    enhancers
);

sagaMiddleware.run(rootSaga);

export default store;