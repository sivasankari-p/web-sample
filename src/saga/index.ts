import { takeLatest, put, call } from "redux-saga/effects";
import DemoService from "../services/demo";
import {FETCH_TODO} from "../constants/demo";
import {ActionInterface} from "../actions/action";
import {fetchTodoError, fetchTodoSuccess} from "../actions/demo";

function* fetchTodos(action: ActionInterface) {
    try {
        console.log("FETCHING TODO_LIST :: ", action);
        const response = yield call(DemoService.fetchTodos);
        console.log("FETCHING RESPONSE :: ", response);
        yield put(fetchTodoSuccess(response.data));
    } catch (error) {
        console.log({ error });
        yield put(fetchTodoError(error));
    }
}

export default function* () {
    yield takeLatest(FETCH_TODO, fetchTodos);
}
