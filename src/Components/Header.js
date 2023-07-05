import React from 'react'
import {Link} from "react-router-dom";
import '../styles/header.css'
import '../styles/styles.css'
import LogOut from "./LogOut";
import '../styles/all.css'

export default function Header() {
    return (
        <section className={'header_section'}>
            <div className="header_wrapper">
                <div className="header_logo">
                   <Link  className={'logo_header'} to={'/'}> LOGO</Link>

                </div>
                <div className="header_auth">
                    <Link className={'auth_link'} to={'/login'}> <i className="fa-solid fa-right-to-bracket fa-xl"></i> </Link>
                    <Link  className={'auth_link'} to={'/signup'}> <i className="fa-sharp fa-solid fa-user-plus fa-xl"></i> </Link>

                    <LogOut />

                </div>

            </div>
        </section>
    )
}
