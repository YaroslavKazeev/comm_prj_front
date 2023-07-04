import React from 'react';

const QuestionPage = ({ userId, error }) => {
  return (
    <div className="container">
      <div className="main_wrapper">
        <div className="question_wrapper">
          <form action={`/addNewQuestion/${userId}`} method="post">
            <input className="title_question" type="text" placeholder="Title" name="title" /><br />
            <textarea className="desc_question" name="desc" id="" cols="50" rows="10" placeholder="Description"></textarea><br />
            <button>Add question</button>
          </form>
          <p>{error}</p>
        </div>
      </div>
    </div>
  );
};

export default QuestionPage;

