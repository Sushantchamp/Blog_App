import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    status: false,
    userData: null,
    loading: false,
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers:{
        login: (state,action)=>{ // these are the actions
            state.status = true;
            state.userData = action.payload.userData;
        },
        logout: (state,action)=>{ // these are the actions
            state.status = false;
            state.userData = null;
        }
    }

    // reducers: {
    //     loginStart: (state) => {
    //         state.loading = true;
    //     },
    //     loginSuccess: (state, action) => {
    //         state.status = true;
    //         state.userData = action.payload.userData;
    //         state.loading = false;
    //     },
    //     loginFail: (state) => {
    //         state.loading = false;
    //     },
    //     logoutStart: (state) => {
    //         state.loading = true;
    //     },
    //     logoutSuccess: (state) => {
    //         state.status = false;
    //         state.userData = null;
    //         state.loading = false;
    //     },
    //     logoutFail: (state) => {
    //         state.loading = false;
    //     },
    // },

})

export const { login, logout } = authSlice.actions;
// export const {
//   loginStart,
//   loginSuccess,
//   loginFail,
//   logoutStart,
//   logoutSuccess,
//   logoutFail,
// } = authSlice.actions;

export default authSlice.reducer;

