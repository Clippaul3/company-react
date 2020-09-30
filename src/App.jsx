import React from 'react';
import './App.scss';
import Index from './pages/index'
import {BrowserRouter,HashRouter} from "react-router-dom";

function App() {
    return (
        <div className="App">
            <HashRouter>
                <Index/>
            </HashRouter>
        </div>
    );
}

export default App;
