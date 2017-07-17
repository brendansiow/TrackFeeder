import axios from "axios"

export function fetchFeederProfile(dotaid){
        const feederProfile = axios.get("/api/dota/getfeeder/"+dotaid)
        return{
             type: "FETCH_FEEDERPROFILE_FULFILLED",
             payload: feederProfile    
            }
}