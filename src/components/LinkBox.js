import React, { Component } from "react";

export default class LinkBox extends Component {
  render() {
    return (
      <div>
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
