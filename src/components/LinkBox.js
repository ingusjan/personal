import React, { Component } from "react";
import ReactGa from "react-ga";

export default class LinkBox extends Component {
  captureClick(link, userid) {
    ReactGa.event({
      category: "Link Click",
      action: link,
    });
  }

  render() {
    return (
      <div
        onClick={() => {
          this.captureClick(this.props.link);
        }}
      >
        <a
          href={this.props.link}
          target="_blank"
          type="external"
          style={{ textDecoration: "none" }}
        >
          <div className="box link-box">
            <div className="columns">
              <div
                style={{
                  background: "#9a2709",
                  width: "100%",
                  borderRadius: "8px",
                  marginBottom: "10px",
                  height: "160px",
                }}
              >
                <div
                  className="column is-narrow"
                  style={{ marginRight: "20px" }}
                >
                  <img src={this.props.img} style={this.props.imgStyles}></img>
                </div>
                <div className="column">
                  <h3
                    className="subtitle is-5"
                    style={{ marginBottom: "5px", color: "#FEFDFF" }}
                  >
                    {this.props.title}
                  </h3>
                  <p style={{ color: "#C1BFB5" }}>{this.props.desc}</p>
                </div>
              </div>
            </div>

            <p className="help">
              <strong style={{ letterSpacing: "5px", opacity: "0.2" }}>
                STORY
              </strong>
            </p>
            {this.props.story && <p className="help">{this.props.story}</p>}

            <p className="help" style={{ marginTop: "20px" }}>
              <strong style={{ letterSpacing: "5px", opacity: "0.2" }}>
                TECH
              </strong>
            </p>
            {this.props.tech && <p className="help">{this.props.tech}</p>}
          </div>
        </a>
      </div>
    );
  }
}
