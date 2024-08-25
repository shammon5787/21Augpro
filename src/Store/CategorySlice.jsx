import { createSlice } from "@reduxjs/toolkit";

const CategorySlice = createSlice({
    name: 'category',
    initialState:{
        category: "All"
    },
    reducers:{
        AddCategory:(state, action)=>{
            state.category = action.payload
        }
    }
})
export const {AddCategory} = CategorySlice.actions
export default CategorySlice.reducer