import React from "react";
import classes from './Users.module.css';
import Paginator from "../common/paginator/Paginator";
import User from "./User";

let Users = ({ pageSize, totalUsersCount, currentPage, onPageChanged, users, ...props }) => {
    return (
        <div className={classes.users}>

            <Paginator currentPage={currentPage} onPageChanged={onPageChanged} pageSize={pageSize} totalItemsCount={totalUsersCount} />
            {
                users.map(u => <User key={u.id}
                                    user={u}
                                    followingInProgress={props.followingInProgress}
                                    unfollow={props.unfollow}
                                    follow={props.follow} />)
            }
        </div>)
}
export default Users;