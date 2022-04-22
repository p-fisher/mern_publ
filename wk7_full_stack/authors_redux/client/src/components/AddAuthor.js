import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const AddAuthor = (props) => {
    const [errors, setErrors] = useState({});
    const [name, setName] = useState("");

    const navigate = useNavigate();

    const submitHandler = (e) => {
        e.preventDefault();

        axios
            .post("http://localhost:8000/api/authors", {
                name,
            })
            .then((res) => {
                console.log(res);
                console.log(res.data);
                navigate("/");
                //setState back to "", clearing out form on submission success
                // setAuthorList([...authorList,res.data])
                // setTitle("");
                // setPrice("");
                // setDescription("");
            })
            .catch((err) => {
                console.log(err);
                setErrors(err.response.data.errors);
            });
    };

    return (
        <div>
            <form onSubmit={submitHandler}>
            {/* {errors.map((err, index) => <p key={index}>{err}</p>)} */}
                <header>
                    <h1>Favorite Authors</h1>
                    <Link to={"/"}>Home</Link>
                </header>
                <label>Name:</label>
                {/* check component - in browser should change with each letter +/-  */}
                <input
                    onChange={(e) => setName(e.target.value)}
                    name="name"
                    value={name}
                />
                {/* Check if errors.name exists. If it does, put error message in span tag. If errors.name does not exist reutrn null */}
                {errors.name ? <span>{errors.name.message}</span> : null}
                <button>Submit</button>
                {/* When this button is clicked, navigate back to "/" route */}
                <button onClick={(e) => navigate("/")}>Cancel</button>
            </form>
        </div>
    );
};

export default AddAuthor;
