import React, { useEffect } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const DisplayAll = (props) => {
    //Any change that happens in create, is available here as well due to state lifted and passed down from their common parent (Main)
    const { authorList, setAuthorList } = props;
    const navigate = useNavigate();

    //On initial render of this component, this useEffect will run its request to our Server
    useEffect(() => {
        axios
            .get("http://localhost:8000/api/authors")
            .then((res) => {
                console.log(res.data);
                setAuthorList(res.data);
            })
            .catch((err) => console.log(err));
    }, []); //An empty dependency array means the useEffect is not listening for any state change.
    //It will run only on a complete render (e.g. initial render, refresh, or coming back to this component from another)

    const deleteFilter = (idFromBelow) => {
        //please take note of the different approach here in getting the id value for our route.
        //Unlike in other component's like DisplayOne, we are not passing this value in from another component,
        //In other words, there is no id to deconstuct from props! We get the value from below.
        axios
            .delete(`http://localhost:8000/api/authors/${idFromBelow}`)
            .then((res) => {
                console.log(res.data);
                //filter returns a NEW array of every that meets the return's criteria
                //Here, we want an array of every author whose _id does not match the author's _id that was clicked below.
                //This will allow us to instantly "react" to our change of state, and show the deletion in the browser.
                const newList = authorList.filter(
                    (author, index) => author._id !== idFromBelow
                );
                setAuthorList(newList);
                //could also write like this:
                //setauthorList(authorList.filter((author, index) => author._id !== idFromBelow))
            })
            .catch((err) => {
                console.log(err);
            });
    };

    return (
        <div>
            <header>Favorite Authors:</header>


            {authorList.map((author, index) => (
                <div key={index}>
                    <Link to={`/author/${author._id}`}>{author.title}</Link>

                    <br />

                    <button
                        onClick={() => navigate(`/author/edit/${author._id}`)}
                    >
                        Edit
                    </button>

                    <button onClick={() => deleteFilter(author._id)}>
                        Delete
                    </button>
                </div>
            ))}
        </div>

        
    );
};

export default DisplayAll;
