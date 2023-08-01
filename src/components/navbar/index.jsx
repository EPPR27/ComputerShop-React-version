import {
  Nav,
  Navbar,
  NavDropdown,
  Offcanvas,
  Form,
  Container,
  Button,
} from "react-bootstrap";
import { FaUserAlt, FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
function NavBarMain() {
  const customStyles = {
    "--bs-dropdown-border-color": "transparent",
  };
  // let history = useHistory();
  // const handleClick = () =>{
  //   history.push()
  // }
  const generateNavDropItem = (item) => {
    <NavDropdown.Item>
      <Link to={item.link} className="text-decoration-none text-dark">
        {item.title}
      </Link>
    </NavDropdown.Item>;
  };
  return (
    <>
      <Navbar expand="false" className="bg-dark p-3">
        <Container fluid>
          <Navbar.Toggle
            aria-controls="NavBar"
            style={{ borderStyle: "none" }}
            className="fs-4 text-bg-light"
          />
          <Navbar.Offcanvas id={`NavBar`} placement="start">
            <Offcanvas.Header closeButton>
              <Offcanvas.Title className="fs-1 fw-bold">
                Productos
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-3">
                <NavDropdown
                  title="Computadoras"
                  className="fs-3"
                  style={customStyles}
                >
                  {[
                    {
                      title: "Computadora de Escritorio",
                      link: "/products/computers",
                    },
                    { title: "Laptops", link: "/products/computers" },
                    { title: "Tablets", link: "/products/computers" },
                  ].map(generateNavDropItem)}
                </NavDropdown>
                <NavDropdown title="Impresoras" className="fs-3">
                  {[
                    { title: "Impresoras", link: "/products" },
                    { title: "Tintas", link: "/products" },
                    { title: "Cartuchos", link: "/products" },
                  ].map(generateNavDropItem)}
                </NavDropdown>
                <NavDropdown title="Periféricos" className="fs-3">
                  {[
                    { title: "Mouse", link: "/products" },
                    { title: "Audifonos", link: "/products" },
                    { title: "Teclados", link: "/products" },
                  ].map(generateNavDropItem)}
                </NavDropdown>
                <NavDropdown title="Software" className="fs-3">
                  {[
                    { title: "Antivirus", link: "/products" },
                    { title: "Programas", link: "/products" },
                    { title: "Sistemas Operativos", link: "/products" },
                  ].map(generateNavDropItem)}
                </NavDropdown>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
          <Link to={"/login"} className="text-decoration-none text-light">
            <div className="d-flex align-items-center justify-content-center">
              <FaUserAlt className="fs-3" />
              <p className="m-1 pt-2 fs-5 fw-bold">Inicio Sesión</p>
            </div>
          </Link>
          <Link to={"/"}>
            <img
              style={{ width: "20vh", height: "15vh" }}
              src={require("../imgs/logo/LogoComputer3.png")}
              alt="logo"
            />
          </Link>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Producto"
              className="me-3 fs-50"
              aria-label="Search"
            />
            <Button variant="outline-success fs-50">Buscar</Button>
          </Form>
          <div className="mx-4">
            <FaShoppingCart className="fs-1 text-light" />
          </div>
        </Container>
      </Navbar>
    </>
  );
}
export default NavBarMain;
