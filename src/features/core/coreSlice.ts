import { createSlice } from "@reduxjs/toolkit";

interface coreState {
    loading: boolean
}

const initialState: coreState = {
    loading: false
}

const coreSlice = createSlice({
    name: 'core',
    initialState,
    reducers: {
        show(state) {
            state.loading = true;
        },
        hide(state) {
            state.loading = false;
        }
    }
});

export const coreActions = coreSlice.actions;

export const selectLoading = (state: any) => state.core.loading;

const coreReducer = coreSlice.reducer;
export default coreReducer;