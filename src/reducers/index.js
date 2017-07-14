import { combineReducers } from "redux"
import feederReducer from "./feederReducer"


const rootReducer = combineReducers({
    feeders:feederReducer
})
export default rootReducer;