import React, { Component } from "react";
import "./index.scss";

class Skills extends Component {
  render() {
    return (
      <section className="section-skills" id="skills">
        <div className="u-center-text">
          <h1 className="heading-secondary about-heading u-margin-bottom-medium">
            SKILLS
          </h1>
        </div>
        <div className="row">
          <div className="col-1-of-4 col">
            <div className="u-center-text">
              <i class="devicon-javascript-plain icon" />
            </div>
          </div>
          <div className="col-1-of-4 col">
            <div className="u-center-text">
              <i class="devicon-react-original-wordmark icon" />
            </div>
          </div>
          <div className="col-1-of-4 col">
            <div className="u-center-text">
              <i class="devicon-git-plain icon" />
            </div>
          </div>
          <div className="col-1-of-4 col">
            <div className="u-center-text">
              <i class="devicon-github-plain icon" />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-1-of-4 col">
            <div className="u-center-text">
              <i class="devicon-meteor-plain-wordmark icon" />
            </div>
          </div>
          <div className="col-1-of-4 col">
            <div className="u-center-text">
              <i class="devicon-html5-plain icon" />
            </div>
          </div>
          <div className="col-1-of-4 col">
            <div className="u-center-text">
              <i class="devicon-sass-original icon" />
            </div>
          </div>
          <div className="col-1-of-4 col">
            <div className="u-center-text">
              <i class="devicon-css3-plain icon" />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-1-of-4 col">
            <div className="u-center-text">
              <i class="devicon-postgresql-plain-wordmark icon" />
            </div>
          </div>
          <div className="col-1-of-4 col">
            <div className="u-center-text">
              <i class="devicon-mongodb-plain-wordmark icon" />
            </div>
          </div>
          <div className="col-1-of-4 col">
            <div className="u-center-text">
              <i class="devicon-express-original-wordmark icon" />
            </div>
          </div>
          <div className="col-1-of-4 col">
            <div className="u-center-text">
              <i class="devicon-nodejs-plain icon" />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-1-of-2 col">
            <div className="u-center-text">
              <i class="devicon-bootstrap-plain icon icon-end" />
            </div>
          </div>
          <div className="col-1-of-2 col">
            <div className="u-center-text">
              <i class="devicon-webpack-plain icon icon-end" />
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Skills;
