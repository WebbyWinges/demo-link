import React from "react";
import { connect } from "react-redux";
import { unfollow } from "../../redux/users-reducer";
import { follow } from "../../redux/users-reducer";
import { requestUsers} from "../../redux/users-reducer";
import Users from "./Users";
import Preloader from "../common/preloader/preloader";
import { compose } from "redux";
import { getCurrentPage, getFollowingInProgress, getIfFetching, getPageSize, getTotalUsersCount, getUsers} from "../../redux/users-selectors";

class UsersContainer extends React.Component {

    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize);
    }

    onPageChanged = (pageNumber) => {
        this.props.getUsers(pageNumber, this.props.pageSize);
    }

    render() {

        return <>
            {this.props.ifFetching ? <Preloader /> : null}
            <Users onPageChanged={this.onPageChanged}
                totalUsersCount={this.props.totalUsersCount}
                pageSize={this.props.pageSize}
                currentPage={this.props.currentPage}
                users={this.props.users}
                unfollow={this.props.unfollow}
                follow={this.props.follow}
                followingInProgress={this.props.followingInProgress}/>
        </>
    }
}

let mapStateToProps = (state) => {
    return {
        users: getUsers(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        ifFetching: getIfFetching(state),
        followingInProgress: getFollowingInProgress(state),
    }
}
export default compose(
    connect(mapStateToProps,{follow, unfollow, getUsers: requestUsers}))(UsersContainer)
