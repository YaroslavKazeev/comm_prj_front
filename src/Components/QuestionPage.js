import React, { useState } from 'react';
import axios from 'axios';
import { useParams, useNavigate} from 'react-router-dom';


const QuestionPage = ({ userId, error }) => {
  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');
  const navigate = useNavigate();
  const { userId: paramUserId } = useParams();

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleDescChange = (e) => {
    setDesc(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post(`/addNewQuestion/${paramUserId}`, { title, desc })
      .then((response) => {
        // Handle successful response here
        navigate('/success'); // Example: navigate to success page
      })
      .catch((error) => {
        // Handle error here
        console.error(error);
      });
  };

  return (
    <div className="container">
      <div className="main_wrapper">
        <div className="question_wrapper">
          <form onSubmit={handleSubmit}>
            <input
              className="title_question"
              type="text"
              placeholder="Title"
              name="title"
              value={title}
              onChange={handleTitleChange}
            />
            <br />
            <textarea
              className="desc_question"
              name="desc"
              cols="50"
              rows="10"
              placeholder="Description"
              value={desc}
              onChange={handleDescChange}
            ></textarea>
            <br />
            <button type="submit">Add question</button>
          </form>
          <p>{error}</p>
        </div>
      </div>
    </div>
  );
};

export default QuestionPage;
