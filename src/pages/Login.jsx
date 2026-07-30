import { useLocation, useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const location = useLocation();

  const rutaAnterior = location.state?.from?.pathname || "/dashboard";

  const iniciarSesion = () => {
    localStorage.setItem("usuarioLogueado", "true");

    navigate(rutaAnterior, {
      replace: true,
    });
  };

  return (
    <section className="pagina">
      <h2>Iniciar sesión</h2>

      <p>
        Debes iniciar sesión para acceder al Dashboard.
      </p>

      <button onClick={iniciarSesion}>
        Simular inicio de sesión
      </button>
    </section>
  );
}

export default Login;