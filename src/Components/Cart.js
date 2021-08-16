import React from 'react'
import {connect} from 'react-redux';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import { product } from 'prelude-ls';
function Cart({basketprops}) {
    console.log(basketprops)
    let productsInCart = [];
    Object.keys(basketprops.products).forEach(function(item){
        console.log(item);
        console.log(basketprops.products[item].inCart)
      if(basketprops.products[item].inCart){
          productsInCart.push(basketprops.products[item])
      }
      console.log(productsInCart)
    })
    productsInCart = productsInCart.map((product,index)=>{
        return(
        <React.Fragment>
            <div className="flex">
                <table class="head-1"> 
                    <tr>
                    <td><ShoppingBasketIcon/></td>
                <td className="tr-">{product.name}</td>
                <td className="tr-1">{product.price}</td>
                <td className="tr-2">{product.numbers}</td>
               
                </tr></table>
                {/* <h1>{product.number * product.price}</h1> */}
                </div>
        </React.Fragment>
        )
    })
    return (
        <div>
            <div className="flex-head">
                <table class="head">
                    <tr>
                <td className="tr">Product Name</td>
                <td className="tr">Product Price</td>
                <td className="tr">Product Quantity</td>
                </tr>
                </table>
                <hr/>
            </div>
            {productsInCart}
            
        <div>
            <h2 class="btn-primary">Total Amount : {basketprops.cartCost}</h2>
        </div>
        </div>
    )
}
const mapStateToProps = state =>({
    basketprops:state.basketState
})

export default connect(mapStateToProps)(Cart)
