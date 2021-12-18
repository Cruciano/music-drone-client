import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import LoginPage from "./pages/AuthenticationPages/LoginPage";
import RegistrationPage from "./pages/AuthenticationPages/RegistrationPage";
import {Provider} from "react-redux";
import {createStore} from "redux";
import userReduser from "./redusers/UserReduser";

const store = createStore(userReduser);

function Root() {
    return (
        <div className="App">
            <Switch>
                <Route exact path="/Login" component={LoginPage}/>
                <Route exact path="/Registration" component={RegistrationPage}/>
                <Route path="*" component={App}/>
            </Switch>
        </div>
    );
}

ReactDOM.render(
    <Provider store={store}>
        <React.StrictMode>
            <BrowserRouter>
                <Root/>
            </BrowserRouter>
        </React.StrictMode>
    </Provider>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
