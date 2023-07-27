import React from "react";
import Minuse from "../../common/preloader/minuse";
import Pluse from "../../common/preloader/pluse";
import Preloader from "../../common/preloader/preloader";
import classes from './ProfileInfo.module.css';
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";

const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader />
    }
    return (
        <div>
            {/* <div>
                <img className={classes.mainPhoto} src="https://wallpaperaccess.com/full/781752.jpg" alt="" />
            </div> */}

            <div className={classes.descriptionBlock}>
                <img className={classes.Photo} src={props.profile.photos.large} alt="" />
                <div className={classes.description}>
                    <div className={classes.fullName}>{props.profile.fullName}</div>
                    <ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatus} />
                    <div><p>{props.profile.aboutMe}</p></div>
                    <div><a href={props.profile.contacts.facebook}>facebook</a></div>
                    <div><a href={props.profile.contacts.twitter}>tw</a></div>
                    <div>Ищу работу:{(props.profile.lookingForAJob ? <Pluse /> : <Minuse />)}</div>
                </div>
            </div>
        </div>

    )
}

export default ProfileInfo;