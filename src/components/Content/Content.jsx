import React from "react";
import "./Content.scss";
import Dialogs from "../Dialogs/Dialogs";
import Profile from "../Profile/Profile";
import News from "./News/News";
import Music from "./Music/Music";
import Settings from "./Settings/Settings";
import { Route } from "react-router-dom";

const Content = () => {
  return (
    <div className="content-wrapper">
      <Route path="/profile" component={Profile} />
      <Route path="/dialogs" component={Dialogs} />
      <Route path="/news" component={News} />
      <Route path="/music" component={Music} />
      <Route path="/settings" component={Settings} />
    </div>
  );
};

export default Content;
