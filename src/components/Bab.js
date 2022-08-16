import lock from "../assets/svg/lock.svg";
import Progression from "./Progression";
import { Col } from "react-bootstrap";

const Bab = (props) => {
  let not_locked_elements = (
    <>
      <h2
        style={{
          position: "absolute",
          top: "5%",
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
          top: "15%",
        }}
      />
      <Progression
        progress={props.progress}
        style={{
          position: "absolute",
          width: "90%",
          display: "block",
          bottom: "10%",
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

export default Bab;