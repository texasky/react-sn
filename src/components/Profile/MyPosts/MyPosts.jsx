import React from "react";
import "./MyPosts.scss";
import Post from "./Post/Post";

const MyPosts = () => {
  return (
    <div className="my-posts">
      my posts
      <div>
        <textarea name="" id="" cols="30" rows="10"></textarea>
        <button>Add Post</button>
        <button>Remove Post</button>
      </div>
      <div>
        <Post />
      </div>
    </div>
  );
};

export default MyPosts;
