
import React, {useState} from "react";
import  {useNavigate} from "react-router-dom";
import axios from "axios";
import '../styles/loginPage.css'

import Cookie from 'js-cookie';
import Header from "./Header";
const LogInPage = () => {
    const navigate = useNavigate();

    const [userEmail, setUserEmail] = useState('');
    const [userPassword, setUserPassword] = useState('');
    const [err, setErr] = useState('')

    const userEmailChange = (e) =>{
        setErr('')
        setUserEmail(e.target.value)
    };
    const userPasswordChange = (e) =>{
        setErr('')
        setUserPassword(e.target.value)
    };

    const loginSubmit = (e) => {
        e.preventDefault()
        setErr('')
        if (userEmail === '' || userPassword === '') {
            setErr("Email is required")
        } else if (userPassword === '') {
            setErr("Password is required")
        } else {
            axios.post(`http://localhost:5000/login`, {
                email: userEmail,
                password: userPassword
            })
                .then(res => {
                    console.log(res)

                    if(res.data){
                       localStorage.setItem('userInfo', res.data.user);
                       Cookie.set('userToken', res.data.token)
                       navigate('/')
                   }else {
                       setErr(res.data.error)
                   }

                })
                .catch(err=>{
                    console.log(err)

                })
        }


    }

    return(
        <>
            <Header />
           <section className={'login_section'}>
          <div className="container">
              <div className="login_wrapper">
                  <form onSubmit={loginSubmit} className="login_form">
                      <h2>Log In</h2>
                      <input type="email" name="email" placeholder="Email" onChange={userEmailChange}/>
                      <input type="password" name="password" placeholder="Password" onChange={userPasswordChange} autoComplete="off" />
                      < button onClick={loginSubmit} className="button">Login</button>
                      {
                          err ? <h5 className="error">{err}</h5> : null
                      }
                  </form>
              </div>
          </div>
         
      </section>
        </>

    )

};

export default LogInPage;
