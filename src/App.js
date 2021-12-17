import './App.css';
import {Route, Switch} from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import Redirect from "react-router-dom/es/Redirect";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import Error404 from "./pages/Error404/Error404";

function App() {
    return (
        <div className="App">
            <Header/>
            <div className="content">
                <Switch>
                    <Route exact path="/Home" component={HomePage}/>
                    <Route exact path="/Error" component={Error404}/>
                    <Route exact path="/">
                        <Redirect to="/Home"/>
                    </Route>
                    <Redirect to="/Error"/>
                </Switch>
            </div>
            <Footer/>
        </div>
    );
}

export default App;
