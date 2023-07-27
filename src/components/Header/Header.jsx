import React from "react";
import { NavLink } from "react-router-dom";
import classes from './Header.module.css';

const Header = (props) => {
    return (
        <header className={classes.header}>
            <img className={classes.logo} src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/LEGO_logo.svg/2048px-LEGO_logo.svg.png" alt="" />

            <div className={classes.loginBlock}>
                {props.isAuth
                    ? <div>{props.login} - <button onClick={props.logout}>Log out</button></div>
                    : <NavLink to={'/login'}>Login</NavLink>}

            </div>
        </header>
    )
}

export default Header;