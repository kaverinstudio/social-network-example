import React from 'react';
import { connect } from 'react-redux';
import {
   follow,
   setUsers,
   setCurrentPage,
   setTotalUsersCount,
   toggleIsFetching,
   unfollow, toggleFollowingProgress
} from '../../redux/users-reducer';
import Users from "./Users";
import Preloader from '../common/preloader/preloader';
import {usersAPI} from "../../api/api";
import {compose} from "redux";
import {
   getAllUsers,
   getCurrentPage,
   getFollowingInProgress,
   getIsFetching,
   getPageSize,
   getTotalUsersCount,
   requestUsers
} from "../../redux/users-selectors";




class UsersContainer extends React.Component {
   componentDidMount() {
      this.props.toggleIsFetching(true);

      usersAPI.getUsers(this.props.currentPage, this.props.pageSize).then((data) => {
            this.props.toggleIsFetching(false);
            this.props.setUsers(data.items);
            this.props.setTotalUsersCount(data.totalCount);
         });
   }

   onPageChanged = (pageNumber) => {
      this.props.toggleIsFetching(true);
      this.props.setCurrentPage(pageNumber);
      usersAPI.getUsers(pageNumber, this.props.pageSize).then((data) => {
            this.props.toggleIsFetching(false);
            this.props.setUsers(data.items);
         });
   };

   render() {


      return <>
         {this.props.isFetching ? <Preloader /> : null}
         <Users totalUsersCount={this.props.totalUsersCount}
            pageSize={this.props.pageSize}
            onPageChanged={this.onPageChanged}
            currentPage={this.props.currentPage}
            users={this.props.users}
            follow={this.props.follow}
            unfollow={this.props.unfollow}
            toggleFollowingProgress={this.props.toggleFollowingProgress}
            followingInProgress={this.props.followingInProgress}
         />
      </>
   }
}

let mapStateToProps = (state) => {
   return {
      users: getAllUsers(state),
      pageSize: getPageSize(state),
      totalUsersCount: getTotalUsersCount(state),
      currentPage: getCurrentPage(state),
      isFetching: getIsFetching(state),
      followingInProgress: getFollowingInProgress(state)
   }
}


// export default connect(mapStateToProps, { follow, unfollow, setUsers, setCurrentPage, setTotalUsersCount, toggleIsFetching, toggleFollowingProgress })(UsersContainer);

export  default compose(
    // withAuthRedirect,
    connect(mapStateToProps, { follow, unfollow, setUsers, setCurrentPage, setTotalUsersCount, toggleIsFetching, toggleFollowingProgress })
)(UsersContainer);