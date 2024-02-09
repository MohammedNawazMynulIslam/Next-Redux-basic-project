// slice is made up of three steps

/**
 *create a slice
 *create initial state
 *create reducers
 * *export the slice reducers
 *export the slice reducers
*/
const { createSlice } = require("@reduxjs/toolkit");

const initialState = [
    {
        id:1,
        title:"Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
        price:109.95,
        image:"https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
        qty:1
    },
        {
            id:2,
            title:"Mens Casual Premium Slim Fit T-Shirts ",
            price:22.3,
            image:"https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
            qty:2,
        }
]
const cartSlice = createSlice(
{
name: "cart",
initialState,
reducers:{
    addToCart:(state,action)=>{

    },
    removeFromCart:(state,action)=>{

    },
    incrementQty:(state,action)=>{

    },
    decrementQty:(state,action)=>{

    }
}
});
export const{addToCart,removeFromCart,incrementQty,decrementQty}=cartSlice.actions;
// Reducers are functions that return a new piece of state based on the action passed to them
export default cartSlice.reducer;
