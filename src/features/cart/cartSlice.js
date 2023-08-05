import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';
import { openModal } from "../modal/modalSlice";

const url = 'https://course-api.com/react-useReducer-cart-project';

const initialState = {
    cartItems: [],
    amount: 2,
    total: 0,
    isLoading: true
}

export const getCartItems = createAsyncThunk('cart/getCartItems', async (name, thunkAPI) => {
    try {

        // thunkAPI.dispatch(openModal());
        const resp = await axios(url);
        return resp.data;

    } catch (error) {
        return thunkAPI.rejectWithValue('something went wrong');

    }

})

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        clearCart: (state) => {
            state.cartItems = []
        },
        removeItem: (state, actions) => {
            const item = actions.payload;
            state.cartItems = state.cartItems.filter((items) => items.id !== item);

        },
        increase: (state, actions) => {
            const itemId = actions.payload;
            const cartItem = state.cartItems.find((item) => item.id === itemId
            );
            cartItem.amount = cartItem.amount + 1;

        },
        decrease: (state, actions) => {
            const itemId = actions.payload;
            const cartItem = state.cartItems.find((item) => item.id === itemId
            );

            cartItem.amount = cartItem.amount - 1;


        },
        caclulateTotals: (state) => {
            let amount = 0;
            let total = 0;
            state.cartItems.forEach((item) => {
                amount += item.amount;
                total += item.price * item.amount;

            });
            state.amount = amount;
            state.total = total;
        }
    },
    extraReducers: (builder) => {
        builder.addCase(getCartItems.pending, (state) => {
            state.isLoading = true;
        }).addCase(getCartItems.fulfilled, (state, action) => {

            state.isLoading = false;
            state.cartItems = action.payload
        }).addCase(getCartItems.rejected, (state, action) => {
            console.log(action);
            state.isLoading = false;
        })

    }

});


export const { clearCart, removeItem, increase, decrease, caclulateTotals } = cartSlice.actions;
export default cartSlice.reducer;