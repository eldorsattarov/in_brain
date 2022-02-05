import {HOME} from "../tool/constant";
import axios from "axios";

export function updateState(data) {
    return {
        type: HOME,
        payload: data
    }
}

export const getHome = () => (dispatch) =>{
    axios.get("https://backend.ggic.uz/api/Yoshlar-ittifoqi/")
        .then((res)=>{
            console.log(res);
            dispatch(updateState({dataa : res.data.results}));
        })
}
