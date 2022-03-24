import React, { useState } from "react";
import BoxDisplay from "./BoxDisplay";

const Form = (props) => {
    const [boxColor, setBoxColor] = useState("");
    const [allTheBoxes, setAllTheBoxes] = useState([]);
    const addBoxToBoxes = (e) => {
        e.preventDefault();
        setAllTheBoxes([...allTheBoxes, boxColor]);
        setBoxColor("");
    };
    return (
        <div className="form_wrapper">
            <h2>Make some color boxes.</h2>
            <form onSubmit={addBoxToBoxes}>
                {/* <div className="form_fields"> */}
                <div>
                    <label htmlFor="color">Name a color: </label>
                    <input
                        value={boxColor}
                        type="text"
                        name="color"
                        onChange={(e) => setBoxColor(e.target.value)}
                    />
                    <button type="submit" className="btn_submit">
                        Add
                    </button>
                </div>
            </form>
            <div>
                {/* <h2>And here they be...</h2> */}
                <BoxDisplay allTheBoxes={allTheBoxes} />
            </div>
        </div>
    );
};

export default Form;
