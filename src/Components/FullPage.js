import React from 'react';

const FullPage = ({ post, userId, comments }) => {
  return (
    <div className="container">
      <div className="main_wrapper">
        <div className="addedComment">
          <div className="postTitle">{post.title}</div>
          <div className="postDesc">{post.desc}</div>
        </div>

        {post.owner._id.toString() === userId.toString() && (
          <div className="postModify">
            <a href={`/edit_page/${post._id}`}>
              <button className="full_edit_btn">Edit</button>
            </a>
            <form action={`/delete/${post._id}`}>
              <button className="full_edit_btn">Delete</button>
            </form>
          </div>
        )}

        {userId && (
          <form action={`/addComment/${userId}/${post._id}`} method="post">
            <input type="hidden" value={post._id} name="postId" />
            <textarea name="comment" id="" cols="50" rows="10" placeholder="Comment" className="commentArea"></textarea><br />
            <button className="question_btn">Add comment</button>
          </form>
        )}

        {comments.map((comment) => {
          if (comment.fromPost && comment.fromPost._id.toString() === post._id.toString()) {
            return (
              <div key={comment._id} className="comment">
                <div className="comment_title">
                  <p>{comment.comment}</p>
                </div>
                <p className="comment_added">Added by: {comment.owner.userName}</p>

                {comment.owner._id.toString() === userId.toString() && (
                  <div>
                    <form className="hidden_form" action={`/deleteComment/${comment._id}`} method="post">
                      <input type="hidden" name="postId" value={post._id} />
                      <button className="full_edit_btn">Delete</button>
                    </form>
                  </div>
                )}
              </div>
            );
          } else {
            return null;
          }
        })}
      </div>
    </div>
  );
};

export default FullPage;

