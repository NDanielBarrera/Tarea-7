import { Routes, Route } from "react-router-dom";

import LayoutPrincipal from "./layouts/LayoutPrincipal";

import Inicio from "./pages/Inicio";
import Nosotros from "./pages/Nosotros";
import Contacto from "./pages/Contacto";
import Productos from "./pages/Productos";
import Producto from "./pages/Producto";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Perfil from "./pages/Perfil";
import Configuracion from "./pages/Configuracion";
import NoEncontrada from "./pages/NoEncontrada";

import RutaProtegida from "./components/RutaProtegida";

function App() {
  return (
    <Routes>

      <Route path="/" element={<LayoutPrincipal />}>
        <Route index element={<Inicio />} />
        <Route path="nosotros" element={<Nosotros />} />
        <Route path="contacto" element={<Contacto />} />
        <Route path="productos" element={<Productos />} />
        <Route path="productos/:id" element={<Producto />} />

        <Route path="login" element={<Login />} />

        <Route
          path="dashboard"
          element={
            <RutaProtegida>
              <Dashboard />
            </RutaProtegida>
          }
        >
          <Route path="perfil" element={<Perfil />} />
          <Route path="configuracion" element={<Configuracion />} />
        </Route>

        <Route path="*" element={<NoEncontrada />} />
      </Route>

    </Routes>
  );
}

export default App;