import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import React, { Component } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css'; 
import Header from './components/Header';
import India from './components/India';
import World from './components/World';

class App extends Component {
    render() {
        return ( 
            <div className="container-fluid">
                <Router>
                    <Header/>

                    <Switch>
                        <Route exact path="/">
                            <India/>
                        </Route>

                        <Route path="/india">
                            <India/>
                        </Route>

                        <Route path="/world">
                            <World/>
                        </Route>
                    </Switch>
                </Router>
            </div>
        );
    }
}

export default App;