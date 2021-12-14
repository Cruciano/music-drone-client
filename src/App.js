import './App.css';
import LoginPage from "./components/LoginPage/LoginPage";
import {Route} from "react-router-dom";
import HomePage from "./components/HomePage/HomePage";

function App() {
    return (
        <div className="App">
            <Route exact path="/" component={HomePage}/>
            <Route exact path="/Login" component={LoginPage}/>
        </div>
    );
}

export default App;
