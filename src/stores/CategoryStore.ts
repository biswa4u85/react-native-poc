'use strict'

const types = {
  SET_SELECTED_VENDER: 'SET_SELECTED_VENDER',
  SET_SELECTED_ITEM: 'SET_SELECTED_ITEM',
}

export const catActions = {
  setSelectedVender: (vender: any) => {
    return { type: types.SET_SELECTED_VENDER, vender }
  },
  setSelectedItem: (item: any) => {
    return { type: types.SET_SELECTED_ITEM, item }
  },
}

const initialState = {
  isFetching: false,
  error: null,
  selectedVender: null,
  selectedItem: null
}

export const reducer = (state: any = initialState, action: any) => {
  const { type, mode, error, items, item, category, vender, value } = action

  switch (type) {
    case types.SET_SELECTED_VENDER: {
      return {
        ...state,
        selectedVender: vender,
      }
    }
    case types.SET_SELECTED_ITEM: {
      return {
        ...state,
        selectedItem: item,
      }
    }

    default: {
      return state
    }
  }
}
