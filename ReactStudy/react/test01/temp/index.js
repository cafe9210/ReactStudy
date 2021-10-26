import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import {combineReducers,createStore} from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './modules';
//import reducers from './modules/bpp';

const store=createStore(rootReducer);

ReactDOM.render(
  <Provider store={store}>
    <App />,
  </Provider>,
  document.getElementById('root')
);

//md src/components   Bpp.js
//md src/modules      bpp.js
//md src/containers   BppContainer.js

//type NUL > src/components/Bpp.js
//type NUL > src/modules/bpp.js
//type NUL > src/containers/BppContainer.js