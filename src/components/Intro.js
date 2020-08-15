import React, { Component } from "react";

export default class Intro extends Component {
  getAge(dateString) {
    var today = new Date();
    var birthDate = new Date(dateString);
    var age = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    return age;
  }

  render() {
    return (
      <div>
        <div class="hero is-fullheight pattern-bg">
          <div className="hero-body">
            <div className="container" style={{ marginTop: "-10%" }}>
              <img
                src={"./me-min.jpg"}
                style={{
                  width: "145px",
                  borderRadius: "50%",
                  margin: "auto",
                  marginBottom: "15px",
                  display: "block",
                  border: "6px solid #EB4511",
                }}
              />
              <h1 class="title is-1 has-text-centered">Ingus Jansons</h1>
              <h2 class="subtitle is-4 has-text-centered">
                {this.getAge("2001/06/13")}, Front-End Software Engineer
              </h2>

              <p class="has-text-centered is-orange">
                Specialising in <span class="is-titanium">ReactJS</span>,{" "}
                <span class="is-titanium">Express</span>,{" "}
                <span class="is-titanium">MongoDB</span>,{" "}
                <span class="is-titanium">PHP</span>,{" "}
                <span class="is-titanium">MySQL</span> and{" "}
                <span class="is-titanium">Figma</span>.
              </p>

              <p class="has-text-centered is-orange">
                Software Engineer @ Vodafone
              </p>

              <p class="has-text-centered" style={{ marginTop: "50px" }}>
                <div style={{ display: "inline-flex" }}>
                  <a
                    href="https://twitter.com/ingusjan"
                    target="_blank"
                    type="external"
                  >
                    Twitter
                  </a>
                  <a
                    style={{ marginLeft: "20px" }}
                    href="https://linkedin.com/in/ingus-jansons"
                    target="_blank"
                    type="external"
                  >
                    LinkedIn
                  </a>
                  <a
                    style={{ marginLeft: "20px" }}
                    href="https://github.com/ingusjan"
                    target="_blank"
                    type="external"
                  >
                    GitHub
                  </a>
                </div>
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
