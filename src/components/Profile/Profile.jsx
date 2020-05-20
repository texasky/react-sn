import React from "react";
import "./Profile.scss";
import MyPosts from "./MyPosts/MyPosts";
import seaBack from "../../assets/Sea-Watch.jpg";

const Profile = () => {
  return (
    <main className="content">
      <div>
        <img src={seaBack} alt="Sea Background" />
      </div>
      <div>avatar + descr</div>
      <MyPosts />
    </main>
  );
};

export default Profile;
