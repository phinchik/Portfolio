import React, { Component } from "react";
import "./index.scss";

class Contact extends Component {
  render() {
    return (
      <section className="section-contact" id="contact">
        <div className="u-center-text">
          <h1 className="heading-secondary ">CONTACT ME</h1>
        </div>
        <div className="row section-contact__details">
          <div className="col-1-of-1">
            <input
              className="section-contact__form-input"
              type="email"
              name="email"
              placeholder="Your Email"
            />
          </div>
          <div className="col-1-of-1">
            {" "}
            <input
              className="section-contact__form-input"
              type="name"
              name="name"
              placeholder="Your Name"
            />
          </div>
          <div className="col-1-of-1">
            <input
              className="section-contact__form-input"
              type="subject"
              name="subject"
              placeholder="Your Subject"
            />
          </div>
          <div className="col-1-of-1">
            <textarea
              className="section-contact__form-input"
              name="message"
              placeholder=" Message"
            />
          </div>
          <div className="col-1-of-1">
            <button className="section-contact__form-btn btn" type="submit">
              Send
            </button>
          </div>
        </div>
        <section className="section-footer">
          <div className="row">
            <div className="col-1-of-2 " id="text">
              <div className="u-center-text">
                <p className="section-contact__footer-details-name">
                  <i class="far fa-copyright" />
                  Jenny Rose Gutierrez 2019
                </p>
              </div>
            </div>
            <div className="col-1-of-2 footer " id="icon">
              <div className="section-contact__footer-container">
                <a
                  href="https://www.linkedin.com/in/jenny-rose-gutierrez-096584171/"
                  className="section-contact__footer-container-icon"
                >
                  <ion-icon name="logo-linkedin" />
                </a>
                <a
                  href="https://github.com/phinchik"
                  className="section-contact__footer-container-icon"
                >
                  <ion-icon name="logo-github" />
                </a>
                <a
                  href="https://angel.co/jenny-rose-gutierrez"
                  className="section-contact__footer-container-icon"
                >
                  <i class="fab fa-angellist" />
                </a>
              </div>
            </div>
          </div>
        </section>
      </section>
    );
  }
}

export default Contact;
