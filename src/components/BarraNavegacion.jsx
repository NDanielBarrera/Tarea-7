import { Link } from "react-router-dom";

function BarraNavegacion() {
  return (
    <nav className="barra-navegacion">
      <Link to="/">Inicio</Link>
      <Link to="/nosotros">Nosotros</Link>
      <Link to="/contacto">Contacto</Link>
      <Link to="/productos">Productos</Link>
      <Link to="/dashboard">Dashboard</Link>
      <Link to="/login">Login</Link>
    </nav>
  );
}

export default BarraNavegacion;