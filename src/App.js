import React from 'react';
import Home from './Landing/index.jsx';
// import './index.css';
import Aboutcontent from './Pages/About';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";


function App(){
    return(
        <Router>
            <div className='app-content' id='content'>
                <Switch>
                    <Route exact path="/">
                        <Home/>
                    </Route>
                    <Route path="/About">
                        <Aboutcontent/>
                    </Route>
                </Switch>
            </div>
        </Router>
    )
}

export default App;