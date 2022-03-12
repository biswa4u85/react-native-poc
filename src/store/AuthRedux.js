import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { apiGetCall } from '../utility/site-apis'

const initialState = {
    isFetching: false,
    error: null,
    result: null,
    singleData: {},
}

export const singleUserList = createAsyncThunk(
    'user/singleUserList',
    async (params, { rejectWithValue }) => {
        const response = await apiGetCall(`/trivia/61b1be1adbc420ddff00b3b6`, params)
        if (response.data.status === 'error') {
            return rejectWithValue(response.data)
        }
        return response.data
    }
)


export const counterSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        login: (state, action) => {
            state.result = action.payload  
        },  
    },

    extraReducers: {
        [singleUserList.pending]: (state, action) => {
            console.log('pend ..', action)
            state.isFetching = true
            state.error = null
        },
        [singleUserList.rejected]: (state, action) => {
            console.log('rej ..', action)
            state.isFetching = false
            state.error = action.payload.message
        },
        [singleUserList.fulfilled]: (state, action) => {
            console.log('succ ..', action)
            state.isFetching = false
            state.error = null
            state.singleData = action.payload.data
        },
    }

})

export const { login } = counterSlice.actions
export default counterSlice.reducer