import React, {useEffect, useState} from 'react';
import axios from "axios";
import { useParams, useNavigate, Link } from "react-router-dom";


const FullPage = () => {

    let {id} = useParams();

    useEffect(() =>{
        axios.get(`http://localhost:5000/fullPage/${id}`)
            .then(result =>{
                console.log(result)

            })
            .catch(err =>{
                console.log(err)
            })
    },[id])
    return(
        <h3>Hello</h3>
    )
}
export default FullPage;

