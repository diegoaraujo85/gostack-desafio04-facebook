import React from 'react';
import Comment from '../Comment';
import './styles.css';

function Post({ post }) {
  return (
    <div className="post">
      <img className="avatar" src={post.author.avatar} />
      <div className="user-info">
        <strong>{post.author.name}</strong>
        <small>{post.date}</small>
      </div>
      <p>{post.content}</p>
      {post.comments.map(comment => (
        <Comment key={comment.id} comment={comment} />
      ))}
    </div>
  );
}

export default Post;
