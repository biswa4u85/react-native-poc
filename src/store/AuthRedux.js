import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { apiGetCall, apiPostCall } from '../utility/site-apis'

const initialState = {
  isFetching: false,
  error: null,
  isOptSend: false,
  phone: null,
  user: null,
  token: null,
  loginRedirectUrl: null,
}

export const otpSend = createAsyncThunk(
  'auth/otpSend',
  async (params, { rejectWithValue }) => {
    const response = await apiPostCall(`/auth/otp/send`, params)
    if (response.data.status === 'error') {
      return rejectWithValue(response.data)
    }
    response.data.phone = params.phone
    return response.data
  }
)
export const otpReSend = createAsyncThunk(
  'auth/otpReSend',
  async (params, { rejectWithValue }) => {
    const response = await apiPostCall(`/auth/otp/resend`, params)
    if (response.data.status === 'error') {
      return rejectWithValue(response.data)
    }
    return response.data
  }
)
export const otpValidate = createAsyncThunk(
  'auth/otpValidate',
  async (params, { rejectWithValue }) => {
    const response = await apiPostCall(`/auth/otp/validate`, params)
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
    setLoginRedirectUrl: (state, action) => {
      state.loginRedirectUrl = action.payload
    },
    logout: (state, action) => {
      state.user = null
      state.token = null
    },
  },
  extraReducers: {
    // otpSend
    [otpSend.pending]: (state, action) => {
      state.isFetching = true
      state.error = null
      state.isOptSend = false
    },
    [otpSend.rejected]: (state, action) => {
      alert(action.payload.message);
      state.isFetching = false
      state.error = action.payload.message
    },
    [otpSend.fulfilled]: (state, action) => {
      state.isFetching = false
      state.error = null
      alert(action.payload.data);
      state.isOptSend = true
      state.phone = action.payload.phone
    },
    // otpReSend
    [otpReSend.pending]: (state, action) => {
      state.isFetching = true
      state.error = null
      state.isOptSend = false
    },
    [otpReSend.rejected]: (state, action) => {
      alert(action.payload.message);
      state.isFetching = false
      state.error = action.payload.message
    },
    [otpReSend.fulfilled]: (state, action) => {
      state.isFetching = false
      state.error = null
      alert(action.payload.data);
      state.isOptSend = true
    },
    // otpValidate
    [otpValidate.pending]: (state, action) => {
      state.isFetching = true
      state.error = null
      state.isOptSend = false
    },
    [otpValidate.rejected]: (state, action) => {
      alert(action.payload.message);
      state.isFetching = false
      state.error = action.payload.message
    },
    [otpValidate.fulfilled]: (state, action) => {
      state.isFetching = false
      state.error = null
      state.user = action.payload.data
      state.token = `Bearer ${action.payload.data.Authorization}`
    },
  }

})

export const { logout, setLoginRedirectUrl } = counterSlice.actions
export default counterSlice.reducer
