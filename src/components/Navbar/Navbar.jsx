import React from "react";
import { NavLink } from "react-router-dom";
import classes from './Navbar.module.css';
import Friends from "./Friends/Friends";


const NavBar = (props) => {
    return (
            <nav className={classes.nav}>
                    <div className={classes.item}>
                        <NavLink to="/profile" className = { navData => navData.isActive ? classes.activeLink : classes.item}>Profile</NavLink>
                    </div>
                    <div className={classes.item}>
                        <NavLink to="/dialogs" className = { navData => navData.isActive ? classes.activeLink : classes.item}>Messages</NavLink>
                    </div>
                    <div className={classes.item}>
                        <NavLink to="/news" className = { navData => navData.isActive ? classes.activeLink : classes.item}>News</NavLink>
                    </div>
                    <div className={classes.item}>
                        <NavLink to="/music" className = { navData => navData.isActive ? classes.activeLink : classes.item}>Music</NavLink>
                    </div>
                    <div className={classes.item}>
                        <NavLink to="/settings" className = { navData => navData.isActive ? classes.activeLink : classes.item}>Settings</NavLink>
                    </div>
            
            <div className={classes.item}>
                    <NavLink to="/users" className = { navData => navData.isActive ? classes.activeLink : classes.item}>Friends</NavLink>
                    <Friends sidebar={props.sidebar} follow = {props.follow}/>
            </div>
            </nav>
    )
}
export default NavBar;