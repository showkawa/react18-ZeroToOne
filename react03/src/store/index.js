import hanbaoApi from "./HanbaoApi";
import { hanbaoReducer } from "./HanbaoSlice";
import { memberReducer } from "./MemberSlice";

//使用RTK构建store
const { configureStore, getDefaultMiddleware } = require("@reduxjs/toolkit");


const store =  configureStore({
    reducer: {
        [hanbaoApi.reducerPath]:hanbaoApi.reducer
    },
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(hanbaoApi.middleware)

})

export default store;