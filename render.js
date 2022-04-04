import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { addPost, updatePostText } from './redux/state';
import { BrowserRouter } from "react-router-dom";

export let rerenderEntireTree = (state) => {
  ReactDOM.render(
    <BrowserRouter>
      <React.StrictMode>
        <App state={state} addPost={addPost} updatePostText={updatePostText} />
      </React.StrictMode>
    </BrowserRouter>,
    document.getElementById('root')
  );
}

reportWebVitals();
