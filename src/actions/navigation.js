import KeyMirror from 'keymirror';

export const Routes = KeyMirror({
    'HOME': null,
    'ABOUT': null,
});

export const NavigationActionTypes = {
    GO_BACK: "NAVIGATION_GO_BACK",
    PUSH_ROUTE: "NAVIGATION_PUSH_ROUTE",
    POP_ROUTE: "NAVIGATION_POP_ROUTE",
};

// HELPER FUNCTIONS

const pushRoute = (route) => ({
    type: NavigationActionTypes.PUSH_ROUTE,
    route,
});

const goToScene = (key) => () => {
    const route = {
        key,
    };
    return pushRoute(route);
};

// POP ACTION

export const popRoute = () => ({
    type: NavigationActionTypes.POP_ROUTE,
});

// GO-BACK ACTION

export const goBack = () => ({
    type: NavigationActionTypes.GO_BACK,
});

// GO-TO ACTIONS

export const goToAbout = goToScene(Routes.ABOUT);