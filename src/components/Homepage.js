import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import streak from "../assets/svg/streak.svg";
import treasure from "../assets/svg/treasure.svg";
import heart from "../assets/svg/heart.svg";
import infty from "../assets/svg/infty.svg";
import bab1_mtk from "../assets/img/bab1_mtk.png";
import lock from "../assets/svg/lock.svg";

const Progression = (props) => {
  let prog_svg = (
    <div style={props.style}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 500 125"
        className="progression"
      >
        <defs>
          <linearGradient id="lg">
            <stop offset="0%" stopColor="#ECC055" />
            <stop offset={props.progress} stopColor="#ECC055" />
            <stop offset="0%" stopColor="#C4C4C4" />
            <stop offset="100%" stopColor="#C4C4C4" />
          </linearGradient>
        </defs>
        <path
          fill="url(#lg)"
          stroke="#E5E1E0"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="10px"
          d="M115 55L455 55A25 25 180 0 1 455 105L105 105L115 25L85 55L60 5L35 55L5 25L20 105H105"
        />
      </svg>
    </div>
  );
  return prog_svg;
};

const Bab = (props) => {
  let not_locked_elements = (
    <>
      <h2
        style={{
          position: "absolute",
          top: "5%"
        }}
      >
        Bab {props.bab}
      </h2>
      <img
        src={props.logo}
        alt="logo"
        className="my-2"
        style={{
          maxWidth: "100%",
          display: "block",
          width: "70%",
          objectFit: "contain",
          position: "absolute",
          top: "15%"
        }}
      />
      <Progression 
        progress={props.progress} 
        style={{
          position: "absolute",
          width: "90%",
          display: "block",
          bottom: "10%"
        }}
      />
      <a href="/kelas" className="stretched-link" style={{ fontSize: 0 }}>
        link
      </a>
    </>
  );
  let locked_elements = (
    <>
      <img
        src={lock}
        alt="lock"
        style={{ width: "30%", position: "absolute", top: "30%" }}
      />
    </>
  );
  return (
    <Col className="d-flex justify-content-center align-items-center col-lg-3 col-md-4 col-6 mb-3">
      <div
        className="shadow mt-3 bab-materi d-flex align-items-center justify-content-center"
        style={{
          border: "1px solid #c4c4c4",
          paddingTop: "120%",
          position: "relative",
          boxSizing: "border-box",
        }}
      >
        {props.locked ? locked_elements : not_locked_elements}
      </div>
    </Col>
  );
};

const Homepage = () => {
  return (
    <>
      <Container fluid className="homepage-header p-3 m-0">
        <Row className="m-0 p-0">
          <Col className="d-flex justify-content-center align-items-center">
            <img src={streak} alt="streak" />
            <span className="info-homepage" style={{ color: "#EB9F4A" }}>
              3
            </span>
          </Col>
          <Col className="d-flex justify-content-center align-items-center">
            <img src={treasure} alt="treasure" />
            <span className="info-homepage" style={{ color: "#338F9B" }}>
              1432 XP
            </span>
          </Col>
          <Col className="d-flex justify-content-center align-items-center">
            <img src={heart} alt="heart" />
            <span
              className="info-homepage"
              style={{ color: "#DC3F00", top: "-0.1em" }}
            >
              <img src={infty} alt="infinity" />
            </span>
          </Col>
        </Row>
      </Container>
      <Container fluid className="mt-4 px-4 px-lg-5">
        <Row className="align-items-center px-2">
          <Col className="col-6 h1">Matematika</Col>
          <Col className="col-6 text-end crown-earned">18/40</Col>
        </Row>
        <Row>
            <Bab bab="1" logo={bab1_mtk} progress="30%" />
            <Bab locked />
            <Bab locked />
            <Bab locked />
        </Row>
      </Container>
    </>
  );
};

export default Homepage;
