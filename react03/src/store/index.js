import { setupListeners } from "@reduxjs/toolkit/dist/query";
import hanbaoApi from "./HanbaoApi";
import memberApi from "./MemberApi";
import memberSlice from "./MemberSlice";

//使用RTK构建store
const { configureStore } = require("@reduxjs/toolkit");


const store = configureStore({
    reducer: {
        [hanbaoApi.reducerPath]: hanbaoApi.reducer,
        [memberApi.reducerPath]: memberApi.reducer,
        [memberSlice.name]: memberSlice.reducer
    },
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(hanbaoApi.middleware, memberApi.middleware)

})

setupListeners(store.dispatch) // 设置以后将会支持， refetchOnFocus, refetchOnReconnect

export default store;