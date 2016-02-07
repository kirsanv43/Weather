import { createStore, applyMiddleware, compose } from 'redux'
import rootReducer from '../reducers'
import { syncHistory, routeReducer } from 'react-router-redux'
import { browserHistory } from 'react-router'
import { createHistory } from 'history'

export default function configureStore(initialState) {
  const history = createHistory();
  const middleware = syncHistory(history)

  const finalCreateStore = compose(
    applyMiddleware(middleware)
  )(createStore)

  const store = finalCreateStore(rootReducer)

  middleware.listenForReplays(store);

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducers', () => {
      const nextRootReducer = require('../reducers').default
      store.replaceReducer(nextRootReducer)
    })
  }

  return store
}
