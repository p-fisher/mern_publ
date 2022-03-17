import React, { useState } from "react";

const Form = (props) => {
    const [fName, setFName] = useState("");
    const [lName, setLName] = useState("");
    const [email, setEmail] = useState("");
    const [pwd, setPwd] = useState("");
    const [checkPwd, setCheckPwd] = useState("");

    return (
        <div class="form_wrapper">
            <form>
                <div class="form_fields">
                    <label htmlFor="fName">First Name: </label>
                    <input
                        type="text"
                        name="fName"
                        onChange={(e) => setFName(e.target.value)}
                    />
                </div>
                <div class="form_fields">
                    <label htmlFor="lName">Last Name: </label>
                    <input
                        type="text"
                        name="lName"
                        onChange={(e) => setLName(e.target.value)}
                    />
                </div>
                <div class="form_fields">
                    <label htmlFor="email">Email: </label>
                    <input
                        type="text"
                        name="email"
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div class="form_fields">
                    <label htmlFor="pwd">Password: </label>
                    <input
                        type="text"
                        name="pwd"
                        onChange={(e) => setPwd(e.target.value)}
                    />
                </div>
                <div class="form_fields">
                    <label htmlFor="firstName">Verify Password: </label>
                    <input
                        type="text"
                        name="checkPwd"
                        onChange={(e) => setCheckPwd(e.target.value)}
                    />
                </div>
            </form>

            <div class="results_wrapper">
                <p>{ fName }</p>
                <p>{ lName }</p>
                <p>{ email }</p>
                <p>{ pwd }</p>
                <p>{ checkPwd }</p>

            </div>

        </div>
    );
};

export default Form;
