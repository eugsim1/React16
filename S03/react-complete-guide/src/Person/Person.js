import React from 'react';

import './Person.css';

// need to import React from react pacjkage

// will not change
// arrow function annotation cont person = () => {}
// return JSX => <p>TTTT</p>
// props => argument receiced from App.js
// handle input 
const person = ( props ) => {
    return (
        <div className="Person">
            <p onClick={props.click}>I'm {props.name} and I am {props.age} years old!</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.changed} value={props.name} />
        </div>
    )
};

/* initial funtion
const person = ( props ) => {
    return (
        <p>Hi i m a person</p>
    )
};

 need to export the fucntion1
*/


//initial funtion props.children to inlude other tags 
// cant use setstate here
// only render  here but not logic
// App state should be chanfed in Apps.js

const person2 = ( props ) => {
    return (
        <div className="Person1">
        <p>Hi i m a person and i m {Math.floor(Math.random()*30)} year old !</p>
        <p>{props.children}</p>
        </div>
    )
};
 
// need to export the fucntion

export default person;
//export person2;