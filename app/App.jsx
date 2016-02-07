import React from 'react'
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import configureStore from './redux/config/store'
import Home from './components/Home'
import AddCity from './components/AddCity'
import Application from './components/Application'
import Foo from './components/Foo'
import {IndexRoute, Router, Route, browserHistory } from 'react-router'

const store = configureStore()

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={Application}>
        <IndexRoute component={Home}/>
        <Route path="addCity" component={AddCity}/> 
      </Route>
    </Router>
  </Provider>
  ,
  document.getElementById('root')
);
