import React, {useEffect, useState} from 'react'
import axios from "axios";
import Header from "./Header";
import '../styles/signupPage.css'


export default function SignUpPage() {
    const [userName, setUserName] = useState();
    const [userEmail, setUserEmail] = useState();
    const [userPassword, setUserPassword] = useState();
    const [err, setErr] = useState('')


    const userEmailChange = (e) =>{
        setErr('')
        setUserEmail(e.target.value)
    }
    const userPasswordChange = (e) =>{
        setErr('')
        setUserPassword(e.target.value)
    }
    const userNameChange = (e) =>{
        setErr('')
        setUserName(e.target.value)
    }
    const signUpSubmit = (e) =>{
        e.preventDefault()
        setErr('')
        if (userName === '' || userEmail === '' || userPassword === ''){
            setErr("Email and password are required")
        } else{
            axios.post(`http://localhost:5000/signup`,{
                userName: userName,
                email: userEmail,
                password: userPassword
            })


                .catch(err =>{
                    console.log(err)
                })
        }
    }


    return (
        <>
         <Header />
        <section className={'signup_section'}>
            <div className="container">
                <div className="signup_main_wrapper">
                    <form onSubmit={signUpSubmit} className="signup_form">
                        <h2>Sign Up</h2>
                        <input type="text" name="userName" placeholder="Username" onChange={userNameChange}/>
                        <input type="email" name="email" placeholder="Email" onChange={userEmailChange}/>
                        <input type="password" name="password" placeholder="Password" onChange={userPasswordChange} autoComplete="off" />
                        < button onClick={signUpSubmit} className="button-login">Sign Up</button>
                    </form>
                    {
                        err ? <h5 className="error">{err}</h5> : null
                    }
                </div>
            </div>

        </section>
        </>
    )
}

