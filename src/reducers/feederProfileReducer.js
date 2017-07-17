const initialState ={ feederProfile:[] };

export default function(state = initialState,action){
    switch(action.type){
        case'FETCH_FEEDERPROFILE_FULFILLED':
        return {...state, feederProfile : action.payload.data}; //...state indicate new state push
        default:
          return state;
    }
}