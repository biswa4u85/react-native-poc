'use strict'

import { Constants, Languages, Config } from "@common";
import moment from "moment";
// import WooWorker from "../services/WooWorker";
import SiteApis from '../services/SiteApis'

const types = {
  FETCH_PRODUCTS_PENDING: "FETCH_PRODUCTS_PENDING",
  FETCH_PRODUCTS_SUCCESS: "FETCH_PRODUCTS_SUCCESS",
  FETCH_ALL_PRODUCTS_SUCCESS: "FETCH_ALL_PRODUCTS_SUCCESS",
  FETCH_ALL_PRODUCTS_MORE: "FETCH_ALL_PRODUCTS_MORE",
  FETCH_PRODUCTS_FAILURE: "FETCH_PRODUCTS_FAILURE",
  CLEAR_PRODUCTS: "CLEAR_PRODUCTS",
  INIT_PRODUCTS: "INIT_PRODUCTS",
  FETCH_REVIEWS_PENDING: "FETCH_REVIEWS_PENDING",
  FETCH_REVIEWS_SUCCESS: "FETCH_REVIEWS_SUCCESS",
  FETCH_REVIEWS_FAILURE: "FETCH_REVIEWS_FAILURE",
  FETCH_PRODUCTS_BY_TAGS_PENDING: "FETCH_PRODUCTS_BY_TAGS_PENDING",
  FETCH_PRODUCTS_BY_TAGS_SUCCESS: "FETCH_PRODUCTS_BY_TAGS_SUCCESS",
  FETCH_PRODUCTS_BY_TAGS_FAILURE: "FETCH_PRODUCTS_BY_TAGS_FAILURE",
  FETCH_PRODUCTS_BY_NAME_PENDING: "FETCH_PRODUCTS_BY_NAME_PENDING",
  FETCH_PRODUCTS_BY_NAME_SUCCESS: "FETCH_PRODUCTS_BY_NAME_SUCCESS",
  FETCH_PRODUCTS_BY_NAME_FAILURE: "FETCH_PRODUCTS_BY_NAME_FAILURE",
  FETCH_PRODUCTS_STICKY_PENDING: "FETCH_PRODUCTS_STICKY_PENDING",
  FETCH_PRODUCTS_STICKY_SUCCESS: "FETCH_PRODUCTS_STICKY_SUCCESS",
  FETCH_PRODUCTS_STICKY_FAILURE: "FETCH_PRODUCTS_STICKY_FAILURE",
  FETCH_PRODUCTS_MORE: "FETCH_PRODUCTS_MORE",
  FETCH_PRODUCTS_VARIANT_PENDING: "FETCH_PRODUCTS_VARIANT_PENDING",
  FETCH_PRODUCTS_VARIANT_SUCCESS: "FETCH_PRODUCTS_VARIANT_SUCCESS",
  FETCH_PRODUCTS_VARIANT_FAIL: "FETCH_PRODUCTS_VARIANT_FAIL",
  FETCH_PRODUCTS_RELATED_PENDING: "FETCH_PRODUCTS_RELATED_PENDING",
  FETCH_PRODUCTS_RELATED_SUCCESS: "FETCH_PRODUCTS_RELATED_SUCCESS",
  FETCH_PRODUCTS_RELATED_FAIL: "FETCH_PRODUCTS_RELATED_FAIL",
  GET_COUPON_CODE_PENDING: "GET_COUPON_CODE_PENDING",
  GET_COUPON_CODE_SUCCESS: "GET_COUPON_CODE_SUCCESS",
  GET_COUPON_CODE_FAIL: "GET_COUPON_CODE_FAIL",
  CLEAN_OLD_COUPON: "CLEAN_OLD_COUPON",
  SWITCH_LAYOUT_HOME: "SWITCH_LAYOUT_HOME",
  SAVE_SEARCH_HISTORY: "SAVE_SEARCH_HISTORY",
  CLEAR_SEARCH_HISTORY: "CLEAR_SEARCH_HISTORY"
};

