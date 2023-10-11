import { Container, Row, Col } from "react-bootstrap";
import Dream from "../assets/dream.png";
import { kelasTerbaru } from "../data/index";

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
        <div className="kelas w-100 min-vh-100">
          <Container>
            <Row>
              <Col>
                <h1 className="text-center fw-bold">Kelas Terbaru</h1>
                <p className="text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              </Col>
            </Row>
            <Row>
              {kelasTerbaru.map((kelas) => {
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
      </div>
    </>
  );
}
