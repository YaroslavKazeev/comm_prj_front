import React, { useEffect, useState } from 'react';
import './App.css';
import Axios from 'axios';

import Header from './Components/Header';
import EditPost from './Components/EditPost';
import FullPage from './Components/FullPage';
import LogInPage from './Components/LogInPage';
import QuestionPage from './Components/QuestionPage';
import SignUpPage from './Components/SignUpPage';
import Footer from './Components/Footer';
import StartPage from './Components/StartPage';


function App() {
  const [user, setUser] = useState(null);
  const [userId, setUserId] = useState(null);
  const [posts, setPosts] = useState([]);
  const [post, setPost] = useState(null);
  const [comments, setComments] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    // Fetch user data
    Axios.get('/api/user')
      .then(response => {
        setUser(response.data.user);
        setUserId(response.data.userId);
      })
      .catch(error => {
        setError(error.response.data.message);
      });

    // Fetch posts data
    Axios.get('/api/posts')
      .then(response => {
        setPosts(response.data.posts);
      })
      .catch(error => {
        setError(error.response.data.message);
      });
  }, []);

  const handleLogin = (email, password) => {
    const userData = { email, password };
    Axios.post('/api/login', userData)
      .then(response => {
        setUser(response.data.user);
        setUserId(response.data.userId);
        setError('');
      })
      .catch(error => {
        setError(error.response.data.message);
      });
  };

  const handleSignup = (email, username, password) => {
    const userData = { email, username, password };
    Axios.post('/api/signup', userData)
      .then(response => {
        setUser(response.data.user);
        setUserId(response.data.userId);
        setError('');
      })
      .catch(error => {
        setError(error.response.data.message);
      });
  };

  const handleLogout = () => {
    Axios.get('/api/logout')
      .then(() => {
        setUser(null);
        setUserId(null);
        setError('');
      })
      .catch(error => {
        setError(error.response.data.message);
      });
  };

  const handleAddQuestion = (title, desc) => {
    const postData = { title, desc };
    Axios.post(`/api/addNewQuestion/${userId}`, postData)
      .then(() => {
        setError('');
        // Fetch updated posts data
        Axios.get('/api/posts')
          .then(response => {
            setPosts(response.data.posts);
          })
          .catch(error => {
            setError(error.response.data.message);
          });
      })
      .catch(error => {
        setError(error.response.data.message);
      });
  };

  const handleAddComment = (postId, comment) => {
    const commentData = { postId, comment };
    Axios.post(`/api/addComment/${userId}/${postId}`, commentData)
      .then(() => {
        setError('');
        // Fetch updated comments data
        Axios.get(`/api/comments/${postId}`)
          .then(response => {
            setComments(response.data.comments);
          })
          .catch(error => {
            setError(error.response.data.message);
          });
      })
      .catch(error => {
        setError(error.response.data.message);
      });
  };

  const handleEditPost = (postId, title, desc) => {
    const postData = { title, desc };
    Axios.post(`/api/editPost/${postId}`, postData)
      .then(() => {
        setError('');
        // Fetch updated post data
        Axios.get(`/api/post/${postId}`)
          .then(response => {
            setPost(response.data.post);
          })
          .catch(error => {
            setError(error.response.data.message);
          });
      })
      .catch(error => {
        setError(error.response.data.message);
      });
  };

  const handleDeletePost = postId => {
    Axios.post(`/api/delete/${postId}`)
      .then(() => {
        setError('');
        // Fetch updated posts data
        Axios.get('/api/posts')
          .then(response => {
            setPosts(response.data.posts);
          })
          .catch(error => {
            setError(error.response.data.message);
          });
      })
      .catch(error => {
        setError(error.response.data.message);
      });
  };

  const handleDeleteComment = (postId, commentId) => {
    Axios.post(`/api/deleteComment/${commentId}`)
      .then(() => {
        setError('');
        // Fetch updated comments data
        Axios.get(`/api/comments/${postId}`)
          .then(response => {
            setComments(response.data.comments);
          })
          .catch(error => {
            setError(error.response.data.message);
          });
      })
      .catch(error => {
        setError(error.response.data.message);
      });
  };

  const handleFetchComments = postId => {
    Axios.get(`/api/comments/${postId}`)
      .then(response => {
        setComments(response.data.comments);
        setError('');
      })
      .catch(error => {
        setError(error.response.data.message);
      });
  };

  const handleFetchPost = postId => {
    Axios.get(`/api/post/${postId}`)
      .then(response => {
        setPost(response.data.post);
        setError('');
      })
      .catch(error => {
        setError(error.response.data.message);
      });
  };

  return (
    <div className="App">
      <Header user={user} userId={userId} onLogout={handleLogout} />
      <StartPage posts={posts} userId={userId} />
      <LogInPage onLogin={handleLogin} error={error} />
      <SignUpPage onSignup={handleSignup} error={error} />
      <QuestionPage userId={userId} onAddQuestion={handleAddQuestion} error={error} />
      <FullPage post={post} userId={userId} comments={comments} onDeletePost={handleDeletePost} onAddComment={handleAddComment} onDeleteComment={handleDeleteComment} onFetchComments={handleFetchComments} onFetchPost={handleFetchPost} error={error} />
      <EditPost post={post} onEditPost={handleEditPost} error={error} />
      <Footer />
    </div>
  );
}

export default App;





/*
function App() {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path="/" element={<StartPage />} />
          <Route path="/edit_page/:id" element={<EditPage />} />
          <Route path="/fullPage/:id" element={<FullPage />} />
          <Route path="/login" element={<LogInPage />} />
          <Route path="/questionPage" element={<QuestionPage />} />
          <Route path="/signup" element={<SignUpPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;*/


