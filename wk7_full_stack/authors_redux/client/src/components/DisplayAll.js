import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import "../App.css";

// const DisplayAll = (props) => {
//     const { authorList, setAuthorList } = props;
//     const navigate = useNavigate();

const DisplayAll = (props) => {
    const [authorList, setAuthorList] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        axios
            .get("http://localhost:8000/api/authors")
            .then((res) => {
                console.log(res);
                console.log(res.data);
                setAuthorList(res.data);
            })
            .catch((err) => console.log(err));
    }, []);

    const deleteFilter = (idFromBelow) => {
        axios
            .delete(`http://localhost:8000/api/authors/${idFromBelow}`)
            .then((res) => {
                console.log(res.data);
                setAuthorList(
                    authorList.filter((author) => author._id !== idFromBelow)
                );
            })
            // const newList = authorList.filter(
            //     (author, index) => author._id !== idFromBelow
            // );
            // setAuthorList(newList);
            // })
            .catch((err) => {
                console.log(err);
            });
    };

    return (
        <div>
            <h1>Favorite Authors</h1>

            <div>
                <Link to={"/new"}>Add an Author</Link>
                <p>We have quotes by:</p>
            </div>
            <table style={{ margin: "auto", border: "1px solid black" }}>
                <thead style={{ backgroundColor: "lightgray", color: "white" }}>
                    <tr>
                        <th>Author</th>
                        <th>Action Available</th>
                    </tr>
                </thead>
                <tbody>
                    {authorList
                        ? // iterate authorList
                        authorList.map((author, index) => (
                            <tr key={index}>
                                <td style={{ textAlign: "left" }}>
                                    {author.name}
                                </td>
                                <td>
                                    <button
                                        className="edit-button-style"
                                        onClick={() => {
                                            navigate(`/edit/${author._id}`);
                                        }}
                                    >
                                        Edit
                                    </button>
                                    <button
                                        className="delete-button-style"
                                        onClick={(e) =>
                                            deleteFilter(author._id)
                                        }
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))
                        : null}
                </tbody>
            </table>
        </div>
    );
};

export default DisplayAll;
