// slice is made up of three steps

/**
 *create a slice
 *create initial state
 *create reducers
 * *export the slice reducers
 *export the slice reducers
*/
const { createSlice } = require("@reduxjs/toolkit");

const initialState = []
const cartSlice = createSlice(
{
name: "cart",
initialState,
reducers:{
    addToCart:(state,action)=>{
        const {id,title,image,price} = action.payload
        state.push({id, title,image,price,qty:1})
        console.log(action);
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
