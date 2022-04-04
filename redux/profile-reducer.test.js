import profileReducer, {addPostActionCreator, deletePost} from "./profile-reducer";
import {render, screen} from "@testing-library/react";
import App from "../App";
import React from "react";

let state = {
    post: [
        { id: 1, message: 'Hi, i am first', likesCount: 0 },
        { id: 2, message: 'Hi i am two', likesCount: 5 },
        { id: 3, message: 'Hi i am three', likesCount: 15 }
    ]
};

test('new post should be added', () => {
    // 1. test data
    let action = addPostActionCreator("kaverinstudio.net");


    // 2. action
    let newState = profileReducer(state, action);

    // 3. expectation
    expect(newState.post.length).toBe(4);
});

test('length after deleting message must be decrement', () => {
    // 1. test data
    let action = deletePost(1);

    // 2. action
    let newState = profileReducer(state, action);

    // 3. expectation
    expect(newState.post.length).toBe(2);
});

test(`length after deleting message shouldn't be decrement if id is incorrect`, () => {
    // 1. test data
    let action = deletePost(1000);

    // 2. action
    let newState = profileReducer(state, action);

    // 3. expectation
    expect(newState.post.length).toBe(3);
})

