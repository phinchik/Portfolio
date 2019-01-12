import React, { Component } from "react";
import "./index.scss";

class NavBar extends Component {
  constructor() {
    super();
    this.state = {
      checked: false
    };
  }
  render() {
    return (
      <div className="navigation" data-position="fixed">
        <input
          type="checkbox"
          className="navigation__checkbox"
          checked={this.state.checked}
        />
        <label
          for="navi-toggle"
          className="navigation__button"
          onClick={() => this.setState({ checked: !this.state.checked })}
        >
          <span className="navigation__icon">&nbsp;</span>
        </label>
        <div className="navigation__background">&nbsp;</div>
        <nav className="navigation__nav navbar">
          <ul
            className="navigation__list"
            onClick={() => this.setState({ checked: false })}
          >
            <li className="navigation__item">
              <a href="#about" className="navigation__link">
                ABOUT
              </a>
            </li>
            <li className="navigation__item">
              <a href="#portfolio" className="navigation__link">
                PORTFOLIO
              </a>
            </li>
            <li className="navigation__item">
              <a href="#skills" className="navigation__link">
                SKILLS{" "}
              </a>
            </li>
            <li className="navigation__item">
              <a href="#contact" className="navigation__link">
                CONTACT{" "}
              </a>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default NavBar;
