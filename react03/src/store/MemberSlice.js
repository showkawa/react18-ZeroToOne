//使用RTK构建store
const { createSlice } = require("@reduxjs/toolkit");

const memberSlice = createSlice({
    name: 'member',// 会自动生成action中的type
    initialState: () => { // init的state
        const token = localStorage.getItem('token');
        if (token) {
            return {
                isLogged: true,
                token: token,
                user: JSON.parse(localStorage.getItem('user')),
                expirationTime: +localStorage.getItem('expireTime')
            }
        }

        return {
            isLogged: false,
            token: null,
            user: null,
            expirationTime: 0

        }

    },
    reducers: {//指定state的各种操作
        login(state, action) { // state是一个代理对象，可以直接修改
            state.isLogged = true;
            state.token = action.payload.token;
            state.user = action.payload.user;

            const expireTime = Date.now() + 5 * 1000;
            state.expirationTime = expireTime

            // 存储数据到localStorage
            localStorage.setItem('token', state.token);
            localStorage.setItem('user', JSON.stringify(state.user));
            localStorage.setItem('expireTime', state.expirationTime);


        },
        logout(state, action) {
            state.isLogged = false;
            state.token = null;
            state.user = null;
            state.expirationTime = 0;

            localStorage.removeItem('token');
            localStorage.removeItem('user');
            localStorage.removeItem('expireTime');

        }
    }
})

export const { login, logout } = memberSlice.actions;
export default memberSlice;