import {combineReducers} from "redux";
import { BookReducer } from "./bookReducer";

const RootReducer = combineReducers({
    books:BookReducer
})



export default RootReducer;