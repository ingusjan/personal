import React, { Component } from "react";
import almighty from "../img/almighty.png";
import renishaw from "../img/renishaw.png";

export default class ExpBox extends Component {
  getImage = () => {
    switch (this.props.token) {
      case "almighty":
        return almighty;
        break;
      case "renishaw":
        return renishaw;
        break;
      default:
        break;
    }
  };

  render() {
    return (
      <div>
        <div className="box exp-box">
          <img
            src={this.getImage()}
            style={{ width: "75px", marginBottom: "15px" }}
          />
          <h3 className="subtitle is-5" style={{ marginBottom: "5px" }}>
            {this.props.title}
          </h3>
          <p style={{ marginBottom: "15px" }}>{this.props.desc}</p>
          <p className="help" style={{ color: "#c15000", marginTop: "7px" }}>
            {this.props.details}
          </p>
        </div>
      </div>
    );
  }
}
