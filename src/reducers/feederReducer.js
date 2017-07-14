const initialState ={ feeders:[] };

export default function(state = initialState,action){
    switch(action.type){
        case'FETCH_FEEDERS_FULFILLED':
        return {...state, feeders : action.payload.data}; //...state indicate new state push
        default:
          return state;
    }
}