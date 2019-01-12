import React, { Component } from "react";
import "./index.scss";
import photo from "../../img/jenny.png";

class About extends Component {
  render() {
    return (
      <div>
        <section className="section-about" id="about">
          <div className="row">
            <div className="col-2-of-3">
              <div className="u-center-text">
                <h2 className="heading-secondary about-heading u-margin-big">
                  ABOUT ME
                </h2>
                <h2 className="heading-tertiary--main">Jenny Gutierrez</h2>
                <h2 className="heading-tertiary--sub u-margin-bottom-small">
                  A software developer from Vancouver, B.C.
                </h2>
                <p className="paragraph">
                  I'm an Accounting and Finance major turned software developer.
                  I self taught myself the fundamentals of the web and went to a
                  bootcamp to learn Application Development. I work with design
                  teams to execute and build beautiful web interfaces with a
                  strong focus on responsive design, accessibility and using the
                  latest front end design techniques. I love discovering new
                  places, I'm potterhead and outdoor enthusiast.
                </p>
              </div>
            </div>
            <div className="col-1-of-3">
              <div className="composition">
                <img
                  src={photo}
                  alt="phinchik"
                  className="composition__photo"
                />
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default About;
