import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';

const App = () => {
  return (
    <div className="ui container comments">
      <ApprovalCard>
        <CommentDetail author="Diego" timeAgo="Today at 15:45" comment="Wow!" image={faker.image.avatar()}/>
      </ApprovalCard>
      <ApprovalCard>      
        <CommentDetail author="Silvia" timeAgo="Today at 00:05" comment="When that happened?" image={faker.image.avatar()}/>
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail author="Naty" timeAgo="Yesterday at 09:40" comment="Omg!" image={faker.image.avatar()}/>
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail author="Jenny" timeAgo="A week ago at 13:28" comment="Why!!??" image={faker.image.avatar()}/>
      </ApprovalCard>
   </div>
  );
}

ReactDOM.render(
  <App/>,
  document.querySelector("#root")
)