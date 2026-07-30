import { Link, useParams } from "react-router-dom";

const productos = {
  1: "Notebook",
  2: "Teclado",
  3: "Monitor",
  4: "Mouse",
};

function Producto() {
  const { id } = useParams();

  const nombreProducto = productos[id] || "Producto no encontrado";

  return (
    <section className="pagina">
      <h2>Detalle del producto</h2>

      <p>
        Identificador recibido por la URL: <strong>{id}</strong>
      </p>

      <p>
        Producto seleccionado: <strong>{nombreProducto}</strong>
      </p>

      <Link to="/productos">Volver a productos</Link>
    </section>
  );
}

export default Producto;