export const productActions = {
  fetchProductsByCategoryId: async (dispatch, categoryId, per_page, page) => {
    const json = await SiteApis.productsByCategoryId(
      categoryId,
      per_page,
      page
    );
    if (json === undefined) {
      dispatch(productActions.fetchProductsFailure("Can't get data from server"));
    } else if (json.code) {
      dispatch(productActions.fetchProductsFailure(json.message));
    } else {
      dispatch(productActions.fetchProductsSuccess(json));
    }
  },
  fetchProductsByVenderId: async (dispatch, params, token) => {
    dispatch({ type: types.FETCH_PRODUCTS_PENDING })
    let respond: any = await SiteApis.getDataApi(params, 'items', token);
    if (respond.error) {
      dispatch({ type: types.FETCH_PRODUCTS_FAILURE, error: respond.message })
    } else {
      dispatch({ type: types.FETCH_PRODUCTS_SUCCESS, items: respond })
    }
    // const json = []
    // let tempItem: any = await SiteApis.productsByVenderId(venderId, per_page, page)
    // for (let item of tempItem) {
    //   json.push(item)
    // }
    // if (venderId === Config.adminUser) {
    //   const venderList = await SiteApis.getVenders(Config.venderId)
    //   for (let item of venderList) {
    //     if (item.inHouse) {
    //       let tempItem = await SiteApis.productsByVenderId(item.id, per_page, page)
    //       for (let item of tempItem) {
    //         json.push(item)
    //       }
    //     }
    //   }
    // }
    // if (json === undefined) {
    //   dispatch(productActions.fetchProductsFailure("Can't get data from server"));
    // } else if (json.code) {
    //   dispatch(productActions.fetchProductsFailure(json.message));
    // } else {
    //   let newProduct = {}
    //   for (let item of json) {
    //     item['servicesObj'] = {}
    //     for (let service of item.services) {
    //       item['servicesObj'][service.id] = service
    //     }
    //     if (item.category_id in newProduct) {
    //       newProduct[item.category_id].push(item)
    //     } else {
    //       newProduct[item.category_id] = []
    //       newProduct[item.category_id].push(item)
    //     }
    //   }
    //   dispatch(productActions.fetchProductsSuccess(newProduct));
    // }
  },
  fetchProductsSuccess: (items) => ({
    type: types.FETCH_PRODUCTS_SUCCESS,
    items,
    finish: true,
  }),
  fetchProductsFailure: (error) => ({
    type: types.FETCH_PRODUCTS_FAILURE,
    error,
  }),
  clearProducts: () => ({ type: types.CLEAR_PRODUCTS }),
  initProduct: () => ({ type: types.INIT_PRODUCTS }),
  fetchReviewsByProductId: async (dispatch, productId) => {
    dispatch({ type: types.FETCH_REVIEWS_PENDING });
    const json = await SiteApis.reviewsByProductId(productId);
    if (json === undefined) {
      dispatch({
        type: types.FETCH_REVIEWS_FAILURE,
        message: Languages.ErrorMessageRequest,
      });
    } else if (json.code) {
      dispatch({ type: types.FETCH_REVIEWS_FAILURE, message: json.message });
    } else {
      dispatch({ type: types.FETCH_REVIEWS_SUCCESS, reviews: json });
    }
  },
  fetchProductsByTag: async (dispatch, tag) => {
    dispatch({ type: types.FETCH_PRODUCTS_BY_TAGS_PENDING });
    const json = await SiteApis.productsByTagId(tag, 10, 1);
    if (json === undefined) {
      dispatch({
        type: types.FETCH_PRODUCTS_BY_TAGS_FAILURE,
        message: Languages.ErrorMessageRequest,
      });
    } else if (json.code) {
      dispatch({
        type: types.FETCH_PRODUCTS_BY_TAGS_FAILURE,
        message: json.message,
      });
    } else {
      dispatch({ type: types.FETCH_PRODUCTS_BY_TAGS_SUCCESS, products: json });
    }
  },

  fetchProductsByName: async (dispatch, name, per_page = 20, page = 1) => {
    dispatch({ type: types.FETCH_PRODUCTS_BY_NAME_PENDING });
    const json = await SiteApis.productsByName(name, per_page, page);

    if (json === undefined) {
      dispatch({
        type: types.FETCH_PRODUCTS_BY_NAME_FAILURE,
        message: Languages.ErrorMessageRequest,
      });
    } else if (json.code) {
      dispatch({
        type: types.FETCH_PRODUCTS_BY_NAME_FAILURE,
        message: json.message,
      });
    } else {
      dispatch({
        type: types.FETCH_PRODUCTS_BY_NAME_SUCCESS,
        productsByName: json,
      });
    }
  },
  // fetchStickyProducts: async (dispatch, per_page = 8, page = 1) => {
  //   dispatch({ type: types.FETCH_PRODUCTS_STICKY_PENDING });
  //   const json = await SiteApis.WooWorker(per_page, page);
  //   if (json === undefined) {
  //     dispatch({
  //       type: types.FETCH_PRODUCTS_STICKY_FAILURE,
  //       message: Languages.ErrorMessageRequest,
  //     });
  //   } else if (json.code) {
  //     dispatch({
  //       type: types.FETCH_PRODUCTS_STICKY_FAILURE,
  //       message: json.message,
  //     });
  //   } else {
  //     dispatch({
  //       type: types.FETCH_PRODUCTS_STICKY_SUCCESS,
  //       productSticky: json,
  //     });
  //   }
  // },
  fetchAllProducts: async (dispatch, per_page = 20, page = 1) => {
    dispatch({ type: types.FETCH_PRODUCTS_PENDING });
    const json = await SiteApis.getAllProducts(per_page, page);
    if (json === undefined) {
      dispatch({
        type: types.FETCH_PRODUCTS_FAILURE,
        message: Languages.ErrorMessageRequest,
      });
    } else if (page > 1) {
      dispatch({
        type: types.FETCH_ALL_PRODUCTS_MORE,
        items: json,
        page,
        finish: json.length < per_page,
      });
    } else {
      dispatch({
        type: types.FETCH_ALL_PRODUCTS_SUCCESS,
        items: json,
        page,
        finish: json.length < per_page,
      });
    }
  },
  // getProductVariations: async (dispatch, product, per_page = 100, page = 1) => {
  //   dispatch({ type: types.FETCH_PRODUCTS_VARIANT_PENDING });
  //   const json = await WooWorker.productVariant(product, per_page, page);

  //   if (json === undefined) {
  //     dispatch({
  //       type: types.FETCH_PRODUCTS_VARIANT_FAIL,
  //       message: Languages.ErrorMessageRequest,
  //     });
  //   } else if (json.code) {
  //     dispatch({
  //       type: types.FETCH_PRODUCTS_VARIANT_FAIL,
  //       message: json.message,
  //     });
  //   } else {
  //     dispatch({ type: types.FETCH_PRODUCTS_VARIANT_SUCCESS, items: json });
  //   }
  // },
  // fetchProductRelated: async (dispatch, product) => {
  //   dispatch({ type: types.FETCH_PRODUCTS_RELATED_PENDING });
  //   const json = await WooWorker.getProductRelated(product);

  //   if (json === undefined) {
  //     dispatch({
  //       type: types.FETCH_PRODUCTS_RELATED_FAIL,
  //       message: Languages.ErrorMessageRequest,
  //     });
  //   } else if (json.code) {
  //     dispatch({
  //       type: types.FETCH_PRODUCTS_RELATED_FAIL,
  //       message: json.message,
  //     });
  //   } else {
  //     dispatch({
  //       type: types.FETCH_PRODUCTS_RELATED_SUCCESS,
  //       productRelated: json,
  //     });
  //   }
  // },
  cleanOldCoupon: async (dispatch) => {
    dispatch({ type: types.CLEAN_OLD_COUPON });
  },
  // getCouponAmount: async (dispatch, code) => {
  //   dispatch({ type: types.GET_COUPON_CODE_PENDING });
  //   const json = await WooWorker.getAllCouponCode();

  //   if (json === undefined) {
  //     dispatch({
  //       type: types.GET_COUPON_CODE_FAIL,
  //       message: Languages.ErrorMessageRequest,
  //     });
  //   } else if (json.code) {
  //     dispatch({ type: types.GET_COUPON_CODE_FAIL, message: json.message });
  //   } else {
  //     let amount = 0;
  //     let message = "";
  //     let id = null;
  //     let discountType = "percent";

  //     json.forEach((item) => {
  //       if (item.code === code) {
  //         if (item.date_expires) {
  //           const dateExpires = moment(item.date_expires);
  //           const today = moment();
  //           if (dateExpires.diff(today) > 0) {
  //             amount = item.amount;
  //           } else {
  //             message = Languages.couponCodeIsExpired;
  //           }
  //         } else {
  //           amount = item.amount;
  //           discountType = item.discount_type;
  //           id = item.id;
  //         }
  //       }
  //     });

  //     if (amount === 0) {
  //       if (message.length > 0) {
  //         dispatch({ type: types.GET_COUPON_CODE_FAIL, message });
  //       } else {
  //         dispatch({
  //           type: types.GET_COUPON_CODE_FAIL,
  //           message: Languages.invalidCouponCode,
  //         });
  //       }
  //     } else {
  //       dispatch({
  //         type: types.GET_COUPON_CODE_SUCCESS,
  //         amount,
  //         code,
  //         discountType,
  //         id,
  //       });
  //     }
  //   }
  // },
  switchLayoutHomePage: (layout) => {
    return { type: types.SWITCH_LAYOUT_HOME, layout };
  },
  saveSearchHistory: (searchText) => {
    return { type: types.SAVE_SEARCH_HISTORY, searchText }
  },
  clearSearchHistory: () => {
    return { type: types.CLEAR_SEARCH_HISTORY }
  }
};

