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
            <div className="columns">
              <div className="column is-narrow" style={{ marginRight: "20px" }}>
                <img src={this.props.img} style={this.props.imgStyles}></img>
              </div>
              <div className="column">
                <h3 className="subtitle is-5" style={{ marginBottom: "5px" }}>
                  {this.props.title}
                </h3>
                <p style={{ color: "#c15000" }}>{this.props.desc}</p>
              </div>
            </div>
            {this.props.story && <p className="help">{this.props.story}</p>}
          </div>
        </a>
      </div>
    );
  }
}
