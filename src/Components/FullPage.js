import React, {useEffect, useState} from 'react';
import axios from "axios";
import { useParams, useNavigate, Link } from "react-router-dom";
import Header from "./Header";
import '../styles/fullPage.css'
import DeleteComment from "./DeleteComment";


const FullPage = () => {
    const [title, setTitle]= useState([]);
    const [desc, setDesc] = useState([])
    const [owner, setOwner]= useState([])
    const [time, setTime] = useState([])
    const [newComment, setNewComment] = useState('');
    const [err, setErr] = useState('');
    const [comments,setComments]= useState([])

    const userId = localStorage.getItem("userId")
    const userName = localStorage.getItem('userName')



    let {id} = useParams();

    useEffect(() =>{
        axios.get(`http://localhost:5000/fullPage/${id}`)
            .then(result =>{



                let res= result.data.posts
                let comments = result.data.comments



                setTitle(res.title)
                setDesc(res.desc)
                setTime(res.creat_at)
                setComments(comments)

            })
            .catch(err =>{
                console.log(err)
            })
    },[id])


    const commentChange = (e) =>{
        setErr('')
        setNewComment(e.target.value)
    }
    const commentSubmit = (e) =>{
        e.preventDefault()
        setErr('')
        if (newComment === ''){
            setErr("Field is required")
        } else{
            axios.post(`http://localhost:5000/addComment/${id}`,{
                txt: newComment,
                user: userId,
                question: id,
                userName : userName
            })
                .then(() =>{
                    window.location.reload()
                })
                .catch(err =>{
                    console.log(err)
                })
        }
    }

    return(
        <>            
        <Header />
        <section className={'post_section'}>
            <div className="container">
                <div className="post_wrapper">
                    <h3 className={'post_title'}>Title :{title}</h3>
                    <hr/>
                    <p className={'post_desc'}>Desc : {desc}</p>
                    <p>Time: {time}</p>
                </div>
                <Link to={`/edit_page/${id}`}>Edit</Link>
                <button className="full_edit_btn">Delete</button>

            </div>
        </section>
        <section className={'addComment_section'}>
            <div className="container">
                <form  onSubmit={commentSubmit}>
                    <input name="txt" onChange={commentChange}></input>
                    <button className="submit" onClick={commentSubmit}>Comment</button>
                    {
                        err ? <h5 className="error">{err}</h5> : null
                    }
                </form>
            </div>
        </section>
            <section>
                <div className="container">
                    {comments &&
                        comments.map((comment) =>
                            comment.fromPost._id === id ? (
                                <div key={comment._id} className="comment_wrapper">
                                    <h3>{comment.comment}</h3>
                                    <p>{comment.owner.userName}</p>
                                    <p>{comment.created_at}</p>
                                    <DeleteComment id={comment._id} />
                                    <hr />
                                </div>
                            ) : null
                        )}
                </div>
            </section>

        </>
    )
}
export default FullPage;

