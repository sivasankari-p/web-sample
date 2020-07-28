import { combineReducers } from "redux";
import demoReducer, { TodoStoreInterface, TODO_KEYS } from "./demoReducer";
import windowReducer, {IWindowReducer, WINDOW_REDUCER_KEYS} from "./WindowReducer";

export const STORE_KEYS = {
    TODO_STORE: "todoStore",
    WINDOW_STORE: "windowStore"
};

export interface StoreInterface {
    todo: TodoStoreInterface,
    window: IWindowReducer
}

export {
    TODO_KEYS,
    WINDOW_REDUCER_KEYS
};

export default combineReducers({
    todoStore: demoReducer,
    windowStore: windowReducer
});



