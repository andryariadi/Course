import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Course from "../assets/course.svg";
import { NavLink } from "react-router-dom";
import Button from "react-bootstrap/Button";

export default function NavbarPage() {
  return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="">
            <img src={Course} width="130" height="40" className="d-inline-block align-top" alt="Course" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mx-auto">
              <NavLink to="/">Home</NavLink>
              <NavLink to="/kelas">Kelas</NavLink>
              <NavLink to="testimoni">Testimonial</NavLink>
              <NavLink to="/faq">FAQ</NavLink>
              <NavLink to="/syarat">Syarat & Ketentuan</NavLink>
            </Nav>
            <Button variant="outline-danger">Join Us</Button>{" "}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}
