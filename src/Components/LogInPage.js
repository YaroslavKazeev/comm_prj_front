import React from 'react';

const LogInPage = ({ error }) => {
  return (
    <div className="container">
      <div className="form_wrapper">
        <div className="logInForm">
          <form action="/login" method="post" className="form_login">
            <label htmlFor="email">Email</label>
            <input className="login_input" type="email" name="email" id="email" placeholder="Enter your email" />
            <br />
            <label htmlFor="password">Password</label>
            <input className="login_input" type="password" name="password" id="password" placeholder="Enter your password" />
            <br />
            <button type="submit" value="Login" className="logIn-btn">Log In</button>
          </form>
        </div>
      </div>

      <div>
        <p className="errors">{error}</p>
      </div>
    </div>
  );
};

export default LogInPage;
