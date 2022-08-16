import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import JudulPelajaran from "./JudulPelajaran";
import Bab from "./Bab";
import streak from "../assets/svg/streak.svg";
import treasure from "../assets/svg/treasure.svg";
import heart from "../assets/svg/heart.svg";
import infty from "../assets/svg/infty.svg";
import mtkipa from "../assets/img/mtkipa.png";
import pkn from "../assets/img/pkn.png";

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
        <JudulPelajaran judul="Matematika" mahkota={18} batasMahkota={40} />
        <Row>
          <Bab bab="1" logo={mtkipa} progress={18/40*100} />
          <Bab locked />
          <Bab locked />
          <Bab locked />
        </Row>
        <JudulPelajaran judul="PKN" mahkota={36} batasMahkota={36} />
        <Row>
          <Bab bab="1" logo={pkn} progress={36*36*100} />
          <Bab locked />
          <Bab locked />
          <Bab locked />
        </Row>
        <JudulPelajaran judul="IPA" mahkota={10} batasMahkota={51} />
        <Row>
          <Bab bab="1" logo={mtkipa} progress={10/51*100} />
          <Bab locked />
          <Bab locked />
          <Bab locked />
        </Row>
      </Container>
    </>
  );
};

export default Homepage;
