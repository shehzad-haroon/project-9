import { ADD_PRODUCT_BASKET , GET_NUMBERS_BASKET} from "../actions/types"

const intialState = {basketNumbers:0,cartCost:0,products:{
    skyblueshirt:{
        name:"skyblueshirt",
        price:80,
        numbers:0,
        inCart:false
    },
    greyshirt:{
        name:"greyshirt.....",
        price:150,
        numbers:0,
        inCart:false
    },darkblueshirt:{
        name:"darkblueshirt",
        price:90,
        numbers:0,
        inCart:false
    },
}

}
export default (state = intialState,action) => {
    switch(action.type){
    case ADD_PRODUCT_BASKET:
        let addQuantity = {...state.products[action.payload]}
        console.log(addQuantity)
        addQuantity.numbers += 1;
        addQuantity.inCart=true
        return{
            ...state,
            basketNumbers: state.basketNumbers + 1 ,
            cartCost:state.cartCost + state.products[action.payload].price,
            products:{
                ...state.products,
                [action.payload]:addQuantity
            }
        }
        case GET_NUMBERS_BASKET:
            return{
                ...state
            }
    default:return state}}
