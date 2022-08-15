import React from "react";
import Nav from 'react-bootstrap/Nav';
import crown from "../assets/img/crown.png";
import horse from "../assets/img/horse.png";
import { Row, Col, Card, Container } from "react-bootstrap";
import "./style.css";


const Kelas = () => {
  return (
    <>
      <Container fluid className="homepage-header p-5 mb-5 align-items-center">
        <Row>
          <Col className="col-8 justify-content-center">Matematika
          </Col>
          <Col className="col-2 text-end">Logo1
          </Col>
          <Col className="col-2 text-end">Logo2
          </Col>
        </Row>
      </Container>

      <Container fluid className="mx-0 px-5">
        <Row className="align-items-center">
          <Col className="d-flex justify-content-center">
            <Card className="justify-content-between border-secondary" style={{ height: '128px', width: '211px' }}>
              <Row className="d-flex justify-content-center">
                <img className="posistion-absolute translate-middle" style = {{width: '50%'}}src={horse} alt="horse">
                </img>
              </Row>
              <Row className="d-flex align-items-center justify-content-center">
              BAB 1
              </Row>
              <Row>
              <Col className="d-flex justify-content-center">
                <div className="kelas_completion">
                  <div className="kelas_comp-progress"></div>
                  <img src={crown} alt="crown"/>
                </div>
              </Col>
              <Col className="d-flex justify-content-center">18/40
              </Col>
              </Row>
            </Card>
          </Col>
        </Row>
        <Row className="align-items-center">
          <Col className="d-flex justify-content-center">Bilangan</Col>
        </Row>
        <Row className="align-items-center">
          <Col className="col-6 d-flex justify-content-center">Penjumlahan</Col>
          <Col className="col-6 d-flex justify-content-center">Satuan Panjang</Col>
        </Row>
      </Container>

      <Container fluid className="mt-5">
        <Row>
          <Col className="col-12 p-3 bg-dark text-white">
          <Nav className="justify-content-center align-items-center" activeKey="/home">
            <Nav.Item>
              <Nav.Link href="/home">Home</Nav.Link>
            </Nav.Item> 
            <Nav.Item>
              <Nav.Link href="/latihan">Latihan</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="/profil">Profil</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="/pengaturan">Pengaturan</Nav.Link>
            </Nav.Item>
          </Nav>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Kelas;
