import React from "react";
import basket from "../assets/img/basket.png";
import orang from "../assets/img/orang.png";
import daun from "../assets/img/daun.png";
import kaktus from "../assets/img/kaktus.png";
import {Container, Card, Row, Col} from 'react-bootstrap';

const tantangan = [
    {
        image: orang,
        head: "Selesaikan 10 soal perkalian",
        body: "Dapatkan 1000XP bersama dengan 300 diamonds"
    }
]

const pencapaian = [
    {
        image: daun,
        head: "Menyelesaikan 10 soal pembagian puluhan",
        body: "Yeay! Kamu berhasil menjalankan tantangan ini"
    },
    {
        image: kaktus,
        head: "Menyelesaikan 10 soal pengurangan puluhan",
        body: "Yeay! Kamu berhasil menjalankan tantangan ini"
    },
    {
        image: basket,
        head: "Menyelesaikan 10 soal penjumlahan puluhan",
        body: "Yeay! Kamu berhasil menjalankan tantangan ini"
    }
]

function kotakTantangan(props) {
    return(
        <Card className="bg-transparent border border-4 border-dark-10 mb-3 rounded-5 p-3" >
            <Row className="mx-1 my-1 d-flex justify-content-center align-items-center">
                <Col className="d-flex justify-content-center align-items-center">
                    <Card.Img src = {props.image} style = {{ height: "auto"}}/>
                </Col>
                <Col xl={10} xs={8}>
                    <Card.Text className="font-weight-bold mb-1">{props.head}</Card.Text>
                    <small>{props.body}</small>
                </Col>
            </Row>
        </Card>
    );
}

const Tantangan = () => {
    return(
        <Container fluid className="px-4">
            <h2 className="font-weight-bold my-4">
                Tantangan
            </h2>
            {tantangan.map((item) => (kotakTantangan(item)))}
            <h2 className="font-weight-bold my-4">
                Pencapaian
            </h2>
            {pencapaian.map((item) => (kotakTantangan(item)))}
        </Container>
    );
}

export default Tantangan;