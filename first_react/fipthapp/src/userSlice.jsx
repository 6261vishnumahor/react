import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name:'user',
    initialState:{
        'val':0,
        'store':[],
        'card':[]

    },
    reducers:{
        run:(s)=>{
            s.val = s.val+1
        },
        r:()=>{

        },
        cart:(b,action)=>{
console.log(action.payload)
b.card.push(action.payload)
        }

    }
}) 

export const {run,cart} = userSlice.actions

export default userSlice.reducer