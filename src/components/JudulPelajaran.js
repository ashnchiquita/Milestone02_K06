import {Row, Col} from "react-bootstrap";

const JudulPelajaran = (props) => {
  return (
    <Row className="mt-2 align-items-center px-2">
      <Col className="col-6 h1">{props.judul}</Col>
      <Col className="col-6 text-end crown-earned">
        {props.mahkota}/{props.batasMahkota}
      </Col>
    </Row>
  );
};

export default JudulPelajaran;