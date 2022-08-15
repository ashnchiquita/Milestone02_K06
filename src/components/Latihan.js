import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import './style.css';
import Nav from "react-bootstrap/Nav";

const Latihan = () => {
    return (
        <>
            <Container fluid className="homepage-header p-3 m-0">
                <Row className="m-0 p-0">
                    <h2 class="text-center">Latihan Soal</h2>
                </Row>
            </Container>
            <Container fluid className="mt-4 px-4 px-lg-5">
                <Row>
                    <Col className="d-flex justify-content-center mb-3 border border-dark p-3 rounded"> Hasil dari 12 x 23 adalah = ...</Col>
                </Row>
                <Row>
                    <Col className="d-flex mb-2  p-1"> Pilihan Jawaban : </Col>
                </Row>
                <Row>
                    <Col className="d-flex justify-content-center mb-3 border border-dark p-3 rounded-pill">
                        <Nav.Link href="/Jawabanbenar">276</Nav.Link>
                    </Col>
                </Row>
                <Row>
                    <Col className="d-flex justify-content-center mb-3 border border-dark p-3 rounded-pill">
                        <Nav.Link href="/Jawabansalaha">376</Nav.Link>
                    </Col>
                </Row>
                <Row>
                    <Col className="d-flex justify-content-center mb-3 border border-dark p-3 rounded-pill">
                        <Nav.Link href="/Jawabansalahb">256</Nav.Link>
                    </Col>
                </Row>
                <Row>
                    <Col className="d-flex justify-content-center mb-3 border border-dark p-3 rounded-pill">
                        <Nav.Link href="/Jawabansalahc">356</Nav.Link>
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default Latihan;
