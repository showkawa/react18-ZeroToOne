//使用RTK构建store
const { createSlice, configureStore } = require("@reduxjs/toolkit");

const memberSlice = createSlice({
    name: 'member',// 会自动生成action中的type
    initialState: { // init的state
        id: 1,
        username: 'kawa',
        email: '123123@qq.com',
        confirmed: true
    },
    reducers: {//指定state的各种操作
        setUsername(state, action) { // state是一个代理对象，可以直接修改
            state.username = 'cassiel'
        },
        setEmail(state, action) {
            state.email = '1361231323@qq.com'
        }
    }
})

export const { setUsername, setEmail } = memberSlice.actions;


const store =  configureStore({
    reducer: {
        member: memberSlice.reducer
    }
})

export default store;