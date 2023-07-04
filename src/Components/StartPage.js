import React from 'react';
import {useEffect, useState} from "react";
import axios from "axios";

const StartPage = () => {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        axios.get(`http://localhost:5000/`)
            .then(result => {
                console.log(result)

                setPosts(result.data.allPosts)
            })
            .catch(err => {
                console.log(err)
            })
    }, [])

    return (
        <section className={'posts_section'}>
            <div className="container">
                <div className="posts_main_wrapper">
                    {posts && posts.map(post =>
                        <div key={post._id} className="post_wrapper">
                            <h3 className={'post_title'}>Title: {post.title}</h3>
                            <p className={'posts_desc'}>Desc: {post.desc}</p>
                            <div className="poast_owner post_time">
                                <p>{post.owner.userName}</p>
                                <p>{post.creat_at}</p>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </section>


    )


};

export default StartPage;

