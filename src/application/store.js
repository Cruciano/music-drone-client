import { compose, applyMiddleware, createStore } from "redux";
import reducers from "./reducers";
import middleware from "./middleware";

export const configureStore = (services) => createStore(
    reducers,
    compose(applyMiddleware(...middleware.map(f => f(services))))
);

