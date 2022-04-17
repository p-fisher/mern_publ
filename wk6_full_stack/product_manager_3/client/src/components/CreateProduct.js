import React, { useState } from "react";
import axios from "axios";

const CreateProduct = (props) => {
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");
    const { productList, setProductList } = props;

    const submitHandler = (e) => {
        e.preventDefault();

        axios
            .post("http://localhost:8000/api/products", {
                title,
                price,
                description,
            })
            .then((res) => {
                console.log(res);
                console.log(res.data);
                //setState back to "", clearing out form on submission success
                setProductList([...productList, res.data]);
                setTitle("");
                setPrice("");
                setDescription("");
            })
            .catch((err) => {
                console.log(err);
            });
    };

    return (
            <div className="create_container">
                <header>Product Manager</header>

                <form onSubmit={submitHandler}>
                    <div className="form_fields">
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

                    <div className="form_fields">
                        <label>Price</label>
                        <input
                            onChange={(e) => setPrice(e.target.value)}
                            value={price}
                            name="price"
                            type="number"
                        />
                    </div>

                    <br />

                    <div className="form_fields">
                        <label>Description</label>
                        <input
                            onChange={(e) => setDescription(e.target.value)}
                            value={description}
                            name="description"
                            type="text"
                        />
                    </div>

                    <div style={{width: "87%", marginTop:"15px", textAlign: "right"}}>
                    <button class="btn_create">Create</button>
                    {/* <input
                        className="submit_input"
                        type="submit"
                        value="Create"
                    /> */}
                    </div>
                </form>
            </div>
    );
};

export default CreateProduct;
