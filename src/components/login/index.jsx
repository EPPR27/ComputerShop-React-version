import { useState } from "react";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import NavBar from "../navbar";
import Footer from "../footer";
import InputGroup from "react-bootstrap/InputGroup";
function Login() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [showSucess, setShowSucess] = useState(false);

  const handleCloseSucess = () => setShowSucess(false);
  const handleShowSucess = () => setShowSucess(true);
  return (
    <div className="bg-secondary">
      <NavBar />
      <div
        className="d-grid justify-content-center align-items-center"
        style={{ margin: "100px" }}
      >
        <div className="p-5 bg-light">
          <h3 className="text-danger text-center mb-5">Iniciar Sesión</h3>
          <FloatingLabel
            controlId="floatingInput"
            label="Correo Electónico"
            className="mb-3"
          >
            <Form.Control type="email" placeholder="name@example.com" />
          </FloatingLabel>
          <FloatingLabel controlId="floatingPassword" label="Contraseña">
            <Form.Control type="password" placeholder="contraseña" />
          </FloatingLabel>
          <Button
            className="mt-1 text-primary"
            style={{ all: "unset" }}
            onClick={handleShow}
          >
            Registrarse
          </Button>

          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Registrarme</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form>
                <InputGroup className="mb-3">
                  <InputGroup.Text id="basic-addon1">@</InputGroup.Text>
                  <Form.Control
                    placeholder="Usuario"
                    aria-label="Username"
                    aria-describedby="basic-addon1"
                  />
                </InputGroup>

                <InputGroup className="mb-3">
                  <Form.Control
                    placeholder="Correo Electrónico"
                    aria-label="Recipient's username"
                    aria-describedby="basic-addon2"
                  />
                  <InputGroup.Text id="basic-addon2">
                    @hotmail.com
                  </InputGroup.Text>
                </InputGroup>
                <InputGroup className="mb-3">
                  <InputGroup.Text>Nombres y Apellidos</InputGroup.Text>
                  <Form.Control aria-label="First name" />
                  <Form.Control aria-label="Last name" />
                </InputGroup>
                <InputGroup className="mb-3">
                  <InputGroup.Text id="inputGroup-sizing-default">
                    Contraseña
                  </InputGroup.Text>
                  <Form.Control
                    aria-label="Default"
                    aria-describedby="inputGroup-sizing-default"
                  />
                </InputGroup>
              </Form>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Cerrar
              </Button>
              <Button variant="primary" onClick={handleShowSucess}>
                Registrarme
              </Button>
              <Modal show={showSucess} onHide={handleCloseSucess}>
                <Modal.Header closeButton>
                  <Modal.Title>Felicitaciones</Modal.Title>
                </Modal.Header>
                <Modal.Body>Creación de cuenta exitosa!</Modal.Body>
                <Modal.Footer>
                  <Button variant="secondary" onClick={handleCloseSucess}>
                    Cerrar
                  </Button>
                  <Button variant="primary" onClick={handleCloseSucess}>
                    Iniciar Sesión
                  </Button>
                </Modal.Footer>
              </Modal>
            </Modal.Footer>
          </Modal>
          <div className="d-flex align-items-end justify-content-end">
            <Button variant="primary">Ingresar</Button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
export default Login;
