import {StateUtils} from 'react-navigation';

import {
    NavigationActionTypes,
    Routes,
} from '../actions/navigation';

const defaultState = {
    index: 0,
    routes: [
        {
            key: Routes.HOME,
        },
    ],
};

function popRoute(state) {
    if (state.index === 0 || state.routes.length === 1) {
        return state;
    }
    return StateUtils.pop(state);
}

function pushRoute(state, action) {
    if (action.route && StateUtils.indexOf(state, action.route.key) > -1) {
        return state;
    }
    return StateUtils.push(state, action.route);
}

function navigate(state = defaultState, action) {
    switch (action.type) {
        case NavigationActionTypes.PUSH_ROUTE:
            return pushRoute(state, action);
        case NavigationActionTypes.POP_ROUTE:
            return popRoute(state);
        default:
            return state;
    }
}

export default navigate;
