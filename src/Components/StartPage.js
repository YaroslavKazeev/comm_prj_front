import React from 'react';

const StartPage = ({ posts, userId }) => {
  return (
    <div className="container">
<p>Hello World</p>
    </div>
  );
};

export default StartPage;

/* <div className="main_wrapper_start">
<div className="main_title">
  <i className="fa-solid fa-user"></i>
  <h3 className="matrix_title">Matrix Master Community</h3>
</div>
<div>
  <a className="question_btn" href="/questionPage">Add Question</a>
</div>

<div className="posts_wrapper">
  {posts.map((post, i) => (
    <div className="allPosts" key={i}>
      <div className="title_desc">
        <h3 className="post_title">{post.title}</h3>
        <p className="post_desc">{post.desc.slice(0, 50)}</p>
      </div>
      <h4 className="date">{post.createdAt}</h4>
      <p className="addedBy">Added by: {post.owner.userName}</p>
      {post.owner._id.toString() === userId.toString() && (
        <div className="button_fullPage">
          <div className="edit-delete-btn">
            <a href={`/edit_page/${post._id}`}>
              <button className="edit_btn">Edit</button>
            </a>
            <form action={`/delete/${post._id}`}>
              <button className="edit_btn">Delete</button>
            </form>
          </div>
        </div>
      )}
      <a className="see_btn" href={`/fullPage/${post._id}`}>See more</a>
    </div>
  ))}
</div>
</div> */