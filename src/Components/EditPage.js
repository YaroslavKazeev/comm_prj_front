import React from 'react';

const EditPost = ({ post }) => {
  // Add a null check for the post object
  if (!post) {
    return null; // or return some default content if desired
  }

  return (
    <div className="question_wrapper editPost">
      <div className="edit_wrapper">
        <h3 className="postTitle">{post.title}</h3>
        <p className="postDesc">{post.desc}</p>
      </div>

      <form className="form_edit" action={`/editPost/${post._id}`} method="post">
        <input className="edit_title" type="text" name="title" defaultValue={post.title} /><br />
        <textarea className="edit_desc" name="desc" id="" cols="40" rows="10" defaultValue={post.desc}></textarea><br />
        <button className="edit_btn">Edit</button>
      </form>
    </div>
  );
};

export default EditPost;



