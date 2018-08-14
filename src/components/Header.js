import React from "react";
import "./Header.css";

export default class Header extends React.Component {
  render() {
    return (
      <div className="header center-align ">
        <img
          src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/19643055883023.5996f8afa3a8f.gif"
          alt="Rick And Morty logo"
          className="responsive-img"
        />
      </div>
    );
  }
}
