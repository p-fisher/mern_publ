import React, { useState } from 'react';
    
const Person = (props) => {

    const { firstName, lastName, age, hairColor } = props;
    const [stateOfAge, setStateOfAge] = useState(age);
    return (
        <div>
            <h1>{lastName}, {firstName}</h1>
            <p>Age: {stateOfAge}</p>
            <p>Hair Color: {hairColor}</p>
            {/* <button onClick={() => setStateOfAge(stateOfAge+ 1)}>
                Birthday Button: {firstName} {lastName}
            </button> */}
            <button onClick={() => setStateOfAge(stateOfAge+ 1)}>
                Add 1 year to {firstName}'s Age!
            </button>

        </div>
    );
}
export default Person;