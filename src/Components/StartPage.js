import React from 'react';
import {useEffect, useState} from "react";
import axios from "axios";
import './Header'
import Header from "./Header";
import '../styles/startPage.css'
import {Link} from "react-router-dom";
import Footer from "./Footer";


const StartPage = () => {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        axios.get(`http://localhost:5000/`)
            .then(result => {


                setPosts(result.data.allPosts)
            })
            .catch(err => {
                console.log(err)
            })
    }, [])

    return (
        <>
            <Header />
         <section className={'posts_section'}>
            <div className="container">
                <div className="posts_main_wrapper">
                    {posts && posts.map(post =>
                        <div key={post._id} className="post_wrapper">
                            <div className="post_owner post_time">
                                <h4>{post.owner.userName}</h4>
                                <p>{post.creat_at}</p>
                            </div>
                            <h3 className={'post_title'}>Title: {post.title}</h3>
                            <p className={'posts_desc'}>Desc: {post.desc}</p>


                                <Link to={`/fullPage/${post._id}`}>See more</Link>


                        </div>
                    )}
                </div>
            </div>
         </section>


        </>


    )


};

export default StartPage;

