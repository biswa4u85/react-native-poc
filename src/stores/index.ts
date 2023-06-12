import AsyncStorage from '@react-native-async-storage/async-storage';
import { createStore, combineReducers, compose, applyMiddleware } from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import thunk from 'redux-thunk'

import { reducer as InternetStore } from './InternetStore';
import { reducer as StatusStore } from './StatusStore';
import { reducer as UserStore } from './UserStore';
import { reducer as CategoryStore } from './CategoryStore';
import { reducer as ProductStore } from './ProductStore';
import { reducer as CartStore } from './CartStore';
import { reducer as PushStore } from './PushStore';

const rootPersistConfig = {
  key: 'root',
  storage: AsyncStorage,
  blacklist: ['netInfo', 'toast', 'nav', 'layouts', 'payment'],
}

const rootReducer = combineReducers({
    netInfo: InternetStore,
    toast: StatusStore,
    user: UserStore,
    categories: CategoryStore,
    products: ProductStore,
    carts: CartStore,
    push: PushStore,
})

const persistedReducer = persistReducer(rootPersistConfig, rootReducer)

// Redux: Store
const middleware = [thunk]
const store = compose(applyMiddleware(...middleware))(createStore)(persistedReducer)
// Middleware: Redux Persist Persister
let persistor = persistStore(store);
// Exports
export {
  store,
  persistor,
};