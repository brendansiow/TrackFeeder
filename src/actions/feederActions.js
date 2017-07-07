import axios from "axios"

export function fetchFeeder(){
    return function (dispatch){
        axios.get("http://trackfeederbeta.herokuapp/api/dota/getfeeders")
        .then((response)=>{
            dispatch({type: "FETCH_FEEDERS_FULFILLED",feeder: response.data})
        })
        .catch((err)=>{
            dispatch({type: "FETCH_FEEDERS_REJECTED",feeder:err})
        })
    }
}