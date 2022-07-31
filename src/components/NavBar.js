import { Navbar, Container, Nav } from "react-bootstrap";
import { Outlet, Link } from "react-router-dom";
import logo from "../media/init-white.png";

const Navigation = () => (
  <div>
    <Navbar variant="dark">
      <Container fluid>
        <Navbar.Brand className="brand">
          <img className="nav-brand-img" alt="brand's logo" src={logo} />
        </Navbar.Brand>
        <Nav className="me-auto" style={{ color: "white" }}>
          <Link to="/" className=" nav-bar-text mx-1">
            Home
          </Link>
          <Link className=" nav-bar-text mx-1" to="/about">
            About
          </Link>
        </Nav>
      </Container>
    </Navbar>
    <Outlet />
  </div>
);

export default Navigation;
