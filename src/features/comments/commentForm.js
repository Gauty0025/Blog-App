import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addComment } from './commentsSlice';

function CommentForm() {
  const [commentText, setCommentText] = useState('');
  const dispatch = useDispatch();

  function handleSubmit(event) {
    event.preventDefault();
    dispatch(addComment({ id: Date.now(), text: commentText }));
    setCommentText('');
  }

  return (
    <form onSubmit={handleSubmit}>
      <textarea value={commentText} onChange={e => setCommentText(e.target.value)} />
      <button type="submit">Submit Comment</button>
    </form>
  );
}

export default CommentForm;
