import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import A from '../assets/svg/A.svg';

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
                    <Col className="d-flex justify-content-center mb-3 border border-dark p-3 rounded-pill">276</Col>
                </Row>
                <Row>
                    <Col className="d-flex justify-content-center mb-3 border border-dark p-3 rounded-pill">376</Col>
                </Row>
                <Row>
                    <Col className="d-flex justify-content-center mb-3 border border-dark p-3 rounded-pill">256</Col>
                </Row>
                <Row>
                    <Col className="d-flex justify-content-center mb-3 border border-dark p-3 rounded-pill">356</Col>
                </Row>
            </Container>
        </>
    );
};

export default Latihan;
