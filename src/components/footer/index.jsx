import { Link } from "react-router-dom";
import "../footer/index.css";

function Footer() {
  return (
    <div className="row bg-dark p-3">
      <div className="col-4 row">
        <h3 className="text-secondary">Atención Al Cliente</h3>
        <Link to={""} className="text-decoration-none text-white">
          Soporte Técnico
        </Link>
        <Link to={""} className="text-decoration-none text-white">
          ¿Quienes Somos?
        </Link>
      </div>
      <div className="col-4">
        <h3 className="text-secondary">Sedes</h3>
        <ul className="list-unstyled">
          <li className="text-white">Av. España 1083</li>
          <li className="text-white">Jr. Galvez 9876</li>
          <li className="text-white">Calle Junin Mz. Q Lote 7</li>
        </ul>
      </div>
      <div className="col-4">
        <h3 className="mb-4 text-secondary">Nuestras Redes</h3>
        <Link
          to={"https://www.facebook.com/EDDIE27/"}
          target="_blank"
          className="link"
        >
          <i className="fab fa-facebook-f"></i>
        </Link>
        <Link
          to={"https://twitter.com/EddiePazzz"}
          target="_blank"
          className="link"
        >
          <i className="fab fa-twitter"></i>
        </Link>
        <Link
          to={"https://www.instagram.com/eppr27/"}
          target="_blank"
          className="link"
        >
          <i className="fab fa-instagram"></i>
        </Link>
      </div>
    </div>
  );
}
export default Footer;
