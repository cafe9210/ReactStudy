import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import App from './App';
import reportWebVitals from './reportWebVitals';
import rootReducer from './modules';

const store = createStore(rootReducer)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

reportWebVitals();
// md src/components   Bpp.js
// md src/modules      bpp.js
// md src/containers   BppContainer.js

// type NUL > src/components/Bpp.js
// type NUL > src/modules/bpp.js
// type NUL > src/containers/BppContainer.js