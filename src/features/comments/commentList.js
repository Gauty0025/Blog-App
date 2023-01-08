import React from 'react';
import { useSelector } from 'react-redux';

function CommentList() {
  const comments = useSelector(state => state.comments.items);

  return (
    <ul>
      {comments.map(comment => (
        <li key={comment.id}>{comment.text}</li>
      ))}
    </ul>
  );
}

export default CommentList;
