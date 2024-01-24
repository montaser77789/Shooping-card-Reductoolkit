import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { Iproduct } from '../../../Interface'
import { addItemsToShopppingCard } from '../../../components/Ultis/Function'

 interface CounterState {
    cartProduct: Iproduct[]
  }
  
  const initialState: CounterState = {
    cartProduct: [],
  }

  const cartSlice = createSlice({
    name:"cart",
    initialState,
    reducers:{
      addToCartAction:(state,actionpayload:PayloadAction<Iproduct>)=>{
        state.cartProduct =addItemsToShopppingCard(state.cartProduct ,actionpayload.payload)

      }
    }
  })
export const {addToCartAction} = cartSlice.actions


  export default cartSlice.reducer;
  