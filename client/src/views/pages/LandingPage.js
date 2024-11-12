// src/LandingPage.js

import React from "react";
import {
  Container,
  Jumbotron,
  Button,
  Card,
  CardBody,
  CardTitle,
  CardText,
  Row,
  Col,
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from "reactstrap";
import ReactPlayer from "react-player/youtube";

import logo from "assets/img/landing/logo-main.jpg";
import life from "assets/img/landing/life.png";
import scoutMeIn from "assets/img/landing/scout-me-in.jpg";
const LandingPage = () => {
  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundSize: "cover",
        backgroundImage: `url(${require("assets/img/landing/flag.JPG")})`
      }}
    >
      <Navbar
        style={{ backgroundImage: `url(${require("assets/img/landing/banner.jpg")})` }}
        light
        expand="md"
      ></Navbar>

      <Jumbotron style={{ backgroundColor: "transparent" }} className="text-center">
        <h1 style={{ color: "gold" }}>
          <strong>Join Cub Scouts Pack 301</strong>
        </h1>
        <h2>
          Cub Scouts fosters leadership and teamwork in a fun, supportive environment. It promotes
          outdoor adventures, skill-building, and community service, instilling lifelong values.
          Through engaging activities', your child will develop confidence, responsibility, and a
          sense of belonging.
        </h2>
      </Jumbotron>
      <Container >
        <ReactPlayer width={'60vw'} height={'60vh'} url={"https://youtu.be/e4o2JqQP0UA"} />
      </Container>

      <Container className="my-5">
        <h2 className="text-center">About Us</h2>
        <Row>
          <Col md="4">
            <Card>
              <CardBody className="text-center">
                <img style={{ width: "20vh" }} src={logo} />
                <CardTitle tag="h5">Our History</CardTitle>
                <CardText>
                  Cub Scouts Pack 301 has been serving the community of Temecula since 1977. We are
                  chartered by The Rotary Club of Temecula. Cub Scouts Pack 301 teaches the
                  fundamentals of scouting through fun activities, family, and community
                  involvement. Cub Scouts Pack 301 is a boy-only pack, servicing any elementary
                  school within the community.
                </CardText>
              </CardBody>
            </Card>
          </Col>
          <Col md="4">
            <Card>
              <CardBody className="text-center">
                <img style={{ width: "20vh" }} src={life} />
                <CardTitle tag="h5">Our mission</CardTitle>
                <CardText>
                  The mission of the Boy Scouts of America is to prepare young people to make
                  ethical and moral choices over their lifetimes by instilling in them the values of
                  the Scout Oath and Law.
                </CardText>
              </CardBody>
            </Card>
          </Col>
          <Col md="4">
            <Card>
              <CardBody className="text-center">
                <img style={{ width: "20vh" }} src={scoutMeIn} />
                <CardTitle tag="h5">Values</CardTitle>
                <CardText>
                  <p>
                    <strong> The Scout Oath</strong> On my honor I will do my best to do my duty to
                    god and my country and to obey the Scout Law; to help people at all times; to
                    keep myself physically strong, mentally awake, and morally straight.
                  </p>
                  <br />
                  <p>
                    <strong> The Scout Law</strong> A Scout is: trustworthy, loyal, helpful,
                    friendly, courteous, kind, obedient, cheerful, thrifty, brave, clean, reverent.
                  </p>
                </CardText>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
      <Container className="text-center">
        <p style={{ color: "white" }}>
          Copyright © 2024 Temecula Cub Scouts Pack 301 - All Rights Reserved.
        </p>
      </Container>
      <footer
        style={{ backgroundImage: `url(${require("assets/img/landing/banner.jpg")})` }}
        className="text-center py-4"
      ></footer>
    </div>
  );
};

export default LandingPage;
