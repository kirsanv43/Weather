import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './reducers';
import { browserHistory } from 'react-router' ;
import { createHistory } from 'history';
import { routerMiddleware, routerReducer } from 'react-router-redux'
import { reduxReactRouter, routerStateReducer, ReduxRouter } from 'redux-router';
import thunk from 'redux-thunk';


const store = createStore(
  rootReducer,
  applyMiddleware(thunk)
);


if (module.hot) {
  // Enable Webpack hot module replacement for reducers
  module.hot.accept('./reducers', () => {
    const nextRootReducer = require('./reducers').default;
    store.replaceReducer(nextRootReducer);
  });
}

export default store;
