import { legacy_createStore, applyMiddleware } from "redux";
import { thunk } from "redux-thunk";
import { reducer } from "./videos/reducer";

export const store = legacy_createStore(reducer, applyMiddleware(thunk));
