import React, { useState } from "react";

const Form = (props) => {
    const [fName, setFName] = useState("");
    const [lName, setLName] = useState("");
    const [email, setEmail] = useState("");
    const [pwd, setPwd] = useState("");
    const [checkPwd, setCheckPwd] = useState("");
    // console.log("test");
    return (
        <div className="form_wrapper">
            <form>
                <div className="form_fields">
                    <label htmlFor="fName">First Name: </label>
                    <input
                        type="text"
                        name="fName"
                        onChange={(e) => setFName(e.target.value)}
                    />
                    {fName.length >= 1 && fName.length < 2 ? (
                        <p className="alert">
                            First Name must be at least 2 characters
                        </p>
                    ) : ""}
                </div>
                <div className="form_fields">
                    <label htmlFor="lName">Last Name: </label>
                    <input
                        type="text"
                        name="lName"
                        onChange={(e) => setLName(e.target.value)}
                    />
                    {lName.length >= 1 && lName.length < 2 ? (
                        <p className="alert">
                            Last Name must be at least 2 characters
                        </p>
                    ) : ""}
                </div>
                <div className="form_fields">
                    <label htmlFor="email">Email: </label>
                    <input
                        type="text"
                        name="email"
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    {email.length >= 1 && email.length < 2 ? (
                        <p className="alert">
                            Email must be at least 2 characters
                        </p>
                    ) : ""}
                </div>
                <div className="form_fields">
                    <label htmlFor="pwd">Password: </label>
                    <input
                        type="text"
                        name="pwd"
                        onChange={(e) => setPwd(e.target.value)}
                    />
                    {pwd.length >= 1 && pwd.length < 8 ? (
                        <p className="alert">
                            Password must be at least 8 characters
                        </p>
                    ) : ""}
                </div>
                <div className="form_fields">
                    <label htmlFor="checkPwd">Verify Password: </label>
                    <input
                        type="text"
                        name="checkPwd"
                        onChange={(e) => setCheckPwd(e.target.value)}
                    />
                    {checkPwd.length >= 1 && checkPwd !== pwd ? (
                        <p className="alert">
                            It appears your passwords do not match
                        </p>
                    ) : ""}
                </div>
            </form>

            <div className="results_wrapper">
                <p>{fName}</p>
                <p>{lName}</p>
                <p>{email}</p>
                <p>{pwd}</p>
                <p>{checkPwd}</p>
            </div>
        </div>
    );
};

export default Form;
