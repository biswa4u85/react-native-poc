'use strict'

import * as React from 'react'
import Navigation from './Navigation';
// import Router from './Router'
import { Provider } from 'react-redux'
import { store, persistor } from '@stores'
import { PersistGate } from 'redux-persist/es/integration/react'
interface Props { }

interface States { }

class Main extends React.Component<Props, States> {

  render() {
    return (
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <Navigation />
        </PersistGate>
      </Provider>
    );
  }
}

export default Main