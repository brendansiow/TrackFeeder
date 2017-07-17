import { combineReducers } from "redux"
import feederReducer from "./feederReducer"
import feederProfileReducer from "./feederProfileReducer"


const rootReducer = combineReducers({
    feeders:feederReducer,
    feederProfile:feederProfileReducer
})
export default rootReducer;