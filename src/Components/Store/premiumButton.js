

import { createSlice } from "@reduxjs/toolkit";

const initialPremiumState={isPremium:false}
const premium = createSlice({
    name:'premium',
    initialState:initialPremiumState,
    reducers:{
        premium(state){
            state.isPremium = !state.isPremium
        }

    }
})

export const premiumActions=premium.actions;
export default premium.reducer;