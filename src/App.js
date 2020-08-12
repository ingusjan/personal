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

function getAge(dateString) {
  var today = new Date();
  var birthDate = new Date(dateString);
  var age = today.getFullYear() - birthDate.getFullYear();
  var m = today.getMonth() - birthDate.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }
  return age;
}

const App = () => {
  React.useEffect(() => {
    ReactGa.initialize("UA-158955035-3");
    ReactGa.pageview(window.location.pathname + window.location.search);
  });

  return (
    <>
      <div className="container is-fluid" style={{ marginTop: "6%" }}>
        <img
          src={"./me-min.jpg"}
          style={{
            width: "160px",
            borderRadius: "50%",
            marginBottom: "15px",
          }}
        />

        <h1 className="title is-2">Ingus Jansons</h1>
        <h2 className="subtitle is-5 is-short" style={{ marginTop: "10px" }}>
          {getAge("2001/06/13")}, Working at Vodafone Group{" "}
          <img
            src={vf}
            width={20}
            style={{
              margin: "0px 3px 5px 3px",
              verticalAlign: "middle",
            }}
          />{" "}
          as a Software Engineer while also studying for my degree (B.Sc.) -
          Living in Newbury 🇬🇧
        </h2>

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
          Stack
        </h2>

        <div className="buttons">
          <img src={react} style={{ height: "64px" }}></img>
          <img
            src={mongodb}
            style={{ height: "55px", marginRight: "20px" }}
          ></img>
          <img
            src={express}
            style={{ height: "54px", marginRight: "20px" }}
          ></img>
          <img
            src={nodejs}
            style={{ height: "54px", marginRight: "20px" }}
          ></img>
          <img src={php} style={{ height: "62px", marginRight: "20px" }}></img>
          <img
            src={mysql}
            style={{ height: "50px", marginRight: "20px" }}
          ></img>
        </div>

        <p style={{ marginTop: "25px" }}>
          My technology stack changes as the waves in web development change,
          but being a fan of companies like Stripe and Uber for their design,{" "}
          <br />
          my stack will remain in the world of single page applications and REST
          APIs.
        </p>
        <h2
          className="title is-4"
          style={{ marginTop: "45px", marginBottom: "25px" }}
        >
          Projects
        </h2>

        <div className="columns">
          <div className="column">
            <LinkBox
              imgStyles={{ width: "110px" }}
              img={illumi}
              link="https://illumimedia.co/"
              title="Illumi Media"
              desc="Design powerhouse for creators"
              story="It started off at the age of 15 when I helped my friends with some graphic design work and quickly, through some inner friendship circles gained access to huge talent that needed branding. From there on, I built the Illumi Media brand."
            />
          </div>

          <div className="column">
            <LinkBox
              imgStyles={{ width: "60px" }}
              img={csites}
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
              desc="(Almost) accurate data about SpaceX launches"
              story="There's not much of a story to this one. I found a SpaceX API and wanted to play around with it and create a minimalistic, yet useful tracker for all flights and even a full-screen countdown. I did just that, designed and deployed through Netlify within 3 days!"
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
