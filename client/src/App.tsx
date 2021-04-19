import React from 'react';
import './App.css';
import HomePage from "./components/HomePage/HomePage";
import LoginPage from "./components/LoginPage/LoginPage";
import ProfilePage from "./components/ProfilePage/ProfilePage";
import NotFoundPage from "./components/NotFoundPage/NotFoundPage";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import {ProvideAuth} from "./hooks/auth";
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";

function App(): JSX.Element {
    return (
        <div className="app-container d-flex container-fluid">
            <div className="row flex-grow-1 d-flex justify-content-center align-items-center">
                <ProvideAuth>
                    <Router>
                        <Switch>
                            <Route exact path="/" component={HomePage}/>
                            <Route path="/login" component={LoginPage}/>
                            <PrivateRoute path="/profile" component={ProfilePage}/>
                            <Route path="*" component={NotFoundPage}/>
                        </Switch>
                    </Router>
                </ProvideAuth>
            </div>
        </div>
    );
}

export default App;
