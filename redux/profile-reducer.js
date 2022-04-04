import {profileAPI} from "../api/api";

const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';
const DELETE_POST = 'DELETE_POST';

let initialState = {
    post: [
        { id: 1, message: 'Hi, i am first', likesCount: 0 },
        { id: 2, message: 'Hi i am two', likesCount: 5 },
        { id: 3, message: 'Hi i am three', likesCount: 15 }
    ],
    profile: null,
    status: ""
}

const profileReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_POST:
            {
                let newPost = {
                    id: 5,
                    message: action.newPostText,
                    likesCount: 0
                };
                return {
                    ...state,
                    post: [...state.post, newPost],
                    newPostText: ''
                };
            }

        case SET_STATUS:
        {
            return {
                ...state,
                status: action.status
            };
        }
        case SET_USER_PROFILE:
            return {
                ...state,
                profile: action.profile
            }

        case DELETE_POST :
            return {...state, post: state.post.filter(p =>p.id != action.postID)}
        default:
            return state;
    }
}

export const addPostActionCreator = (newPostText) => ({ type: ADD_POST, newPostText });

export const setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile });
export const setStatus = (status) => ({ type: SET_STATUS, status });
export const deletePost = (postID) => ({ type: DELETE_POST, postID });

export const getUserProfile = (userId) => (dispatch) => {
    profileAPI.getProfile(userId).then(response => {
        dispatch(setUserProfile(response.data));
    });
}

export const getStatus = (userId) => (dispatch) => {
    profileAPI.getStatus(userId).then(response => {
        dispatch(setStatus(response.data));
    });
}

export const updateStatus = (status) => (dispatch) => {
    profileAPI.updateStatus(status).then(response => {
        if (response.data.resultCode === 0){
            dispatch(setStatus(status));
        }

    });
}
export default profileReducer;
