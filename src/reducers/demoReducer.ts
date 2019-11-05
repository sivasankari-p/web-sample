import {FETCH_TODO, FETCH_TODO_ERROR, FETCH_TODO_SUCCESS} from "../constants/demo";

export const TODO_KEYS = {
    LOADING: "loading",
    TODO_LIST: "todo",
    ERROR: "error",
};


export interface TodoStoreInterface {
    loading: boolean,
    todo: object[],
    error: { [key: string]: any },
}


const initialState: TodoStoreInterface = {
    loading: false,
    todo: [],
    error: {},
};

export default (state = initialState, action: any): TodoStoreInterface => {
    switch (action.type) {
        case FETCH_TODO:
            return { ...state, [TODO_KEYS.LOADING]: true, [TODO_KEYS.TODO_LIST]: [] };
        case FETCH_TODO_SUCCESS:
            return { ...state, [TODO_KEYS.LOADING]: false, [TODO_KEYS.TODO_LIST]: action.response.length };
        case FETCH_TODO_ERROR:
            return { ...state, [TODO_KEYS.LOADING]: false, [TODO_KEYS.TODO_LIST]: [], [TODO_KEYS.ERROR]: action.error };
        default:
            return state;
    }
};
