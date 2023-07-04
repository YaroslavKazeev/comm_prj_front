import React from 'react'
import {Link} from "react-router-dom";
import '../styles/header.css'
import '../styles/styles.css'

export default function Header() {
    return (
        <section className={'header_section'}>
            <div className="header_wrapper">
                <div className="header_logo">
                   <Link to={'/'}>LOGO</Link>
                </div>
                <div className="header_auth">
                    <Link to={'/signup'}> SignUp </Link>
                    <Link to={'/login'}> Log in </Link>
                    <Link to={'/signup'}> Log out </Link>

                </div>

            </div>
        </section>
    )
}
