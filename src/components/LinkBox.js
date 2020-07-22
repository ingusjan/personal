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
        <a href={this.props.link} target="_blank" type="external">
          <div className="box link-box">
            <h3 className="subtitle is-5" style={{ marginBottom: "5px" }}>
              {this.props.title}
            </h3>
            <p>{this.props.desc}</p>
          </div>
        </a>
      </div>
    );
  }
}
