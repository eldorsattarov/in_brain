
import {HOME} from "../tool/constant";
const initialState = {
    dataa : [],
    open : false
}

export const homeReducer = (state=initialState,action)=>{
    if (action.types = HOME){
        return{
            ...state,
            ...action.payload
        }
    }
    return state
}
