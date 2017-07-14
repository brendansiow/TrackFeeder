import { applyMiddleware, createStore } from "redux";
import { createLogger } from 'redux-logger'
import thunk from "redux-thunk";
import ReduxPromise from "redux-promise";
import reducers from "./reducers";

const logger = createLogger({});
const middleware = applyMiddleware(ReduxPromise,thunk,logger)(createStore)

export default middleware(reducers)