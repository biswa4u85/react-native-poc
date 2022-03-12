import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { apiGetCall } from '../utility/site-apis'

const initialState = {
    isFetching: false,
    error: null,
    orders: [],
}

export const getOrders = createAsyncThunk(
    'order/getOrders',
    async (params, { rejectWithValue }) => {
        const response = await apiGetCall(`/order/list`, params)
        if (response.data.status === 'error') {
            return rejectWithValue(response.data)
        }
        return response.data
    }
)

export const counterSlice = createSlice({
    name: 'order',
    initialState,
    reducers: {

    },
    extraReducers: {
        [getOrders.pending]: (state, action) => {
            state.isFetching = true
            state.error = null
        },
        [getOrders.rejected]: (state, action) => {
            state.isFetching = false
            state.error = action.payload.message
        },
        [getOrders.fulfilled]: (state, action) => {
            state.isFetching = false
            state.error = null
            state.orders = action.payload.data
        },

    }

})

export default counterSlice.reducer