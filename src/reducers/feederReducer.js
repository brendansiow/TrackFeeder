export default function reducer(state={
    fetching:false,
    fetched:false,
    feeders:[],
    error:null,
}, action) {
    switch(action.type){
        case "FETCH_FEEDERS_PENDING": {
            return{...state, 
                fetching: true}
            break;
        }
        case "FETCH_FEEDERS_REJECTED": {
            return{...state, 
                fetching: false,
                error:action.feeder}
            break;
        }
        case "FETCH_FEEDERS_FULFILLED": {
            return{...state, 
                fetching: false, 
                fetched:true, 
                feeders:action.feeder}
            break;
        }         
    }
    return state
}