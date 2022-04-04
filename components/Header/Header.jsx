import React from "react";
import classes from './Header.module.css'
import {NavLink} from "react-router-dom";

const Header = (props) => {
    return (
        <header className={classes.header}>
            <img
                src="https://www.freepatternsarea.com/wp-content/uploads/2017/08/batman-logo-symbol-signal-black-silhouette.png"
                alt=""/>
            <div className={classes.loginBlock}>
                { props.isAuth
                ? <div>{props.login} - <button onClick={props.logout}>Log out</button></div>
                : <NavLink to={'/login'}>Login</NavLink> }

            </div>
        </header>
    )
}

export default Header