import navigation from './navigation';

function rootReducer(state = {}, action) {
    return {
        navigation: navigation(state.navigation, action),
    };
}

export default rootReducer;
