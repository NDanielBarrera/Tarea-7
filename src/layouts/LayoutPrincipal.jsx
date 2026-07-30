import { Outlet } from "react-router-dom";
import BarraNavegacion from "../components/BarraNavegacion";

function LayoutPrincipal() {
  return (
    <div className="aplicacion">
      <header className="encabezado">
        <h1>Mini Dashboard</h1>
        <BarraNavegacion />
      </header>

      <main className="contenido-principal">
        <Outlet />
      </main>

      <footer className="pie-pagina">
        <p>Tarea 7 - Enrutamiento con React Router DOM</p>
      </footer>
    </div>
  );
}

export default LayoutPrincipal;