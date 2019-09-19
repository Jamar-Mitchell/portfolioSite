import React from "react";
import { Card, Container, Segment, Header } from "semantic-ui-react";
import "./index.css";
import { Particles, Stats } from "react-particles-js";

const materialSpec = require("./images/materialspec.png");
const white = require("./images/white.png");
const tapattend = require("./images/tapattend.png");
const baro = require("./images/baro.png");
const cookhelper = require("./images/cookhelper.png");

const Projects = () => (
  <div>
    <div className="content">
      <Container style={{ "padding-bottom": "20px" }}>
        <Header
          className="header"
          style={{
            "font-size": "50px",
            "font-family": "Montserrat",
            "padding-bottom": "20px",
            color: "#006E6D"
          }}
        >
          Projects
        </Header>
      </Container>
      <Container>
        <Card.Group centered itemsPerRow={3} className="cardfont">
          <Card raised image={tapattend} />
          <Card raised image={materialSpec} className="moreShadow" />
          <Card raised image={baro} className="moreShadow" />
          <Card raised image={cookhelper} className="moreShadow" />
          <Card raised image={white} className="moreShadow" />
        </Card.Group>
      </Container>
    </div>
  </div>
);

export default Projects;
