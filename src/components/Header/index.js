import React, { Component } from "react";
import "./index.scss";

class Header extends Component {
  constructor() {
    super();
    this.state = {
      checked: false
    };
  }
  render() {
    return (
      <div className="header">
        <header>
          <div className="header__text-box u-text-center">
            <h1 className="heading-primary ">
              <p className="heading-primary--main ">Jenny Rose Gutierrez</p>
              <p className="heading-primary--sub">Software Developer</p>
            </h1>

            <a href="#portfolio" className="btn btn--white ">
              View my work
            </a>
          </div>
        </header>
      </div>
    );
  }
}

export default Header;
