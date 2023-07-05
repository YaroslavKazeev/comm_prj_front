import React, {useEffect, useState} from 'react';
import axios from "axios";
import { useParams, useNavigate} from "react-router-dom";
import Header from "./Header";
import '../styles/fullPage.css'


const EditPage = () => {
    const navigate = useNavigate();
    const [title, setTitle]= useState([]);
    const [desc, setDesc] = useState([])
    const [time, setTime] = useState([])
    const [err, setErr] = useState('')

    let {id} = useParams();

    const titleChange = (e) =>{
        setErr('')
        setTitle(e.target.value)
    }
    const descChange = (e) =>{
        setErr('')
        setDesc(e.target.value)
    }
    const editSubmit = (e) =>{
        e.preventDefault()
        setErr('')
        if (title === '' || desc === ''){
            setErr("Title and Description should not be empty")
        }else if (title.length<2 || title.length>20 ){
            setErr("Title min length 2, max length 20")
        }else if(desc.length<6 || desc.length>200){
            setErr("Description min length 6, max length 200")

        }
        else{
            axios.post(`/editPost/${id}`,{
                title: title,
                desc: desc
            })
                .then(
                        navigate(`/fullPage/${id}`)
                )
                .catch(err =>{
                    console.log(err)
                })
        }
    }




    useEffect(() =>{
        axios.get(`http://localhost:5000/edit_page/${id}`)
            .then(result =>{
                let res= result.data.posts
                setTitle(res.title)
                setDesc(res.desc)
                setTime(res.creat_at)

            })
            .catch(err =>{
                console.log(err)
            })
    },[id])
    return(
        <>
        <Header />
        <section className={'post_section'}>
            <div className="container">
                <div className="post_wrapper">
                    <h2>Content Editing</h2>
                    <h3>Title :{title}</h3>
                    <hr/>
                    <p>Desc : {desc}</p>
                    <p>Time: {time}</p>
                </div>

                <form onSubmit={editSubmit} className="form_edit">
                    <input type="text" name="title" placeholder={title} onChange={titleChange}/>
                    <br/>
                    <textarea name="desc" id="" cols="40" rows="10" placeholder={desc} onChange={descChange}></textarea>
                    <br/>
                    <button onClick={editSubmit}>Save</button>
                </form>

                {err ? <h5 className="error">{err}</h5> : null }
            </div>
        </section>
        </>
    )
}
export default EditPage;

