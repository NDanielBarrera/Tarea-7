import { Link, useSearchParams } from "react-router-dom";

const listaProductos = [
  { id: 1, nombre: "Notebook" },
  { id: 2, nombre: "Teclado" },
  { id: 3, nombre: "Monitor" },
  { id: 4, nombre: "Mouse" },
];

function Productos() {
  const [searchParams, setSearchParams] = useSearchParams();

  const categoria = searchParams.get("categoria") || "todos";

  const cambiarCategoria = (nuevaCategoria) => {
    setSearchParams({ categoria: nuevaCategoria });
  };

  return (
    <section className="pagina">
      <h2>Productos</h2>

      <p>
        Categoría seleccionada: <strong>{categoria}</strong>
      </p>

      <div className="grupo-botones">
        <button onClick={() => cambiarCategoria("todos")}>
          Todos
        </button>

        <button onClick={() => cambiarCategoria("tecnologia")}>
          Tecnología
        </button>

        <button onClick={() => cambiarCategoria("accesorios")}>
          Accesorios
        </button>
      </div>

      <ul className="lista-productos">
        {listaProductos.map((producto) => (
          <li key={producto.id}>
            <Link to={`/productos/${producto.id}`}>
              {producto.nombre}
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Productos;