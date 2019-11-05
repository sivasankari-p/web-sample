import {FETCH_TODO, FETCH_TODO_ERROR, FETCH_TODO_SUCCESS} from "../constants/demo";
import {ActionInterface} from "./action";

export const fetchTodos = (count = 0): ActionInterface => ({
    type: FETCH_TODO,
    count,
});

export const fetchTodoSuccess = (response: object): ActionInterface => ({
    type: FETCH_TODO_SUCCESS,
    response,
});

export const fetchTodoError = (error: object): ActionInterface => ({
    type: FETCH_TODO_ERROR,
    error,
});
