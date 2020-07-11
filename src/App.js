import React from 'react';

import './App.css';

import Title from './title/Title';
import POPOSList from './list/POPOSList';
import Footer from './footer/Footer';
import About from './about/About';
import POPOSDetails from "./details/POPOSDetails";

import {HashRouter as Router, Route} from "react-router-dom";

function App() {
    return (
        <Router>
            <div className="App">
                <Title/>
                <Route exact path="/" component={POPOSList}/>
                <Route exact path="/" component={Footer}/>

                <Route path="/about" component={About}/>

                <Route path="/details/:id" component={POPOSDetails}/>
            </div>
        </Router>
    );
}

export default App;
