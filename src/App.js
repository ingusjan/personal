import React from "react";
import logo from "./logo.svg";
import "./bulma.css";
import "./index.css";

function App() {
  return (
    <div className="container is-fluid" style={{ marginTop: "6%" }}>
      <img
        src={"./me-min.jpg"}
        style={{ width: "125px", borderRadius: "50%", marginBottom: "15px" }}
      />
      <h1 className="title is-2">Ingus Jansons</h1>
      <h1 className="subtitle is-5 is-short" style={{ marginTop: "10px" }}>
        Working at Vodafone Group as a Software Engineer Apprentice while also
        studying for my degree. Living in Newbury 🇬🇧
      </h1>

      <ul style={{ marginBottom: "20px" }}>
        <li>- Natively Latvian (born in Riga, LV) 🇱🇻</li>
        <li>- Somehow doesn't sound Latvian in the slightest</li>
        <li>- Overly OCD when it comes to UX/UI</li>
      </ul>

      <div style={{ display: "inline-flex" }}>
        <a href="https://twitter.com/ingusjan" target="_blank" type="external">
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

      <div className="columns" style={{ marginTop: "45px" }}>
        <div className="column">
          <a href="https://illumimedia.co/" target="_blank" type="external">
            <div className="box link-box">
              <h3 className="subtitle is-5">Illumi Media</h3>
              <p>Design powerhouse for content creators.</p>
            </div>
          </a>
        </div>

        <div className="column">
          <a href="https://creatorsites.net" target="_blank" type="external">
            <div className="box link-box">
              <h3 className="subtitle is-5">Creator Sites</h3>
              <p>Store all of your links in one place & share one link.</p>
            </div>
          </a>
        </div>

        <div className="column">
          <a
            href="https://spacex-tracker.netlify.app"
            target="_blank"
            type="external"
          >
            <div className="box link-box">
              <h3 className="subtitle is-5">SpaceX Tracker</h3>
              <p>(Almost) accurate data about SpaceX launches.</p>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}

export default App;
