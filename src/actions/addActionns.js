//create file with the name of addAction.js after that 
import {ADD_PRODUCT_BASKET} from './types';

export const addBasket  = (productname) => {
    return (dispatch) => {
        console.log("New Product Added")
        console.log(productname)
        dispatch({
            type: ADD_PRODUCT_BASKET,
            payload:productname
        })
    }
}
