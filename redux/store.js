// store is composed of the entire application state

const { configureStore } = require("@reduxjs/toolkit");
import cartSlice from "./slices/cartSlice";

// store => multiple slices
// 1) create a store

const store = configureStore({
// slices goes here
// then reducer

reducer:{
    cart: cartSlice

}


})

export default store