import React from "react";
import {BrowserRouter as Router, Link, Route, Switch} from "react-router-dom";

export default class Routes extends React.Component {
    render() {
        return (
            <Router>
                <nav>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/about">About</Link>
                        </li>
                        <li>
                            <Link to="/users">Users</Link>
                        </li>
                    </ul>
                </nav>
                <div>
                    {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
                    <Switch>
                        <Route path="/about">
                            <div> <h1> About page </h1> </div>
                        </Route>
                        <Route path="/users">
                            <div> <h1> Users page </h1> </div>
                        </Route>
                        <Route path="/">
                            <div> <h1> Home page </h1> </div>
                        </Route>
                    </Switch>
                </div>
            </Router>
        );
    }
}
