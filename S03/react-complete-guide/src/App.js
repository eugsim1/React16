// import react and react class
///
// see the code of return much easier
import React, { Component } from 'react';

import './App.css';
import logo from './logo.svg';


// create a javascript calss
// render class to render
class App extends Component {
    render() {
         return (
             <div className = "App">
            <h1> Hi i m a react application </h1> 
            </div>
        ); 
     //   return React.createElement('div', null, 'h1', 'Hi ......');
    }
}

// export class default export  => import App
export default App;