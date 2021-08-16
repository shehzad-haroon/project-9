// create file with the name of index.js after that 
import {combineReducers} from 'redux';
import basketReducer from './basketReducer';

export default combineReducers({basketState:basketReducer});
