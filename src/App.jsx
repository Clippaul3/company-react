import React from 'react';
import './App.scss';
import Index from './pages/index'
import {BrowserRouter} from "react-router-dom";

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Index/>
            </BrowserRouter>
        </div>
    );
}

export default App;
