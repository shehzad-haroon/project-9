import React, { useEffect } from 'react'
import  {connect} from 'react-redux'
import {getNumbers} from '../actions/getAction'
import {NavLink} from 'react-router-dom'
function Navbar(Props) {
    useEffect(() => {
      getNumbers();
    }, [])
    console.log(Props)
    return (
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
          <NavLink class="navbar-brand" to="/">Men's Shirts </NavLink>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
          
              <li class="nav-item">
                <NavLink class="nav-link active" aria-current="page" to="/cart"><b>| Cart | <sup>{Props.basketProps.basketNumbers}</sup> </b></NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    )
}

const mapStateToProps = state =>({
  basketProps:state.basketState
})
export default connect(mapStateToProps,{getNumbers})(Navbar)
