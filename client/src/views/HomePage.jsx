import { Container, Row, Col } from "react-bootstrap";
import Dream from "../assets/dream.png";

export default function HomePage() {
  return (
    <>
      <div className="homepage">
        <header>
          <Container>
            <Row className="header-box d-flex align-items-center justify-content-center">
              <Col lg="6">
                <h1 className="mb-4">
                  Temukan <br /> <span>Bakat Terbaikmu</span> <br /> Bersama Kami!
                </h1>
                <p className="mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste vero animi dolore veniam impedit sit.</p>
                <div className="btn-header">
                  <button className="btn btn-danger btn-md me-2">Lihat Kelas</button>
                  <button className="btn btn-outline-danger btn-md">Lihat Promo</button>
                </div>
              </Col>
              <Col lg="6" className="lg-pt-0 pt-3">
                <img src={Dream} alt="Dream" />
              </Col>
            </Row>
          </Container>
        </header>
        <div className="kelas w-100 min-vh-100"></div>
      </div>
    </>
  );
}
