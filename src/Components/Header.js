import React from 'react';

const Header = ({ user, userId }) => {
  return (
    <div className="container_header">
      <div className="header">
        <div className="logo">
          <a href="/">
            <img src="https://matrixmaster.info/wp-content/uploads/2021/06/cropped-logo-mm-white.png" alt="logo" className="logo" />
          </a>
        </div>
        {user && <h4 className="header_welcome">Welcome {user}</h4>}
        <div className="auth">
          {!userId && (
            <>
              <a className="login_btn" href="/loginPage">Log In</a>
              <a className="sign_btn" href="/signupPage">Sign Up</a>
            </>
          )}
          {userId && (
            <>
              <a className="sign_btn" href="/logout">Log Out</a>
              <a className="sign_btn" href="/">Home</a>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
