import SiteApis from '../services/SiteApis'
const types = {
  FETCH_CART_PENDING: 'FETCH_CART_PENDING',
  FETCH_MY_ORDER: 'FETCH_MY_ORDER',
  ADD_TO_CART: 'ADD_TO_CART',
};

export const actions = {
  fetchMyOrder: (dispatch, user, token) => {
    dispatch({ type: types.FETCH_CART_PENDING });
    SiteApis.getDataApi({ userId: user.id, per_page: 40, page: 1 }, 'orders', token)
      .then((data) => {
        dispatch({
          type: types.FETCH_MY_ORDER,
          data,
        });
      })
      .catch((err) => { });
  },
  addCartItem: (products: any) => {
    return { type: types.ADD_TO_CART, products }
  },
};

const initialState = {
  myOrders: [],
  cartItems: {},
  isFetching: false,
};

export const reducer = (state = initialState, action) => {
  const { type } = action;
  switch (type) {
    case types.FETCH_MY_ORDER:
      return Object.assign({}, state, {
        type: types.FETCH_MY_ORDER,
        isFetching: false,
        myOrders: action.data,
      });
    case types.FETCH_CART_PENDING: {
      return {
        ...state,
        isFetching: true,
      };
    }
    case types.ADD_TO_CART: {
      return {
        ...state,
        cartItems: action.products,
      };
    }
    default: {
      return state;
    }
  }
};