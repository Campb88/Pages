import React, { Component } from "react";

class About extends Component {
  render() {
    if (!this.props.data) return null;

    const name = this.props.data.name;
    const profilepic = require("../images/profile.jpg");
    const bio = this.props.data.bio;
    const street = this.props.data.address.street;
    const city = this.props.data.address.city;
    const state = this.props.data.address.state;
    const zip = this.props.data.address.zip;
    const phone = this.props.data.phone;
    const email = this.props.data.email;
    const resumeDownload = this.props.data.resumedownload;

    return (
      <section id="about" className="fade-in">
        <div className="container">
          <div className="profile-pic-container">
            <img
              className="profile-pic"
              src={profilepic}
              alt="Nordic Giant Profile Pic"
            />
          </div>
          <div className="about-details">
            <h2>About Me</h2>
            <p>{bio}</p>
          </div>
          <div className="contact-details">
            <h2>Contact Details</h2>
            <p className="address">
              <span>{name}</span>
              <br />
              <span>
                {street}
                <br />
                {city} {state}, {zip}
              </span>
              <br />
              <span>{phone}</span>
              <br />
              <span>{email}</span>
            </p>
          </div>
          <div className="download">
            <p>
              <a href={resumeDownload} className="button">
                <i className="fas fa-download"></i>Download Resume
              </a>
            </p>

          </div>
        </div>
      </section>
    );
  }
}

export default About;
