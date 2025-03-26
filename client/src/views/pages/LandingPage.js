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
  Modal,
  ModalHeader,
  ModalBody,
  Input,
  ModalFooter,
  FormGroup
} from "reactstrap";
import ReactPlayer from "react-player/youtube";
import { isMobile } from "react-device-detect";
import logo from "assets/img/landing/logo-main.jpg";
import life from "assets/img/landing/life.png";
import scoutMeIn from "assets/img/landing/scout-me-in.jpg";
import * as eventService from "service/eventService";
import "assets/css/landingPage.css"; 
const LandingPage = () => {
  const [loginModal, setLoginModal] = React.useState(false);
  const [password, setPassword] = React.useState("");
  const [passwordError, setPasswordError] = React.useState(false);

  const handleEmail = () => {
    window.location.href =
      "mailto:temeculapack301cubscouts@gmail.com?subject=Cub Scout Membership Inquiry&body=Thank you for your interest in joining Cub Scout Pack 301. For additional information, please send us a message!";
  };

  const handleUserLogin = async () => {
    await eventService
      .verifyPortalLogin(password)
      .then((res) => {
        console.log(res);

        if (res.success === true) {
          window.location.href = "/admin/events";
        }
      })
      .catch((err) => {
        setPasswordError(true);
      });
  };

  const handleLoginModal = () => {
    setLoginModal(!loginModal);
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundSize: "cover",
        backgroundImage: `url(${require("assets/img/landing/flag.JPG")})`
      }}
    >
      <Modal
        centered
        className="content"
        isOpen={loginModal}
        toggle={() => {
          handleLoginModal();
        }}
      >
        <ModalHeader>Parent Login</ModalHeader>
        <ModalBody>
          <Container className="text-center">
            {passwordError ? <p style={{ color: "red" }}>Incorrect Password</p> : null}
            <FormGroup>
              <Input
                placeholder="Password"
                onInput={(e) => {
                  if (e.target.value.length === 0) {
                    setPasswordError(false);
                  }
                  setPassword(e.target.value);
                }}
                type="password"
                autoComplete="off"
              />
            </FormGroup>
          </Container>
        </ModalBody>
        <ModalFooter>
          <Row className="pr-3">
            <Button
              style={{ color: "blue", backgroundColor: "gold" }}
              size="md"
              className="btn-round"
              onClick={() => {
                handleUserLogin();
              }}
            >
              Login
            </Button>
            <Button
              style={{ color: "blue", backgroundColor: "gold" }}
              size="md"
              className="btn-round"
              onClick={() => {
                handleLoginModal();
              }}
            >
              Cancel
            </Button>
          </Row>
        </ModalFooter>
      </Modal>
      <Navbar
        style={{ backgroundImage: `url(${require("assets/img/landing/banner.jpg")})` }}
        light
        expand="md"
      ></Navbar>

      <Row>
        <Col lg={3} className="ml-auto" sm={6}></Col>
      </Row>
      <div className="jumbotron">
        {/* <Jumbotron style={{ backgroundColor: "transparent" }} className="text-center"> */}
        <h1 style={{ color: "gold" }}>
          <strong style={{ textShadow: "1px 1px 2px black" }}>Join Cub Scouts Pack 301</strong>
        </h1>
        {!isMobile ? (
          <h2 style={{ color: "black", textShadow: "1px 1px 2px gold" }}>
            Cub Scouts fosters leadership and teamwork in a fun, supportive environment. It promotes
            outdoor adventures, skill-building, and community service, instilling lifelong values.
            Through engaging activities', your child will develop confidence, responsibility, and a
            sense of belonging.
          </h2>
        ) : (
          <p style={{ color: "black", textShadow: "1px 1px 2px gold" }}>
            Cub Scouts fosters leadership and teamwork in a fun, supportive environment. It promotes
            outdoor adventures, skill-building, and community service, instilling lifelong values.
            Through engaging activities', your child will develop confidence, responsibility, and a
            sense of belonging.
          </p>
        )}
        {/* </Jumbotron> */}
      </div>
      <div style={{ justifySelf: "center" }}>
        <ReactPlayer
          width={isMobile ? "90vw" : "60vw"}
          height={"60vh"}
          url={"https://youtu.be/CglP4jgO4H0"}
        />
      </div>
      <div style={{ paddingTop: "10vh" }} className="text-center ">
        <Button
          style={{ color: "blue", backgroundColor: "gold" }}
          size="lg"
          className="btn-round"
          color="warning"
          onClick={() => {
            handleEmail();
          }}
        >
          FIND OUT MORE
        </Button>
      </div>
      <Container className="my-5">
        <h2
          style={{ color: "gold", textShadow: "1px 1px 2px black", fontWeight: "bold" }}
          className="text-center"
        >
          <strong>About Us</strong>
        </h2>
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
                  <strong> The Scout Oath</strong> On my honor I will do my best to do my duty to
                  god and my country and to obey the Scout Law; to help people at all times; to keep
                  myself physically strong, mentally awake, and morally straight.
                  <br />
                  <strong> The Scout Law</strong> A Scout is: trustworthy, loyal, helpful, friendly,
                  courteous, kind, obedient, cheerful, thrifty, brave, clean, reverent.
                </CardText>
              </CardBody>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col className="col-md-4" />
          <Col sm={8} md={4} className="col-md-4 text-center">
            <Button
              style={{ color: "blue", backgroundColor: "gold" }}
              size="lg"
              className="btn-round"
              color="warning"
              onClick={(e) => {
                handleLoginModal(e);
              }}
            >
              Parent Portal
            </Button>
          </Col>
          <Col className="col-md-4" />
        </Row>
      </Container>
      <Container className="text-center">
        <p style={{ color: "white" }}>
          Copyright © {1900 + new Date().getYear()} Temecula Cub Scouts Pack 301 - All Rights
          Reserved.
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
