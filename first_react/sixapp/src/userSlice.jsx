import { createSlice } from "@reduxjs/toolkit"

const userSlice = createSlice({
    name: "user",
    initialState: {
        // "arr": [0],
        "card": [],
        "count":0,
    },
    reducers: {
        // v: (s) => {
        //     s.arr = s.arr + 1
        // },
        cart: (h, action) => {
            console.log(action.payload)
            h.card[0] = action.payload
            h.count = h.card.length
        }

    }

})
export const {  cart } = userSlice.actions
export default userSlice.reducer