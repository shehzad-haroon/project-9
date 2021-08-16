// *Step(1)
// English:-Firstly go to the terminal(npm install redux react-redux redux-thunk redux-devtool-extension)and run the command
// Urdu:-sab se phele terminal me jake (npm install redux react-redux redux-thunk redux-devtool-extension) ke command run karenge

// *Step(2)
// English:-then after that go to the src folder and create store.js file after creating store.js file 
// Urdu:-Phir is ke bad src ke folder me store.js ke file banayege store.js ke file ke andar jakr
import {createStore,applyMiddleware} from 'redux'
import {composeWithDevTools} from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import rootReducer from './reducers'

const intialState = {};
const middleware = [thunk]

const store = createStore(rootReducer,intialState,composeWithDevTools(applyMiddleware(...middleware))
);
export default store
