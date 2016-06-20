import React from 'react'
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import store from './redux'
import Home from './components/Home'
import AddCity from './components/AddCity'
import Application from './components/Application'
import { Router, Route, browserHistory, IndexRoute } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'

ReactDOM.render(
  <Provider store={store}>
    <Router history={syncHistoryWithStore(browserHistory, store)}>
      <Route path="/" component={Application}>
        <IndexRoute component={Home}/>
        <Route path="/addCity" component={AddCity}/>
      </Route>
    </Router>
  </Provider>
  ,
  document.getElementById('root')
);
