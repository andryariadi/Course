import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <>
      <div className="footer py-5">
        <Container>
          <Row className="d-flex justify-content-between">
            <Col lg="5">
              <h3 className="fw-bold">Course</h3>
              <p className="desc">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloribus, quia error quaerat delectus iusto esse excepturi deserunt asperiores quidem sit.</p>
              <div className="number mb-1 mt-4">
                <Link>
                  <i className="fa-brands fa-whatsapp"></i>
                  <p className="m-0">+62 123-456-789</p>
                </Link>
              </div>
              <div className="email">
                <Link>
                  <i className="fa-regular fa-envelope"></i>
                  <p className="m-0">example@gmail.com</p>
                </Link>
              </div>
            </Col>
            <Col className="d-flex flex-column col-lg-2 col mt-lg-0 mt-5">
              <h5 className="fw-bold">Menu</h5>
              <Link to="/">Home</Link>
              <Link to="/kelas">Kelas</Link>
              <Link to="/testimonial">Testimonial</Link>
              <Link to="/faq">FAQ</Link>
              <Link to="/syarat">Syarat & Ketentuan</Link>
            </Col>
            <Col lg="4" className="mt-lg-0 mt-5">
              <h5 className="fw-bold mb-3">Subscribe untuk Info Menarik</h5>
              <div className="sub">
                <input type="text" placeholder="Subscribe..." />
                <button className="btn btn-danger rounded-0 rounded-end">Subscribe</button>
              </div>
              <div className="social mt-3">
                <i className="fa-brands fa-instagram"></i>
                <i className="fa-brands fa-twitter"></i>
                <i className="fa-brands fa-linkedin"></i>
                <i className="fa-brands fa-youtube"></i>
              </div>
            </Col>
          </Row>
          <Row>
            <Col>
              <p className="text-center px-md-0 px-3">
                &copy; Copyright {new Date().getFullYear()} <strong>@Andry Ariadi</strong> , All Right Reserved
              </p>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}
