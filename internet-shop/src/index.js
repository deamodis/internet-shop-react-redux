import React from 'react';
import ReactDOM from 'react-dom';
import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
import {createStore, applyMiddleware} from 'redux'
import './index.css';
import {browserHistory} from 'react-router'
import reducers from './reducers/index'
import bootstrap from 'bootstrap3/dist/css/bootstrap.css'

import {syncHistoryWithStore} from 'react-router-redux'
import {Provider} from 'react-redux'
import {Router, Route} from 'react-router'
import Layout from './containers/layout'
import Phones from './containers/phones/index.js'
import Phone from './containers/phone/index.js'

const store = createStore(reducers, composeWithDevTools(applyMiddleware(thunk)));
const history = syncHistoryWithStore(browserHistory, store);

ReactDOM.render(<Provider store={store}>
        <Router history={history}>
            <Route component={Layout}>
                <Route path='/' component={Phones}/>
                <Route path='categories/:id' component={Phones}/>
            </Route>
            <Route path='phones/:id' component={Phone}/>
        </Router>
    </Provider>
  ,document.getElementById('root')
);