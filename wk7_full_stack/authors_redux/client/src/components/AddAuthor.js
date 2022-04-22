import React, { useState } from "react";
import axios from "axios";

const AddAuthor = (props) => {
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");
    const { authorList, setAuthorList } = props;

    const submitHandler = (e) => {
        e.preventDefault();



        axios
            .post("http://localhost:8000/api/authors", {
                title,
                price,
                description,
            })
            .then((res) => {
                console.log(res);
                console.log(res.data);
                //setState back to "", clearing out form on submission success
                setAuthorList([...authorList,res.data])
                setTitle("");
                setPrice("");
                setDescription("");
            })
            .catch((err) => {
                console.log(err);
            });
    };

    return (
        <div>
            <header>Headline Here</header>

            <form onSubmit={submitHandler}>
                <div className="form-fields">
                    <label>Title</label>
                    <input
                        onChange={(e) => setTitle(e.target.value)}
                        //We set our value to title here mainly to help us clear out the inputs on submission
                        value={title}
                        name="title"
                        type="text"
                    />
                </div>

                <br />

                <div className="form-fields">
                    <label>Price</label>
                    <input
                        onChange={(e) => setPrice(e.target.value)}
                        value={price}
                        name="price"
                        type="number"
                    />
                </div>

                <br />

                <div className="form-fields">
                    <label>Description</label>
                    <input
                        onChange={(e) => setDescription(e.target.value)}
                        value={description}
                        name="description"
                        type="text"
                    />
                </div>

                <br />
                {/* Could be a button element */}
                <input className="submit-input" type="submit" value="Create" />
            </form>
        </div>
    );
};

export default AddAuthor;
