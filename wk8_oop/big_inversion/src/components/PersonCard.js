import React, { Component } from "react";

class PersonCard extends Component {

    render() {
        const { firstName, lastName, age, hair } = this.props;
        return (
            <div className="container">
                <h2 style={{color: "red", marginTop: "50px"}}>
                    {lastName}, {firstName}
                </h2>
                <p style={{fontWeight: "700"}}>Age: {age}</p>
                <p>Hair Color: {hair}</p>
            </div>
        );
    }
}

export default PersonCard;
