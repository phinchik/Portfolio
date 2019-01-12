import React, { Component } from "react";
import "./index.scss";
import boomtown from "../../img/boomtown.png";
import mvmntlab2 from "../../img/mvmnt2.png";
import mvmntlab1 from "../../img/mvmnt1.png";
import R10 from "../../img/r10.png";
import R101 from "../../img/r101.png";
import Todo from "../../img/todo.png";
import Carpool from "../../img/carpool.png";

class Projects extends Component {
  render() {
    return (
      <section className="section-projects" id="portfolio">
        <div className="u-center-text">
          <h1 className="heading-secondary u-margin-bottom-medium">
            Portfolio
          </h1>
        </div>
        <div className="row">
          <div className="col-1-of-2">
            <div className="composition">
              <img
                src={boomtown}
                alt="boomtown"
                className="composition__photo"
              />
            </div>
          </div>
          <div className="col-1-of-2">
            <div className="u-center-text content">
              <h2 className="heading-tertiary--main">Boomtown</h2>
              <p className="paragraph">
                Full-Stack Photo sharing application that allows users to
                broadcast and borrow photos from other users.
              </p>
              <p className="heading-tertiary--tech">
                React / Redux / Material UI / PostgreSQL / GraphQL / Express /
                Node / Apollo
              </p>
              <a
                href="https://github.com/phinchik/boomtown"
                className="btn button"
              >
                VIEW GITHUB
              </a>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-1-of-2">
            <div className="u-center-text content">
              <h2 className="heading-tertiary--main">MVMNTLAB</h2>
              <p className="paragraph">
                Community project built on React Native that allows
                physio-patients to exercise at their own convenience while being
                monitored by their coach (physiotherapist). Patients can keep
                track of their progress overtime and the challenges to come.
              </p>
              <p className="heading-tertiary--tech">
                React Native / React / Realm / GraphQL
              </p>
              <a
                href="https://github.com/phinchik/mvmnt-lab-fall-2018"
                className="btn button"
              >
                VIEW GITHUB
              </a>
            </div>
          </div>
          <div className="col-1-of-2">
            <div className="section-projects-photos">
              <img
                src={mvmntlab1}
                alt="mvmntlab"
                className="section-projects-photos-1"
              />
              <img
                src={mvmntlab2}
                alt="mvmntlab1"
                className="section-projects-photos-2"
              />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-1-of-2">
            <div className="u-center-text content">
              <h2 className="heading-tertiary--main">R10</h2>
              <p className="paragraph">
                The objective for this project was to create a mobile
                application for a fictional conference called R10. The
                application allows users to view a schedule of sessions, read
                their details and favorite them (for later viewing). In
                addition, users can also read about the speakers and navigate to
                an external link to read more about them.
              </p>
              <p className="heading-tertiary--tech">
                React Native / React / Realm / GraphQL
              </p>
              <a href="https://github.com/phinchik/R10" className="btn button">
                VIEW GITHUB
              </a>
            </div>
          </div>
          <div className="col-1-of-2">
            <div className="section-projects-photos">
              <img src={R10} alt="r10" className="section-projects-photos-1" />
              <img
                src={R101}
                alt="r101"
                className="section-projects-photos-2"
              />
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-1-of-2">
            <div className="composition">
              <img src={Todo} alt="todo" className="composition__photo" />
            </div>
          </div>
          <div className="col-1-of-2">
            <div className="u-center-text content">
              <h2 className="heading-tertiary--main">ToDo List</h2>
              <p className="paragraph">
                Full-Stack ToDo List. You can Add, Remove, Update, Cancel
                Update, Count Todo, Delete All Todo.
              </p>
              <p className="heading-tertiary--tech">
                React / Redux / Rest Api / Node / Express / MongoDB
              </p>
              <a
                href="https://github.com/phinchik/full-stack-todoList"
                className="btn button"
              >
                VIEW GITHUB
              </a>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-1-of-2">
            <div className="composition">
              <img src={Carpool} alt="carpool" className="composition__photo" />
            </div>
          </div>
          <div className="col-1-of-2">
            <div className="u-center-text content">
              <h2 className="heading-tertiary--main">JoinRide</h2>
              <p className="paragraph">
                Joinride is a carpooling web application that allows people to
                give or join rides as they wish. This is a solution to reduce
                traffic, pollution and a way to get to know your community.
              </p>
              <p className="heading-tertiary--tech">
                Meteor / MongoDB / React / Material UI
              </p>
              <a
                href="https://github.com/phinchik/carpoolapp"
                className="btn button"
              >
                VIEW GITHUB
              </a>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Projects;
