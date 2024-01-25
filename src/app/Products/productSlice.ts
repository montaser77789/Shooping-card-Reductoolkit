import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axiosInstance from '../../config/axios.config'

interface IProduct {
    productList: [],
    loading:boolean,
    error:null
    
  }
  const initialState:IProduct = {
    productList: [],
    loading:false,
    error:null
  }


 export const getProducts = createAsyncThunk ("products/getProducts", async(_,thunkAPI)=>{
const {rejectWithValue}=thunkAPI

    try {
        const {data} = await axiosInstance.get("/products?limit=10&select=title,price,thumbnail")
        console.log(data);
        
    } catch (error) {
        console.log(error);
      return  rejectWithValue(error)
    }

  })
  const productSlice = createSlice({
    name : "products",
    initialState,
    reducers:{},
    extraReducers:{
      [`${getProducts.pending}`]:(state)=>{
        state.loading = true
      },
      [`${getProducts.fulfilled}`]:(state,action)=>{
        state.loading = false
        state.productList = action.payload
      },[`${getProducts.rejected}`]:(state,action)=>{
        state.loading = false;
        state.productList = []
        state.error = action.payload
      }
    }
  })
  export default productSlice.reducer;
