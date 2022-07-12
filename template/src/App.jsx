import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                    Prepare1 Edit
                    <code> src/App.js </code>
                    and save to reload.
                </p>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer">
                    Learn React
                </a>
                <p>
                    This Template Made By
                    <a
                        className="Author-link"
                        href="https://github.com/Abolfazl2647"
                        target="_blank"
                        rel="noopener noreferrer">
                        Abolfazl Rezvani
                    </a>
                </p>
            </header>
        </div>
    );
}

export default App;
