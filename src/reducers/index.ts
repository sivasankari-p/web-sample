import { combineReducers } from "redux";
import demoReducer, { TodoStoreInterface, TODO_KEYS } from "./demoReducer";

export const STORE_KEYS = {
  TODO_STORE: "todoStore",
};

export interface StoreInterface {
    todo: TodoStoreInterface,
}

export {
    TODO_KEYS,
};

export default combineReducers({
    [STORE_KEYS.TODO_STORE]: demoReducer,
});



