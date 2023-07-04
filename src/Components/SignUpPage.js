import React from 'react';

const SignUpPage = ({ error }) => {
  return (
    <div className="container">
      <div className="form_wrapper">
        <div className="logInForm">
          <form className="loginForm" action="/signup" method="post">
            <label htmlFor="email">Email</label><br />
            <input className="login_input" type="email" name="email" placeholder="Email" /><br />
            <label htmlFor="userName"> User Name</label><br />
            <input className="login_input" type="text" name="userName" placeholder="User name" /><br />
            <label htmlFor="password">Password</label><br />
            <input className="login_input" type="password" placeholder="Password" name="password" /><br />
            <button type="submit" value="Login" className="logIn-btn">Sign Up</button>
          </form>
        </div>
      </div>

      <div>
        <p className="errors">{error}</p>
      </div>
    </div>
  );
};

export default SignUpPage;

