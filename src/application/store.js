import { compose, applyMiddleware, createStore } from "redux";
import reducers from "./reducers";

export const configureStore = (services) => createStore(
    reducers,
);

