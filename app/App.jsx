import React from 'react'
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import configureStore from './redux/config/store'
import Home from './components/Home'
import AddCity from './components/AddCity'
import App from './components/App'
import {IndexRoute, Router, Route, browserHistory } from 'react-router'

const store = configureStore()

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={Home}/>
        <Route path="addCity" component={AddCity}/>
      </Route>
    </Router>
  </Provider>
  ,
  document.getElementById('root')
);
