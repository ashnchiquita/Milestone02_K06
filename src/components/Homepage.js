import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import streak from "../assets/svg/streak.svg";
import treasure from "../assets/svg/treasure.svg";
import heart from "../assets/svg/heart.svg";
import infty from "../assets/svg/infty.svg";
import bab1_mtk from "../assets/img/bab1_mtk.png";
import crown from "../assets/svg/crown.svg";
import lock from "../assets/svg/lock.svg";

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
          <Col className="d-flex justify-content-center col-lg-3 col-md-4 col-6 mb-3">
            <Card className="shadow py-3 mt-3 align-items-center justify-content-center bab-materi">
              <h2>Bab 1</h2>
              <img
                src={bab1_mtk}
                alt="Bab 1"
                style={{ width: "70%", objectFit: "cover" }}
                className="my-2"
              />
              <div className="completion">
                <div className="comp-progress"></div>
                <img src={crown} alt="crown" />
              </div>
              <a href="/kelas" className="stretched-link" style={{fontSize: 0}}>link</a>
            </Card>
          </Col>
          <Col className="d-flex justify-content-center col-lg-3 col-md-4 col-6 mb-3">
            <Card className="shadow py-3 mt-3 align-items-center justify-content-center bab-materi">
              <img src={lock} alt="lock" style={{width: "30%"}} />
            </Card>
          </Col>
          <Col className="d-flex justify-content-center col-lg-3 col-md-4 col-6 mb-3">
            <Card className="shadow py-3 mt-3 align-items-center justify-content-center bab-materi">
              <img src={lock} alt="lock" style={{width: "30%"}} />
            </Card>
          </Col>
          <Col className="d-flex justify-content-center col-lg-3 col-md-4 col-6 mb-3">
            <Card className="shadow py-3 mt-3 align-items-center justify-content-center bab-materi">
              <img src={lock} alt="lock" style={{width: "30%"}} />
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Homepage;
