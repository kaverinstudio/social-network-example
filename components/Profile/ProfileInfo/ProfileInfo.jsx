import React from "react";
import Preloader from "../../common/preloader/preloader";
import classes from './ProfileInfo.module.css';
import ProfileStatus from './ProfileStatus'
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";


const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader />
    }

    return (
        <div>
            <div className={classes.top_image}>
                <img
                    src="https://p.bigstockphoto.com/GeFvQkBbSLaMdpKXF1Zv_bigstock-Aerial-View-Of-Blue-Lakes-And--227291596.jpg"
                    alt="" />
            </div>
            <div className={classes.block_info}>
                <div className={classes.avatar}>
                    <img src={props.profile.photos.large} alt="" className={classes.ava} />
                </div>
                <ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatus}/>
                <div className={classes.about_me}>
                    <table>
                        <tr>
                            <td className={classes.about}>Name:</td>
                            <td className={classes.me}>{props.profile.fullName}</td>
                        </tr>
                        <tr>
                            <td className={classes.about}>About Me:</td>
                            <td className={classes.me}>{props.profile.aboutMe}</td>
                        </tr>
                        <tr>
                            <td className={classes.about}>City:</td>
                            <td className={classes.me}>Vinnitsa</td>
                        </tr>
                        <tr>
                            <td className={classes.about_hobbies}>Hobbies:</td>
                            <td className={classes.me}>Music <br /> Sport <br />Travel
                            </td>
                        </tr>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default ProfileInfo