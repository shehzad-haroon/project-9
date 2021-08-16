import logo from './logo.svg';
import './App.css';
import Product from './Components/Product'
import Cart from './Components/Cart'
import Navbar from './Components/Navbar'
import {Provider} from 'react-redux'
import store from './store.js'
import { BrowserRouter as Router, Route } from 'react-router-dom'
function App() {
  return (
    <div className="App">
       <Router>
<Provider store={store}>
      <Navbar/>
      <Route  exact path="/" component={Product} />
      <Route  exact path="/cart" component={Cart} />

      {/* <Product/> */}
</Provider>
</Router>
<div><h1>Created by Shehzad Haroon ❤ ❤ ❤ </h1></div>
    </div>
  );
}

export default App;
