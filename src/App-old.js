import React, { Component, useState, setState } from "react";
import "./bulma.css";
import "./index.css";
import LinkBox from "./components/LinkBox";
import ExpBox from "./components/ExpBox";
import vf from "./img/vf.png";
import illumi from "./img/illumi-dark.png";
import csites from "./img/creatorsites.png";
import react from "./img/react.svg";
import express from "./img/express.png";
import mongodb from "./img/mongodb.png";
import nodejs from "./img/nodejs.svg";
import php from "./img/php.png";
import mysql from "./img/mysql.png";
import ReactGa from "react-ga";
import Intro from "./components/Intro";

const App = () => {
  React.useEffect(() => {
    ReactGa.initialize("UA-158955035-3");
    ReactGa.pageview(window.location.pathname + window.location.search);
  });

  return (
    <>
      <Intro />

      <div class="hero is-fullheight" style={{ backgroundColor: "#9a2709" }}>
        <div className="hero-body">
          <div className="container is-fluid" style={{ marginTop: "-10%" }}>
            <h1 class="title is-2 has-text-centered">Applications</h1>
            <h2 class="subtitle is-5 has-text-centered">
              Projects I've created in my spare time
            </h2>

            <div className="columns" style={{ marginTop: "50px" }}>
              <div className="column">
                <LinkBox
                  imgStyles={{
                    width: "110px",
                    filter:
                      "invert(100%) sepia(94%) saturate(0%) hue-rotate(148deg) brightness(107%) contrast(107%)",
                  }}
                  img={illumi}
                  tech="Wordpress, WooCommerce, PHP and LightSpeed Server Technology"
                  link="https://illumimedia.co/"
                  title="Illumi Media"
                  desc="Design powerhouse for creators"
                  story="It started off at the age of 15 when I helped my friends with some graphic design work and quickly, through some inner friendship circles gained access to huge talent that needed branding. From there on, I built the Illumi Media brand."
                />
              </div>

              <div className="column">
                <LinkBox
                  imgStyles={{ height: "50px" }}
                  img={csites}
                  tech="ReactJS, MongoDB, Express, Heroku, Google Analytics, HotJar"
                  link="https://creatorsites.net"
                  title="Creator Sites"
                  desc="All your links in one place"
                  story="Being my first ever production project, Creator Sites was born because I was frustrated with how little link aggregators offered, while being the main entry point for most content creators. I now have over 70 active users, many of whom are large content creators."
                />
              </div>

              <div className="column">
                <LinkBox
                  link="https://spacex-tracker.netlify.app"
                  title="SpaceX Tracker"
                  tech="ReactJS, Netlify, Bulma, Axios"
                  desc="(Almost) accurate data about SpaceX launches"
                  story="There's not much of a story to this one. I found a SpaceX API and wanted to play around with it and create a minimalistic, yet useful tracker for all flights and even a full-screen countdown. I did just that, designed and deployed through Netlify within 3 days!"
                />
              </div>
            </div>
          </div>
        </div>
        <p
          class="has-text-centered is-titanium"
          style={{ marginTop: "20px", marginBottom: "20px" }}
        >
          I have open-sourced this page on GitHub (
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
};

export default App;
