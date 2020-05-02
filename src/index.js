import React from 'react';
import ReactDOM from 'react-dom';
import CommentDetail from './CommentDetail';

const App = () => {
  return (
    <div className="ui container comments">
      <CommentDetail author="Diego"/>
      <CommentDetail author="Silvia"/>
      <CommentDetail author="Naty"/>
      <CommentDetail author="Jenny"/>
   </div>
  );
}

ReactDOM.render(
  <App/>,
  document.querySelector("#root")
)