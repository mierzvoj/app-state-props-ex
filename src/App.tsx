import React from 'react';
import logo from './logo.svg';
import './App.css';
import {AppChild} from "./Child";
import {Parent} from "./Parent"

const App: React.FC = () => {
    return (
        <Parent/>
    );
}

export default App;
