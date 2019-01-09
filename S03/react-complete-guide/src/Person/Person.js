import React from 'react';

import './Person.css';

// need to import React from react pacjkage

// will not change
// arrow function annotation cont person = () => {}
// return JSX => <p>TTTT</p>

const person = ( props ) => {
    return (
        <div className="Person">
            <p onClick={props.click}>I'm {props.name} and I am {props.age} years old!</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.changed} value={props.name} />
        </div>
    )
};

// need to export the fucntion

export default person;