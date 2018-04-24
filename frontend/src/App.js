import React, { Component } from 'react';

import Nav from "./components/layout/Nav";
import Footer from "./components/layout/Footer";
import Surveys from './components/Surveys';

import './App.css';

class App extends Component {
    render() {
        return (
            <div className="App">
                <div className="container-fluid">
                    <Nav/>

                    <div className="main">
                        <div className="container">
                            <Surveys />
                        </div>
                    </div>

                    <Footer/>
                </div>  
            </div>
        );
    }
}

export default App;

