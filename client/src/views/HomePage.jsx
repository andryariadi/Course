import { Container, Row, Col } from "react-bootstrap";
import Dream from "../assets/dream.png";
import { kelasTerbaru, dataSwiper } from "../data/index";
import { useNavigate } from "react-router-dom";
import FaqComponent from "../components/Faq";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";

export default function HomePage() {
  const navigate = useNavigate();

  const handleKelas = () => {
    navigate("/kelas");
  };
  return (
    <>
      <div className="homepage">
        <header>
          <Container>
            <Row className="header-box d-flex align-items-center justify-content-center pt-lg-5">
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
            <Row>
              <Col className="text-center">
                <button onClick={handleKelas} className="btn btn-primary rounded-5 btn-md">
                  Class List
                  <i className="fa-solid fa-chevron-right ms-1"></i>
                </button>
              </Col>
            </Row>
          </Container>
        </div>
        <div className="testimonial py-5">
          <Container>
            <Row>
              <Col>
                <h1 className="text-center fw-bold my-5">Testimonial</h1>
              </Col>
            </Row>
            <Row>
              <Swiper
                slidesPerView={1}
                spaceBetween={10}
                pagination={{
                  clickable: true,
                }}
                breakpoints={{
                  640: {
                    slidesPerView: 1,
                    spaceBetween: 20,
                  },
                  768: {
                    slidesPerView: 2,
                    spaceBetween: 40,
                  },
                  992: {
                    slidesPerView: 2,
                    spaceBetween: 50,
                  },
                  1200: {
                    slidesPerView: 3,
                    spaceBetween: 50,
                  },
                }}
                modules={[Pagination]}
                className="mySwiper"
              >
                {dataSwiper.map((swiper) => {
                  return (
                    <SwiperSlide key={swiper.id} className="shadow rounded-1">
                      <p className="desc">{swiper.desc}</p>
                      <div className="people">
                        <img src={swiper.image} alt="Swiper" />
                        <div>
                          <h5 className="mb-1">{swiper.name}</h5>
                          <p className="fw-bold m-0">{swiper.skill}</p>
                        </div>
                      </div>
                    </SwiperSlide>
                  );
                })}
              </Swiper>
            </Row>
          </Container>
        </div>

        {/* FAQ */}
        <FaqComponent />
        {/* FAQ */}
      </div>
    </>
  );
}
