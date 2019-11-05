import {applyMiddleware, createStore} from "redux";
import createSagaMiddleware from "redux-saga";
import reducer from "./reducers";
import saga from "./saga";

const middlewares = [];
const sagaMiddleware = createSagaMiddleware();

middlewares.push(sagaMiddleware);
const enhancers = [];
enhancers.push(applyMiddleware(...middlewares));

export default createStore(reducer, ...enhancers);
sagaMiddleware.run(saga);
