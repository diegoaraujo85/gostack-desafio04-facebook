import React from 'react';
import './styles.css';

function Comment({ comment }) {
  return (
    <div className="comment">
      <img src={comment.author.avatar} />
      <div className="content">
        <strong>{comment.author.name}</strong>
        <span>{comment.content}</span>
      </div>
    </div>
  );
}

export default Comment;
