import React from "react";
import Nav from 'react-bootstrap/Nav';
import crown from "../assets/img/crown.png";
import horse from "../assets/img/horse.png";
import diamond from "../assets/img/diamond.png";
import pencil from "../assets/img/pencil.png";
import penjumlahan from "../assets/img/penjumlahan.png";
import satuan from "../assets/img/satuan.png";
import { Row, Col, Card, Container, Border } from "react-bootstrap";
import "./style.css";


const Kelas = () => {
  return (
    <>
      <Container fluid className="homepage-header p-3 mb-5 align-items-center">
        <Row>
          <Col className="col-8 justify-content-center">Matematika
          </Col>
          <Col className="col-2 text-end">
            <img src={crown} alt="crown"></img>
            3
          </Col>
          <Col className="col-2 text-end">
            <img src={diamond} alt="diamond"></img>
            213
          </Col>
        </Row>
      </Container>

      <Container fluid className="mx-0 px-5" >
        <Row className="align-items-center" >
          <Col className="d-flex justify-content-center" >
            <Card className="p-1 mb-5 rounded-3 shadow justify-content-between border-secondary border-1" style={{ backgroundColor: "#E9E8E8", height: '200px', width: '300px' }}>
              <Row className="d-flex justify-content-center position-relative">
                <img className="position-absolute top-0 start-50 translate-middle" style = {{width: '50%'}}src={horse} alt="horse">
                </img>
              </Row>
              <Row className="mt-4 d-flex align-items-center justify-content-center">
                BAB 1
              </Row>
              <Row className="px-2 ">
                <Col className="d-flex justify-content-center">
                  <div className="kelas_completion">
                    <div className="kelas_comp-progress"></div>
                    <img src={crown} alt="crown"/>
                  </div>
                </Col>
                <Col className="d-flex justify-content-end">
                  15/40
                </Col>
              </Row>
            </Card>
          </Col>
        </Row>

        <Row className="align-items-center">
          <Col className="d-flex justify-content-center">
          <Card className="p-1 mb-5 shadow justify-content-between rounded-circle border-secondary border-1" style={{ backgroundColor: "#72BFC7", height: '211px', width: '211px' }}>
              <Row className="d-flex justify-content-center position-relative">
                <img className="position-absolute top-0 start-50 translate-middle" style = {{width: '50%'}}src={pencil} alt="pencil">
                </img>
              </Row>
              <Row className="mt-4 d-flex align-items-center justify-content-center">
                Bilangan
              </Row>
              <Row className="px-2 ">
                <Col className="d-flex justify-content-center">
                </Col>
                <Col className="d-flex justify-content-center">
                <img src={crown} alt="crown"/>
                </Col>
              </Row>
            </Card>
          </Col>
        </Row>

        <Row className="align-items-center">
          <Col className="col-6 d-flex justify-content-center">
            <Card className="p-1 mb-5 shadow justify-content-between rounded-circle border-secondary border-1" style={{ backgroundColor: "#72BFC7", height: '211px', width: '211px' }}>
              <Row className="d-flex justify-content-center position-relative">
                <img className="position-absolute top-0 start-50 translate-middle" style = {{width: '50%'}}src={penjumlahan} alt="penjumlahan">
                </img>
              </Row>
              <Row className="mt-4 d-flex align-items-center justify-content-center">
                Penjumlahan
              </Row>
              <Row className="px-2 ">
                <Col className="d-flex justify-content-center">
                </Col>
                <Col className="d-flex justify-content-center">
                  <img src={crown} alt="crown"/>
                </Col>
              </Row>
            </Card>
          </Col>
          <Col className="col-6 d-flex justify-content-center">
            <Card className="p-1 mb-5 rounded-circle shadow justify-content-between border-secondary border-1" style={{ backgroundColor: "#72BFC7", height: '211px', width: '211px' }}>
              <Row className="d-flex justify-content-center position-relative">
                <img className="position-absolute top-0 start-50 translate-middle" style = {{width: '50%'}}src={satuan} alt="satuan">
                </img>
              </Row>
              <Row className="mt-4 d-flex align-items-center justify-content-center">
                Satuan Panjang
              </Row>
              <Row className="px-2 ">
                <Col className="d-flex justify-content-center">
                </Col>
                <Col className="d-flex justify-content-center">
                  <img src={crown} alt="crown"/>
                </Col>
              </Row>
            </Card>
          </Col>
        </Row>
      </Container>

      
    </>
  );
};

export default Kelas;
