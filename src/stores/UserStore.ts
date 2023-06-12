'use strict'
import { Config } from '@common';
import SiteApis from '../services/SiteApis'

const types = {
    LOGOUT: 'LOGOUT',
    LOGIN: 'LOGIN_SUCCESS',
    GET_PAGES: 'GET_PAGES',
    GET_SETTINGS: 'GET_SETTINGS',
    GET_ADMIN_DETAILS: 'GET_ADMIN_DETAILS',
    GET_ADDRESS: 'GET_ADDRESS',
    FINISH_INTRO: 'FINISH_INTRO',
    FETCH_VENDERS_PENDING: 'FETCH_VENDERS_PENDING',
    FETCH_VENDERS_SUCCESS: 'FETCH_VENDERS_SUCCESS',
    FETCH_VENDERS_FAILURE: 'FETCH_VENDERS_FAILURE',
};

export const actions = {
    login: (user, token) => {
        return { type: types.LOGIN, user, token };
    },
    logout() {
        return { type: types.LOGOUT };
    },
    setPages(pages) {
        return { type: types.GET_PAGES, pages };
    },
    setSettings(settings) {
        return { type: types.GET_SETTINGS, settings };
    },
    setAdminDetails(adminDetails) {
        return { type: types.GET_ADMIN_DETAILS, adminDetails };
    },
    setAddress(address) {
        return { type: types.GET_ADDRESS, address };
    },
    finishIntro() {
        return { type: types.FINISH_INTRO };
    },
    fetchVenders: async (dispatch: any, params, token) => {
        dispatch({ type: types.FETCH_VENDERS_PENDING })
        let json: any = await SiteApis.getDataApi(params, 'users', token);
        if (json.error) {
            dispatch({ type: types.FETCH_VENDERS_FAILURE, error: json.message })
        } else {
            dispatch({ type: types.FETCH_VENDERS_SUCCESS, items: json })
        }
    }
};

const initialState = {
    user: null,
    token: null,
    adminDetails: {},
    address: null,
    pages: [],
    list: [],
    error: null,
    isFetching: false,
    settings: {},
    finishIntro: null,
};

export const reducer = (state = initialState, action) => {
    const { type, user, token, services, adminDetails, address, pages, settings, items } = action;
    switch (type) {
        case types.FETCH_VENDERS_PENDING: {
            return {
                ...state,
                isFetching: true,
                error: null,
            }
        }
        case types.FETCH_VENDERS_SUCCESS: {
            return {
                ...state,
                isFetching: false,
                list: items || [],
                error: null,
            }
        }
        case types.FETCH_VENDERS_FAILURE: {
            return {
                ...state,
                isFetching: false,
                list: [],
                error,
            }
        }
        case types.LOGOUT:
            return Object.assign({}, initialState);
        case types.LOGIN:
            return { ...state, user, token };
        case types.GET_ADMIN_DETAILS:
            return { ...state, adminDetails };
        case types.GET_ADDRESS:
            return { ...state, address };
        case types.GET_PAGES:
            return { ...state, pages };
        case types.GET_SETTINGS:
            return { ...state, settings };
        case types.FINISH_INTRO:
            return { ...state, finishIntro: true };
        default:
            return state;
    }
};
