import { Container, Row, Col } from "react-bootstrap";
import { testimonial } from "../data/index";
import { useEffect } from "react";

export default function TestimoniPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <div className="semua-testimonial">
        <Container>
          <Row>
            <Col>
              <h1 className="fw-bold text-center animate__animated animate__fadeInUp">Semua Testimonial</h1>
              <p className="text-center animate__animated animate__fadeInUp">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </Col>
          </Row>
          <Row className="row-cols-lg-3 row-cols-1">
            {testimonial.map((swiper) => {
              return (
                <Col key={swiper.id} className="mb-5 shadow rounded-1" data-aos="fade-up" data-aos-duration="1000">
                  <div className="people py-4">
                    <img src={swiper.image} alt="Swiper" />
                    <div>
                      <h5 className="mb-1">{swiper.name}</h5>
                      <p className="fw-bold m-0">{swiper.skill}</p>
                    </div>
                  </div>
                  <p className="desc pb-3">{swiper.desc}</p>
                </Col>
              );
            })}
          </Row>
        </Container>
      </div>
    </>
  );
}
