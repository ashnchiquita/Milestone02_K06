import Button from "react-bootstrap/Button";
import { Container, Row, Col, Card } from "react-bootstrap";
import profpic from "../assets/img/profpic.png";
import tick from "../assets/img/tick.png";

const Profil = () => {
  return (
    <Container className="my-4">
      <Card className="shadow">
        <Row>
          <Col xl={10} xs={8}>
            <Card.Body>
              <Card.Title>John Doe</Card.Title>
              <Card.Text className="text-muted ">@johndoe</Card.Text>
              <small>bergabung sejak Maret 2022</small>
            </Card.Body>
          </Col>
          <Col className="d-flex justify-content-center align-items-center">
            <Card.Img
              // variant="center"
              src={profpic}
              style={{ width: "80px" }}
            />
          </Col>
        </Row>
      </Card>

      <h2 className="mt-4">Statistik</h2>
      <Row>
        <Col xl={3} sm={4} xs={6}>
          <Card className="p-2 my-2 shadow">
            <Row>
              <Col className="d-flex justify-content-center align-items-center">
                <Card.Img src={tick} style={{ width: "30px" }} />
              </Col>
              <Col xl={9} xs={8}>
                <div className="bold">4</div>
                <span className="text-muted ">Day Streak</span>
              </Col>
            </Row>
          </Card>
        </Col>

        <Col xl={3} sm={4} xs={6}>
          <Card className="p-2 my-2 shadow">
            <Row>
              <Col className="d-flex justify-content-center align-items-center">
                <Card.Img src={tick} style={{ width: "30px" }} />
              </Col>
              <Col xl={9} xs={8}>
                <div className="bold">1432</div>
                <span className="text-muted ">Total XP</span>
              </Col>
            </Row>
          </Card>
        </Col>
        <Col xl={3} sm={4} xs={6}>
          <Card className="p-2 my-2 shadow">
            <Row>
              <Col className="d-flex justify-content-center align-items-center">
                <Card.Img src={tick} style={{ width: "30px" }} />
              </Col>
              <Col xl={9} xs={8}>
                <div className="bold">3</div>
                <span className="text-muted ">Kelas</span>
              </Col>
            </Row>
          </Card>
        </Col>
        <Col xl={3} sm={4} xs={6}>
          <Card className="p-2 my-2 shadow">
            <Row>
              <Col className="d-flex justify-content-center align-items-center">
                <Card.Img src={tick} style={{ width: "30px" }} />
              </Col>
              <Col xl={9} xs={8}>
                <div className="bold">6</div>
                <span className="text-muted ">Ranking</span>
              </Col>
            </Row>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Profil;
