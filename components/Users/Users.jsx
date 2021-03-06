import React from "react";
import styles from "./Users.module.css";
import userPhoto from "../../assets/images/avatar.png";
import { NavLink } from "react-router-dom";
import {usersAPI} from "../../api/api";
import Paginator from "../common/Paginator/Paginator";

let Users = (props) => {

   return <div>

      <Paginator totalItemsCount={props.totalUsersCount}
                 pageSize={props.pageSize}
                 currentPage={props.currentPage}
                 onPageChanged={props.onPageChanged} />

      {
         props.users.map(u => <div key={u.id}>
            <span>
               <div>
                  <NavLink to={'/profile/' + u.id}>
                     <img src={u.photos.small != null ? u.photos.small : userPhoto} className={styles.userPhoto} />
                  </NavLink>
               </div>
               <div>{u.followed
                   ? <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => {
                      props.toggleFollowingProgress(true, u.id);
                        usersAPI.unfollowUser(u.id).then((data) => {
                             if (data.resultCode === 0){
                                props.unfollow(u.id);
                             }
                           props.toggleFollowingProgress(false, u.id);
                          });

                   }}>Unfollow</button>
                   : <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => {
                      props.toggleFollowingProgress(true, u.id);
                          usersAPI.followUser(u.id).then((data) => {
                             if (data.resultCode === 0){
                                props.follow(u.id);
                             }
                             props.toggleFollowingProgress(false, u.id);
                          });

                   }}>Follow</button>}</div>
            </span>
            <span>
               <span>
                  <div>{u.name}</div>
                  <div>{u.status}</div>
               </span>
               <span>
                  <div>{"u.location.country"}</div>
                  <div>{"u.location.city"}</div>
               </span>
            </span>
         </div>)
      }
   </div>
};

export default Users;
