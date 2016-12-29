/**
 * @name : Header 
 * @description : For header of the application 
 */
import React , { Component } from 'react';
import logo from '../logo.svg';

class Header extends Component {

    render() {
        let title = 'Welcome to the Blogging Website';
        return (
             <div className="App">
                <div className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h2>{title}</h2>
                </div>
             </div>
        );
    }
}

export default Header;