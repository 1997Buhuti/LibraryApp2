import {combineReducers} from "redux";
import authorReducer from "./authorReducer";

const reducers=combineReducers({
    author:authorReducer
})
export default reducers;