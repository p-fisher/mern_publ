import React, { useEffect } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const DisplayAll = (props) => {
    //Any change that happens in create, is available here as well due to state lifted and passed down from their common parent (Main)
    const { productList, setProductList } = props;
    const navigate = useNavigate();

    //On initial render of this component, this useEffect will run its request to our Server
    useEffect(() => {
        axios
            .get("http://localhost:8000/api/products")
            .then((res) => {
                console.log(res.data);
                setProductList(res.data);
            })
            .catch((err) => console.log(err));
    }, []); //An empty dependency array means the useEffect is not listening for any state change.
    //It will run only on a complete render (e.g. initial render, refresh, or coming back to this component from another)

    const deleteFilter = (idFromBelow) => {
        //please take note of the different approach here in getting the id value for our route.
        //Unlike in other component's like DisplayOne, we are not passing this value in from another component,
        //In other words, there is no id to deconstuct from props! We get the value from below.
        axios
            .delete(`http://localhost:8000/api/products/${idFromBelow}`)
            .then((res) => {
                console.log(res.data);
                //filter returns a NEW array of every that meets the return's criteria
                //Here, we want an array of every product whose _id does not match the product's _id that was clicked below.
                //This will allow us to instantly "react" to our change of state, and show the deletion in the browser.
                const newList = productList.filter(
                    (product, index) => product._id !== idFromBelow
                );
                setProductList(newList);
                //could also write like this:
                //setProductList(productList.filter((product, index) => product._id !== idFromBelow))
            })
            .catch((err) => {
                console.log(err);
            });
    };

    return (
        <div className="display_container">
            <header>All Products:</header>
            {productList.map((product, index) => (
                <div key={index}>
                    {/* This is where :id in our app.js path gets its value... We can access this info via props */}
                    {/* Note: when styling, the DOM read "Link" as an a tag */}
                    <Link to={`/product/${product._id}`}>{product.title}</Link>

                    <br />

                    <button
                        onClick={() => navigate(`/product/edit/${product._id}`)}
                    >
                        Edit
                    </button>

                    <button onClick={() => deleteFilter(product._id)}>
                        Delete
                    </button>
                </div>
            ))}
        </div>
    );
};

export default DisplayAll;
