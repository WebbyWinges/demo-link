import React from "react";
import Profile from "./Profile";
import { connect } from "react-redux";
import { getUserProfile, getStatus,updateStatus } from "../../redux/profile-reducer";
import withRouter from "../../WithRouter";
import { compose } from "redux";

class ProfileContainer extends React.Component {
    
    componentDidMount() {
        let userId = this.props.router.params.userId;
        if (!userId) {
            userId=this.props.authorizedUserId;
            if (!userId) {
                this.props.router.navigate('/login');
            }
        }
        this.props.getUserProfile(userId);
        this.props.getStatus(userId);
    }
    render() {

        return (
            <Profile {...this.props} profile={this.props.profile} status={this.props.status} updateStatus={this.props.updateStatus}/>
        )
    }
}

let mapStateToProps = (state) => ({
    profile:state.profileReducer.profile,
    status: state.profileReducer.status,
    authrizedUserId: state.auth.userId,
    isAuth: state.auth.isAuth
});

export default compose(
    connect(mapStateToProps, {getUserProfile, getStatus, updateStatus}),
    withRouter,
)(ProfileContainer)