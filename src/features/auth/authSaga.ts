import { take, fork, put, call } from "redux-saga/effects";
import { PayloadAction } from "@reduxjs/toolkit";
import { login, LoginRequest } from "../../service/auth";
import { authActions } from "./authSlice";
import { coreActions } from "../core/coreSlice";
import User from "../../models/User";
import { TOKEN, USERNAME } from "../../utils/constant";

function* handleLogin(payload: LoginRequest): any {
    yield put(coreActions.show());
    const user: User = yield login(payload);
    addLocalStorage(user);
    yield call(updateAuthInfo, user);
    yield put(coreActions.hide());
}
function* handleLogout() {
    removeLocalStorage();
}

function* watchLoginFlow() {
    while (true) {
        const token = Boolean(localStorage.getItem(TOKEN));
        console.log(token)
        if (!token) {
            const action: PayloadAction<LoginRequest> = yield take(authActions.login.type);
            yield call(handleLogin, action.payload);
        } else {
            yield take(authActions.logout.type);
            yield call(handleLogout);
        }
    }
}

export default function* authSaga() {
    yield fork(watchLoginFlow);
}

function* updateAuthInfo(user: User) {
    yield put(authActions.loginSuccess(user));
}


function addLocalStorage(user: User) {
    localStorage.setItem(TOKEN, String(user.token));
    localStorage.setItem(USERNAME, String(user.username));
}

function removeLocalStorage() {
    localStorage.removeItem(TOKEN);
    localStorage.removeItem(USERNAME);
}