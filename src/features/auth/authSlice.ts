import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import User from "../../models/User";
import { LoginRequest } from "../../service/auth";
import { USERNAME, TOKEN } from "../../utils/constant";

interface authState {
    user?: User
}

const initialState: authState = {
    user: {
        username: localStorage.getItem(USERNAME),
        token: localStorage.getItem(TOKEN)
    }
}



const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        login(state, action: PayloadAction<LoginRequest>) {
            // state.statusLogin = 'loading';
        },
        loginSuccess(state, action: PayloadAction<User>) {
            // state.statusLogin = 'success';
            state.user = action.payload
        },
        loginFailed(state, action: PayloadAction<string>) {
            // state.statusLogin = 'error';
        },
        logout(state) {
            // state.statusLogin = 'loading';
            state.user = undefined;
        }
    }
});

export const authActions = authSlice.actions;

export const selectStatus = (state: any) => state.auth.statusLogin;
export const selectUser = (state: any) => state.auth.user;

const authReducer = authSlice.reducer;
export default authReducer;