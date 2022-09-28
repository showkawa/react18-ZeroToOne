import { setupListeners } from "@reduxjs/toolkit/dist/query";
import hanbaoApi from "./HanbaoApi";

//使用RTK构建store
const { configureStore, getDefaultMiddleware } = require("@reduxjs/toolkit");


const store =  configureStore({
    reducer: {
        [hanbaoApi.reducerPath]:hanbaoApi.reducer
    },
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(hanbaoApi.middleware)

})

setupListeners(store.dispatch) // 设置以后将会支持， refetchOnFocus, refetchOnReconnect

export default store;