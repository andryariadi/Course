import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Course from "../assets/course.svg";
import { NavLink } from "react-router-dom";
import Button from "react-bootstrap/Button";
import { useState, useEffect } from "react";

export default function NavbarPage() {
  const [changeColor, setChangeColor] = useState(false);

  const changeBackgrounColor = () => {
    if (window.scrollY > 10) {
      setChangeColor(true);
    } else {
      setChangeColor(false);
    }
  };

  useEffect(() => {
    changeBackgrounColor();
    window.addEventListener("scroll", changeBackgrounColor);
  });
  return (
    <>
      <Navbar expand="lg" className={changeColor ? "color-active" : ""}>
        <Container>
          <Navbar.Brand>
            <img src={Course} width="130" height="40" className="d-inline-block align-top" alt="Course" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mx-auto text-center">
              <NavLink className={({ isActive, isPending }) => (isPending ? "pending" : isActive ? "active" : "")} end to="/">
                Home
              </NavLink>
              <NavLink className={({ isActive, isPending }) => (isPending ? "pending" : isActive ? "active" : "")} end to="/kelas">
                Kelas
              </NavLink>
              <NavLink className={({ isActive, isPending }) => (isPending ? "pending" : isActive ? "active" : "")} end to="testimoni">
                Testimonial
              </NavLink>
              <NavLink className={({ isActive, isPending }) => (isPending ? "pending" : isActive ? "active" : "")} end to="/faq">
                FAQ
              </NavLink>
              <NavLink className={({ isActive, isPending }) => (isPending ? "pending" : isActive ? "active" : "")} end to="/syarat">
                Syarat & Ketentuan
              </NavLink>
            </Nav>
            <div className="text-center">
              <Button variant="outline-danger">Join Us</Button>{" "}
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}
