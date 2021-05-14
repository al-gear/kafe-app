import React from "react";
import { render } from "react-dom";
import App from "./App";
import { Provider } from "react-redux"
import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import reducers from "./reducers";
import "./index.css";

const root = document.querySelector("#root");
const store = createStore(reducers, compose(applyMiddleware(thunk)));

render(
    <Provider store={store}>
        <App />
    </Provider>, root
)