const initialState = {
  isFetching: false,
  error: null,
  list: [],
  listAll: [],
  stillFetch: true,
  page: 1,
  layoutHome: 7,
  productFinish: false,
  productsByName: [],
  productSticky: [],
  productVariations: null,

  productRelated: [],
};

export const reducer = (state = initialState, action) => {
  const { type, error, items, page, finish } = action;
  switch (type) {
    case types.FETCH_PRODUCTS_PENDING:
    case types.FETCH_PRODUCTS_BY_TAGS_PENDING:
    case types.FETCH_PRODUCTS_STICKY_PENDING:
    case types.FETCH_PRODUCTS_VARIANT_PENDING:
    case types.FETCH_REVIEWS_PENDING:
    case types.FETCH_PRODUCTS_RELATED_PENDING: {
      return {
        ...state,
        isFetching: true,
        error: null,
        message: "",
      };
    }
    case types.FETCH_PRODUCTS_BY_NAME_PENDING: {
      return {
        ...state,
        isSearching: true,
        message: "",
      };
    }

    case types.FETCH_PRODUCTS_STICKY_FAILURE:
    case types.FETCH_PRODUCTS_BY_TAGS_FAILURE:
    case types.FETCH_PRODUCTS_VARIANT_FAIL:
    case types.FETCH_REVIEWS_FAILURE:
    case types.FETCH_PRODUCTS_FAILURE:
    case types.FETCH_PRODUCTS_RELATED_FAIL: {
      return {
        ...state,
        isFetching: false,
        error,
      };
    }
    case types.FETCH_PRODUCTS_BY_NAME_FAILURE: {
      return {
        ...state,
        isSearching: false,
        message: action.message,
      };
    }
    case types.FETCH_ALL_PRODUCTS_SUCCESS: {
      return Object.assign({}, state, {
        isFetching: false,
        listAll: items,
        stillFetch: items.length !== 0,
        error: null,
        page,
        productFinish: finish,
      });
    }

    case types.FETCH_ALL_PRODUCTS_MORE: {
      return Object.assign({}, state, {
        isFetching: false,
        listAll: state.listAll.concat(items),
        stillFetch: items.length !== 0,
        error: null,
        page,
        productFinish: finish,
      });
    }

    case types.FETCH_PRODUCTS_SUCCESS: {
      return Object.assign({}, state, {
        isFetching: false,
        list: items,
        stillFetch: items.length !== 0,
        error: null,
        productFinish: finish,
      });
    }

    case types.CLEAR_PRODUCTS: {
      initialState.listAll = state.listAll;
      initialState.layoutHome = state.layoutHome;
      initialState.productSticky = state.productSticky;
      return Object.assign({}, initialState);
    }

    case types.INIT_PRODUCTS: {
      initialState.layoutHome = state.layoutHome;
      return Object.assign({}, initialState);
    }

    case types.FETCH_REVIEWS_SUCCESS: {
      return Object.assign({}, state, {
        isFetching: false,
        reviews: action.reviews,
      });
    }

    case types.FETCH_PRODUCTS_BY_TAGS_SUCCESS: {
      return Object.assign({}, state, {
        isFetching: false,
        products: action.products,
      });
    }

    case types.FETCH_PRODUCTS_BY_NAME_SUCCESS: {
      return {
        ...state,
        isSearching: false,
        productsByName: action.productsByName,
      };
    }

    case types.FETCH_PRODUCTS_STICKY_SUCCESS: {
      return {
        ...state,
        isFetching: false,
        productSticky: state.productSticky.concat(action.productSticky),
      };
    }

    case types.FETCH_PRODUCTS_VARIANT_SUCCESS: {
      return Object.assign({}, state, {
        isFetching: false,
        productVariations: items,
        error: null,
      });
    }

    case types.FETCH_PRODUCTS_RELATED_SUCCESS: {
      return Object.assign({}, state, {
        isFetching: false,
        productRelated: action.productRelated,
        error: null,
      });
    }
    case types.GET_COUPON_CODE_SUCCESS: {
      return Object.assign({}, state, {
        isFetching: false,
        coupon: {
          amount: action.amount,
          type: action.discountType,
          code: action.code,
          id: action.id,
        },
        error: null,
      });
    }
    case types.CLEAN_OLD_COUPON: {
      return Object.assign({}, state, {
        coupon: {
          amount: 0,
          code: "",
        },
      });
    }
    case types.SWITCH_LAYOUT_HOME: {
      return {
        ...state,
        layoutHome: action.layout,
      };
    }
    case types.GET_COUPON_CODE_PENDING: {
      return {
        ...state,
        isFetching: true,
        type,
        error: null,
      };
    }
    case types.GET_COUPON_CODE_FAIL: {
      return {
        ...state,
        isFetching: false,
        type,
        message: action.message,
      };
    }
    case types.SAVE_SEARCH_HISTORY:
      {
        var histories = state.histories
        if (histories == undefined) {
          histories = []
        }
        if (histories.indexOf(action.searchText) == -1) {
          histories.unshift(action.searchText)
        }
        if (histories.length > 10) {
          histories.pop()
        }
        return {
          ...state,
          histories
        }
      }
    case types.CLEAR_SEARCH_HISTORY:
      {
        return {
          ...state,
          histories: []
        }
      }
    default: {
      return state;
    }
  }
};
