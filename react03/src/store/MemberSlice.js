//使用RTK构建store
const { createSlice } = require("@reduxjs/toolkit");

const memberSlice = createSlice({
    name: 'member',// 会自动生成action中的type
    initialState: { // init的state
        isLogged: false,
        token: null,
        user: null
    },
    reducers: {//指定state的各种操作
        login(state, action) { // state是一个代理对象，可以直接修改
            state.isLogged = true;
            state.token = action.payload.token;
            state.user = action.payload.user;

        },
        logout(state, action) {
            state.isLogged = false;
            state.token = null;
            state.user = null;
        }
    }
})

export const { login, logout } = memberSlice.actions;
export default memberSlice;