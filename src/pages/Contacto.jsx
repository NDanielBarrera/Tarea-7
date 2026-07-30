import { useNavigate } from "react-router-dom";

function Contacto() {
  const navigate = useNavigate();

  const enviarFormulario = (event) => {
    event.preventDefault();
    alert("Mensaje enviado correctamente.");
    navigate("/");
  };

  return (
    <section className="pagina">
      <h2>Contacto</h2>

      <form className="formulario" onSubmit={enviarFormulario}>
        <label htmlFor="nombre">Nombre</label>
        <input
          id="nombre"
          type="text"
          placeholder="Ingrese su nombre"
          required
        />

        <label htmlFor="mensaje">Mensaje</label>
        <textarea
          id="mensaje"
          placeholder="Escriba su mensaje"
          required
        />

        <button type="submit">Enviar mensaje</button>
      </form>
    </section>
  );
}

export default Contacto;