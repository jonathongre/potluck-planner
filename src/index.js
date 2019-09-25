import './index.css';
import React from 'react';
import rootReducer from './store/reducers';
import logger from 'redux-logger';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

const store = createStore(
    rootReducer, applyMiddleware(thunk, logger)
);


ReactDOM.render(    
    <Provider store={store}>
        <Router>
            <App />
        </Router>
    </Provider>,
    document.getElementById('root')
);
