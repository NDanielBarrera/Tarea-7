import { Navigate, useLocation } from "react-router-dom";

function RutaProtegida({ children }) {
  const location = useLocation();

  const usuarioLogueado =
    localStorage.getItem("usuarioLogueado") === "true";

  if (!usuarioLogueado) {
    return (
      <Navigate
        to="/login"
        state={{ from: location }}
        replace
      />
    );
  }

  return children;
}

export default RutaProtegida;