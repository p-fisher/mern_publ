import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const EditAuthor = (props) => {
    // const { id } = useParams();
    const { id } = props;
    const [name, setName] = useState("");
    const [errors, setErrors] = useState({});
    const navigate = useNavigate();

    useEffect(() => {
        axios
            .get(`http://localhost:8000/api/authors/${id}`)
            .then((res) => {
                console.log(res.data);
                setName(res.data.name);
            })
            .catch((err) => {
                console.log(err);
                navigate("/error");
            });
    }, [id]);

    const submitHandler = (e) => {
        e.preventDefault();

        const newAuthorData = {
            name,
        };
        axios
            .put(`http://localhost:8000/api/authors/${id}`, newAuthorData)
            .then((res) => {
                console.log(res);
                console.log(res.data);
                navigate("/");
            })
            .catch((err) => {
                console.log(err);
                setErrors(err.response.data.errors);
            });
    };

    return (
        <div>
            <header>
                <h1>Edit this Author:</h1>
                {/* UI link to "/" */}
                <Link to={"/"}>Home</Link>
            </header>
            <form onSubmit={submitHandler}>
                <label>Name:</label>
                {/* Using the value HTMl attribute allows us to "PREPOPULATE" this input */}
                <input
                    onChange={(e) => setName(e.target.value)}
                    name="name"
                    value={name}
                />
                {/* If error.name (author) exists, render error message. If not, render null */}
                {errors.name ? (
                    <span>{errors.name.message}</span>
                ) : null}
                <button>Submit</button>
                {/* If this button is clicked navigate to "/" route */}
                <button onClick={(e) => navigate("/")}>Cancel</button>
            </form>
        </div>
    );
};

export default EditAuthor;
