import {
    all,
    call,
} from 'redux-saga/effects';

function *hello() {
    yield call(console.log, "Hello");
}

export default function *rootSaga() {
    yield all([
        call(hello),
    ]);
}