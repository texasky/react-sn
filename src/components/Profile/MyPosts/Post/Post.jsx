import React from "react";
import "./Post.scss";

const Post = () => {
  return (
    <div>
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT9Yn_1pqsX82GT_J-IBI6ICMaVXMRHr94Zd-DAU1sBLGyjcxGu&usqp=CAU"
        className="post__avatar"
        alt="avatar"
      />
      post 1
      <div>
        <span>Like</span>
      </div>
    </div>
  );
};

export default Post;
