import { Container, Row, Col } from "react-bootstrap";
import { semuaKelas } from "../data/index";

export default function KelasPage() {
  return (
    <>
      <div className="semua-kelas min-vh-100">
        <Container>
          <Row>
            <Col>
              <h1 className="fw-bold text-center">Semua Kelas</h1>
              <p className="text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </Col>
          </Row>
          <Row>
            {semuaKelas.map((kelas) => {
              return (
                <Col key={kelas.id}>
                  <img src={kelas.image} alt="Kelas" className="mb-5 rounded-1" />
                  <div className="start px-3 mb-2">
                    <i className={kelas.star1}></i>
                    <i className={kelas.star2}></i>
                    <i className={kelas.star3}></i>
                    <i className={kelas.star4}></i>
                    <i className={kelas.star5}></i>
                  </div>
                  <h5 className="px-3 mb-5">{kelas.title}</h5>
                  <div className="d-flex justify-content-between align-items-center px-3 pb-3">
                    <p className="text-primary fw-bold m-0">{kelas.price}</p>
                    <button className="btn btn-outline-danger rounded-1">{kelas.buy}</button>
                  </div>
                </Col>
              );
            })}
          </Row>
        </Container>
      </div>
    </>
  );
}
