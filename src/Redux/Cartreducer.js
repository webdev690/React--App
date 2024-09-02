import { createSlice } from "@reduxjs/toolkit";

const initialState={
    items:localStorage.getItem('Carts')?JSON.parse(localStorage.getItem('Carts')):[],
}
export const CartSlice=createSlice({
    name:'cart',
    initialState,
    reducers:{
        addtocart:(state,action)=>{
            const {productId,quantity}=action.payload;
            const isproduct=state.items.findIndex(elem=>elem.productId===productId)
            if(isproduct>=0){ state.items[isproduct].quantity+=quantity}
        else{state.items.push({productId,quantity})}
        localStorage.setItem('Carts',JSON.stringify(state.items))
        },
        addquantity:(state,action)=>{
            const{productId,quantity}=action.payload
            const itemindex=(state.items).findIndex(index=>index.productId === productId)
            if(quantity>0){
                state.items[itemindex].quantity=quantity
            }
            else{
                    state.items=(state.items).filter(item=>item.productId!==productId)
            }
            localStorage.setItem('Carts',JSON.stringify(state.items))
        }
}
})
export  const {addtocart,addquantity} = CartSlice.actions
export default CartSlice.reducer