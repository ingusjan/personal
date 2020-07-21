import React from "react";
import "./bulma.css";
import "./index.css";
import LinkBox from "./components/LinkBox";
import ExpBox from "./components/ExpBox";

function App() {
  return (
    <>
      <div className="container is-fluid" style={{ marginTop: "6%" }}>
        <img
          src={"./me-min.jpg"}
          style={{
            width: "125px",
            borderRadius: "50%",
            marginBottom: "15px",
          }}
        />
        <h1 className="title is-2">Ingus Jansons</h1>
        <h1 className="subtitle is-5 is-short" style={{ marginTop: "10px" }}>
          Working at Vodafone Group as a Software Engineer while also studying
          for my degree (B.Sc.) - Living in Newbury 🇬🇧
        </h1>

        <ul style={{ marginBottom: "20px" }}>
          <li>- Natively Latvian (born in Riga, LV) 🇱🇻</li>
          <li>- Somehow doesn't sound Latvian</li>
          <li>- Overly OCD when it comes to UX/UI</li>
        </ul>

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

        <h2
          className="title is-4"
          style={{ marginTop: "45px", marginBottom: "25px" }}
        >
          Projects
        </h2>

        <div className="columns">
          <div className="column">
            <LinkBox
              link="https://illumimedia.co/"
              title="Illumi Media"
              desc="Design powerhouse for content creators"
            />
          </div>

          <div className="column">
            <LinkBox
              link="https://creatorsites.net"
              title="Creator Sites"
              desc="Store all of your links in one place & share one link."
            />
          </div>

          <div className="column">
            <LinkBox
              link="https://spacex-tracker.netlify.app"
              title="SpaceX Tracker"
              desc="(Almost) accurate data about SpaceX launches."
            />
          </div>
        </div>
        <h2 className="title is-4" style={{ marginTop: "15px" }}>
          Experience
        </h2>
        <div className="columns">
          <div className="column">
            <ExpBox
              title="Almighty Records"
              token="almighty"
              desc="British Heritage NRG Record Label"
              details="Social Media Manager"
            />
          </div>

          <div className="column">
            <ExpBox
              title="Renishaw"
              token="renishaw"
              desc="Engineering Company working with Rolls-Royce"
              details="Work Experience, Software Engineering"
            />
          </div>
        </div>
      </div>

      <div
        className="has-text-centered"
        style={{ marginTop: "10%", marginBottom: "10px" }}
      >
        <p>
          This page is open-source on GitHub (
          <a
            href="https://github.com/ingusjan/personal"
            target="_blank"
            type="external"
          >
            https://github.com/ingusjan/personal
          </a>
          )
        </p>
      </div>
    </>
  );
}

export default App;
