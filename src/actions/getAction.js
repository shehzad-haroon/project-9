//create file with the name of addAction.js after that 
import {GET_NUMBERS_BASKET} from './types';

export const getNumbers  = () => {
    return (dispatch) => {
        console.log("Getting All basket Numbers")
        dispatch({
            type: GET_NUMBERS_BASKET
        })
    }
}
