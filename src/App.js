import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css'; 
import Header from './components/Header';
import India from './components/India';
import World from './components/World';

function App() {
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

export default App;