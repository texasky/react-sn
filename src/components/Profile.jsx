import React from 'react';
import seaBack from '../assets/Sea-Watch.jpg';

const Profile = () => {
    return (
        <main className="content">
        <div>
          <img src={seaBack} alt="Sea Background"/>
        </div>
        <div>
          avatar + descr
        </div>
        <div>
          my posts
          <div>new post</div>
          <div>
            <div>post 1</div>
            <div>post 2</div>
          </div>
        </div>
      </main>
    )
}

export default Profile;