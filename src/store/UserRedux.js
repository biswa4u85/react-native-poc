import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { apiPutCall, apiGetSingleCall } from '../utility/site-apis'

const initialState = {
  isFetching: false,
  error: null,
  userDetails: {},
  updateUserSuccess: false,
}

export const singleUser = createAsyncThunk(
  'user/singleUser',
  async (params, { rejectWithValue }) => {
    const response = await apiGetSingleCall(`/user/${params.id}`, params)
    if (response.data.status === 'error') {
      return rejectWithValue(response.data)
    }
    return response.data
  }
)
export const updateUser = createAsyncThunk(
  'user/updateUser',
  async (params, { rejectWithValue }) => {
    const response = await apiPutCall(`/user/profile`, params)
    if (response.data.status === 'error') {
      return rejectWithValue(response.data)
    }
    return response.data
  }
)

export const counterSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUpdateUserSucces: (state, action) => {
      state.updateUserSuccess = action.payload
    },
  },
  extraReducers: {
    [singleUser.pending]: (state, action) => {
      state.isFetching = true
      state.error = null
    },
    [singleUser.rejected]: (state, action) => {
      state.isFetching = false
      state.error = action.payload.message
    },
    [singleUser.fulfilled]: (state, action) => {
      state.isFetching = false
      state.error = null
      state.userDetails = action.payload.data
    },
    [updateUser.pending]: (state, action) => {
      state.isFetching = true
      state.error = null
      state.updateUserSuccess = false
    },
    [updateUser.rejected]: (state, action) => {
      state.isFetching = false
      state.error = action.payload.message
    },
    [updateUser.fulfilled]: (state, action) => {
      state.isFetching = false
      state.error = null
      state.updateUserSuccess = true
      state.userDetails = action.payload.data
    },

  }

})

export const { setUpdateUserSucces } = counterSlice.actions
export default counterSlice.reducer