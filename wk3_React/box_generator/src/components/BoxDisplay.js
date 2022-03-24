import React, { useState } from "react";
// import Form from "./BoxForm";

const Display = (props) => {
    // const [boxColor, setBoxColor] = useState("");
    // const [allTheBoxes, setAllTheBoxes] = useState([]);
    // const addBoxToBoxes = (e) => {
    //     e.preventDefault();
    //     setAllTheBoxes([...allTheBoxes,boxColor])
    // }
    return (
        <div className="form_wrapper">
            <h2>And here they are...</h2>
                {allTheBoxes.map((color,index) => {
                    return (
                    <div key={index} style={{ height:'100px', width:'100px', display: 'inline-flex', margin: '0 10px', backgroundColor: color }}>
                    </div>
                    )})}

        </div>
    );
};

export default Display;
