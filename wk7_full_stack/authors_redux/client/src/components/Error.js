import React, {useState, useEffect} from 'react';
import {Link} from "react-router-dom";


const Error = (props)=>{


    
    return(
        <div>
            <p>I was unable to find the author. Would you like to add one to the database?</p>
            <Link to={"/new"}>Create an Author</Link>
        </div>
    )
}

export default Error;