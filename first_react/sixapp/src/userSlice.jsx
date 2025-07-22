import { createSlice } from "@reduxjs/toolkit"

const userSlice = createSlice({
    name: "user",
    InitialState: {
        // "arr": [0],
        "card": []
    },
    reducers: {
        // v: (s) => {
        //     s.arr = s.arr + 1
        // },
        cart: (h, action) => {
            console.log(action.payload)
            h.card.push(action.payload)
        }

    }

})
export const {  cart } = userSlice.actions
export default userSlice.reducer