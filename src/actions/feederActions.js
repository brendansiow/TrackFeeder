import axios from "axios"

export function fetchFeeder(){
        const feeders = axios.get("/api/dota/getfeeders")
        return{
             type: "FETCH_FEEDERS_FULFILLED",
             payload: feeders    
            }
}