import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { apiGetCall, apiGetSingleCall, apiPostCall, apiPutCall } from '../utility/site-apis'

const initialState = {
  isFetching: false,
  error: null,
  allTrivias: [],
  singleTrivias: {},
  questions: null,
  triviaInfo: {},
  verifyPromo: false,
  razorpayorderID: null,
  contestantId: null,
  verifyOrderSucces: false,
  score: null,
}

export const listAllTrivias = createAsyncThunk(
  'trivia/listAllTrivias',
  async (params, { rejectWithValue }) => {
    const response = await apiGetCall(`/trivia/list`, params)
    if (response.data.status === 'error') {
      return rejectWithValue(response.data)
    }
    return response.data
  }
)

export const detailAllTrivias = createAsyncThunk(
  'trivia/detailAllTrivias',
  async (params, { rejectWithValue }) => {
    const response = await apiGetSingleCall(`/trivia/${params.id}`, params)
    if (response.data.status === 'error') {
      return rejectWithValue(response.data)
    }
    return response.data
  }
)

export const triviaQuestionsById = createAsyncThunk(
  'trivia/triviaQuestionsById',
  async (params, { rejectWithValue }) => {
    const response = await apiGetSingleCall(`/trivia/${params.Qid}/questions`, params)
    if (response.data.status === 'error') {
      return rejectWithValue(response.data)
    }
    return response.data
  }
)

export const validatePromo = createAsyncThunk(
  'trivia/validatePromo',
  async (params, { rejectWithValue }) => {
    const response = await apiPostCall(`/promo/validate`, params)
    if (response.data.status === 'error') {
      return rejectWithValue(response.data)
    }
    return response.data
  }
)

export const createOrder = createAsyncThunk(
  'trivia/createOrder',
  async (params, { rejectWithValue }) => {
    const response = await apiPostCall(`/order/new`, params)
    if (response.data.status === 'error') {
      return rejectWithValue(response.data)
    }
    return response.data
  }
)

export const verifyOrder = createAsyncThunk(
  'trivia/verifyOrder',
  async (params, { rejectWithValue }) => {
    const response = await apiPostCall(`/order/verify`, params)
    if (response.data.status === 'error') {
      return rejectWithValue(response.data)
    }
    return response.data
  }
)

export const updateContestant = createAsyncThunk(
  'trivia/updateContestant',
  async (params, { rejectWithValue }) => {
    const response = await apiPutCall(`/contestants/update/${params.contestantId}`, params)
    if (response.data.status === 'error') {
      return rejectWithValue(response.data)
    }
    return response.data
  }
)

export const counterSlice = createSlice({
  name: 'trivia',
  initialState,
  reducers: {
    setTriviaInfo: (state, action) => {
      state.triviaInfo = action.payload
    },
    clearPaymentInfo: (state, action) => {
      state.razorpayorderID = null
      state.verifyPromo = null
      state.verifyOrderSucces = false
    },
    clearTrivia: (state, action) => {
      state.score = null
      state.questions = null
    },
  },
  extraReducers: {
    [listAllTrivias.pending]: (state, action) => {
      state.isFetching = true
      state.error = null
    },
    [listAllTrivias.rejected]: (state, action) => {
      state.isFetching = false
      state.error = action.payload.message
    },
    [listAllTrivias.fulfilled]: (state, action) => {
      state.isFetching = false
      state.error = null
      state.allTrivias = action.payload.data
    },
    // detailAllTrivias
    [detailAllTrivias.pending]: (state, action) => {
      state.isFetching = true
      state.error = null
    },
    [detailAllTrivias.rejected]: (state, action) => {
      state.isFetching = false
      state.error = action.payload.message
    },
    [detailAllTrivias.fulfilled]: (state, action) => {
      state.isFetching = false
      state.error = null
      state.singleTrivias = action.payload.data
    },
    // triviaQuestionsById
    [triviaQuestionsById.pending]: (state, action) => {
      state.isFetching = true
      state.error = null
    },
    [triviaQuestionsById.rejected]: (state, action) => {
      state.isFetching = false
      state.error = action.payload.message
    },
    [triviaQuestionsById.fulfilled]: (state, action) => {
      state.isFetching = false
      state.error = null
      state.questions = action.payload.data
    },
    // validatePromo
    [validatePromo.pending]: (state, action) => {
      state.isFetching = true
      state.error = null
      state.verifyPromo = false
    },
    [validatePromo.rejected]: (state, action) => {
      state.isFetching = false
      state.error = action.payload.message
    },
    [validatePromo.fulfilled]: (state, action) => {
      state.isFetching = false
      state.error = null
      state.verifyPromo = true
    },
    // createOrder
    [createOrder.pending]: (state, action) => {
      state.isFetching = true
      state.error = null
      state.razorpayorderID = null
    },
    [createOrder.rejected]: (state, action) => {
      state.isFetching = false
      state.error = action.payload.message
    },
    [createOrder.fulfilled]: (state, action) => {
      state.isFetching = false
      state.error = null
      state.razorpayorderID = action.payload.data.razorpayorderID
    },
    // verifyOrder
    [verifyOrder.pending]: (state, action) => {
      state.isFetching = true
      state.error = null
      state.contestantId = null
      state.verifyOrderSucces = false
    },
    [verifyOrder.rejected]: (state, action) => {
      state.isFetching = false
      state.error = action.payload.message
    },
    [verifyOrder.fulfilled]: (state, action) => {
      state.isFetching = false
      state.error = null
      state.contestantId = action.payload.data._id
      state.verifyOrderSucces = true
    },
    // updateContestant
    [updateContestant.pending]: (state, action) => {
      state.isFetching = true
      state.error = null
    },
    [updateContestant.rejected]: (state, action) => {
      state.isFetching = false
      state.error = action.payload.message
    },
    [updateContestant.fulfilled]: (state, action) => {
      state.isFetching = false
      state.error = null
      state.score = action.payload.data
    },

  }

})

export const { setTriviaInfo, clearPaymentInfo, clearTrivia } = counterSlice.actions
export default counterSlice.reducer