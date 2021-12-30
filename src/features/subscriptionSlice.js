import { createSlice } from "@reduxjs/toolkit";

export const subscriptionSlice = createSlice({
    name: 'subscription',
    initialState: {
        value: false,
    },
    reducers: {
        subscribe: (state) => {
            state.value= true
        },
        unsubscribe: (state) => {
            state.value= false
        }
    }
});

export const { subscribe, unsubscribe } = subscriptionSlice.actions;

export const selectValue = state => state.subscription.value;

export default subscriptionSlice.reducer;