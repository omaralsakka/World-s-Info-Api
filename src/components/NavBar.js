import { Navbar } from "react-bootstrap";
import logo from "../media/init-white.png";

const style = {
  width: "20%",
  minWidth: "20px",
};

const Nav = () => (
  <Navbar variant="dark">
    <Navbar.Brand className=" Brand" href="/">
      <img alt="brand's logo" src={logo} style={style} />
    </Navbar.Brand>
  </Navbar>
);

export default Nav;
