import React, { Component } from "react";

class PersonCard extends Component {
    constructor(props) {
        super(props);

        this.state = {
            makeOlder: this.props.age,
        };
    }
    render() {
        // age is used when setting up state and so we do not need to destructure it here!
        const { firstName, lastName, hair } = this.props;

        return (
            <div className="container">
                <h2 style={{color: "red", marginTop: "50px"}}>
                    {lastName}, {firstName}
                </h2>
                <p style={{fontWeight: "600"}}>Age: {this.state.makeOlder}</p>
                <p>Hair Color: {hair}</p>
                <button
                    onClick={() =>
                        this.setState({ makeOlder: this.state.ageUp + 1 })
                    }
                >
                    + Age {firstName}
                </button>
            </div>
        );
    }
}
export default PersonCard;