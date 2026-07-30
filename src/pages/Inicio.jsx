import { useNavigate } from "react-router-dom";

function Inicio() {
  const navigate = useNavigate();

  return (
    <section className="pagina">
      <h2>Inicio</h2>

      <p>
        Bienvenido al Mini Dashboard de la Tarea 7 sobre enrutamiento con
        React Router DOM.
      </p>

      <button onClick={() => navigate("/productos")}>
        Ver productos
      </button>
    </section>
  );
}

export default Inicio;