import React from 'react'
import { NativeBaseProvider, extendTheme } from 'native-base';
import theme from './common/ExtendTheme'
import Router from './navigation/Router'

import Exemple from './page/Exemple'


import { store } from '../src/store';
import { Provider } from 'react-redux';
import { saveState } from "../src/utility/browser-storage";
import { debounce } from "debounce";

import i18n from "./i18n";
import { I18nextProvider } from "react-i18next";

store.subscribe(
    debounce(() => {
        saveState(store.getState());
    }, 800)
);

const Main= () => {

    return (
        <Provider store={store}>
            <NativeBaseProvider theme={theme}>
                <I18nextProvider i18n={i18n}>
                <Router />
                </I18nextProvider>
            </NativeBaseProvider>
        </Provider>
    )
}
export default Main