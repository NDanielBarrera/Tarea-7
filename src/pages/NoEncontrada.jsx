import { Link } from "react-router-dom";

function NoEncontrada() {
  return (
    <section className="pagina">
      <h2>Error 404</h2>

      <p>La página solicitada no existe.</p>

      <Link to="/">Volver al inicio</Link>
    </section>
  );
}

export default NoEncontrada;