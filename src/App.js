import './App.css';
import {Route, Switch} from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import RegistrationPage from "./pages/AuthenticationPages/RegistrationPage";
import LoginPage from "./pages/AuthenticationPages/LoginPage";

function App() {
    return (
        <div className="App">
            <Switch>
                <Route exact path="/" component={HomePage}/>
                <Route exact path="/Login" component={LoginPage}/>
                <Route exact path="/Registration" component={RegistrationPage}/>
            </Switch>
        </div>
    );
}

export default App;
