import React, {useEffect, useState} from 'react';
import axios from "axios";
import { useParams, useNavigate, Link } from "react-router-dom";
import Header from "./Header";
import '../styles/fullPage.css'


const FullPage = () => {
    const [title, setTitle]= useState([]);
    const [desc, setDesc] = useState([])
    const [owner, setOwner]= useState([])
    const [time, setTime] = useState([])

    let {id} = useParams();

    useEffect(() =>{
        axios.get(`http://localhost:5000/fullPage/${id}`)
            .then(result =>{
                console.log(result)

                let res= result.data.posts
                console.log(res)
                setTitle(res.title)
                setDesc(res.desc)
                setTime(res.creat_at)
            })
            .catch(err =>{
                console.log(err)
            })
    },[id])
    console.log(id);
    return(
        <>            
        <Header />
        <section className={'post_section'}>
            <div className="container">
                <div className="post_wrapper">
                    <h3>Title :{title}</h3>
                    <hr/>
                    <p>Desc : {desc}</p>
                    <p>Time: {time}</p>
                </div>
                <Link to={`/edit_page/${id}`}>Edit</Link>
                <button class="full_edit_btn">Delete</button>
                <p>Comments : </p>
            </div>
        </section>
        </>
    )
}
export default FullPage;

