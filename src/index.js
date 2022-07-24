import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/app/app";
import { compose, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import {rootReducer} from './service/reducer/index';
import { BrowserRouter } from "react-router-dom";





const composeEnhancers =
  typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose; 
    const enhancer = composeEnhancers(applyMiddleware(thunk));
    const store = createStore(rootReducer, enhancer)
  
ReactDOM.render(
    <Provider store={store}>
      <BrowserRouter>
<App />
</BrowserRouter>
</Provider>,
 document.getElementById("root"));


  