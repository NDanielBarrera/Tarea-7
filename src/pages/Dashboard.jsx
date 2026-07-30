import { Link, Outlet, useNavigate } from "react-router-dom";

function Dashboard() {
  const navigate = useNavigate();

  const cerrarSesion = () => {
    localStorage.removeItem("usuarioLogueado");
    navigate("/login");
  };

  return (
    <section className="pagina">
      <h2>Dashboard protegido</h2>

      <p>
        Esta página solo puede verse si el usuario está logueado.
      </p>

      <nav className="subnavegacion">
        <Link to="/dashboard/perfil">Perfil</Link>
        <Link to="/dashboard/configuracion">Configuración</Link>
      </nav>

      <button onClick={cerrarSesion}>
        Cerrar sesión
      </button>

      <div className="contenido-anidado">
        <Outlet />
      </div>
    </section>
  );
}

export default Dashboard;