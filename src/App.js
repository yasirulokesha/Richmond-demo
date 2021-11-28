import Header from './header';
import Content from './Home-content';
import Sections from './sections.jsx';
import Footer from './footer.jsx';
import Landing from './Landing.jsx';
import './index.css';
import Aboutcontent from './Pages/About'

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
                        <Header/>
                        <Landing/>
                        <Content/>
                        <Sections/>
                        <Footer/>
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