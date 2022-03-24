import React, { useState } from "react";
// import Form from "./BoxForm";

const Display = (props) => {
    return (
        // this is not yet working, so i have also done this functionality in the ./components/BoxForm.js until I figure how to life the state
        // note: import Form above is commented out and in App.js BoxDisplay (this file) is commented out
        <div className="form_wrapper">
            <h2>And here they are...</h2>
            {props.allTheBoxes.map((color, index) => {
                return (
                    <div
                        key={index}
                        style={{
                            height: "100px",
                            width: "100px",
                            display: "inline-flex",
                            margin: "0 10px",
                            backgroundColor: color,
                        }}
                    ></div>
                );
            })}
        </div>
    );
};

export default Display;
