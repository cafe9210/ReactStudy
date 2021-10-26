import {combineReducers} from 'redux';
import bppReducer from './bpp';
// import cppReducer from './cpp';

const rootReducer=combineReducers({
  bppReducer,
})

export default rootReducer;