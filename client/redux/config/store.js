import { createStore, applyMiddleware, compose } from 'redux'
import rootReducer from '../reducers'
import { browserHistory } from 'react-router'
import { createHistory } from 'history'
import { reduxReactRouter, routerStateReducer, ReduxRouter } from 'redux-router';
import thunkMiddleware from 'redux-thunk' 

export default function configureStore(initialState) {
  //const history = createHashHistory();
  //const middleware = syncHistory(history)

  const store = compose(
applyMiddleware(thunkMiddleware),
    reduxReactRouter({
      createHistory
    }) )(createStore)(rootReducer);


  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducers', () => {
      const nextRootReducer = require('../reducers').default
      store.replaceReducer(nextRootReducer)
    })
  }

  return store
}
