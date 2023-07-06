import React, {useEffect, useState} from 'react';
import axios from "axios";
import { useParams, useNavigate} from "react-router-dom";
import Header from "./Header";
import '../styles/GeneralPage.css'


const EditPage = () => {
    const navigate = useNavigate();
    const [title, setTitle]= useState([]);
    const [desc, setDesc] = useState([])
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
        }else if (title.length<2 || title.length>60 ){
            setErr("Title min length 2, max length 60")
        }else if(desc.length<6 || desc.length>500){
            setErr("Description min length 6, max length 500")

        }
        else{
            axios.post(`http://localhost:5000/editPost/${id}`,{
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
                <h2>Edit Content</h2>
                
                <form onSubmit={editSubmit} className="form_edit">
                    <p className='post_title'>Title:</p>
                    <input type="text" name="title" value={title} onChange={titleChange}/>
                    <br/>
                    <p className='post_title'>Description:</p>
                    <textarea name="desc" cols="40" rows="10" value={desc} onChange={descChange}></textarea>
                    <br/>
                    <button onClick={editSubmit} className='edit_delete_comment_button'>Save</button>
                </form>

                {err ? <h5 className="error">{err}</h5> : null }
        </div>
        </section>
        </>
    )
}
export default EditPage;

