export function isInHomeScene(state) {
    if (!state.navigation) {
        return false;
    }
    const index = state.navigation.index;
    return index === 0;
}