import { Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import Inicio from "./components/Inicio";
import Productos from "./components/Productos";
import { QuienesSomos } from "./components/QuienesSomos";
import { Contacto } from "./components/Contacto";




function App() {


  return (
    <>
      <NavBar/>
      <Routes>
          <Route path="/inicio" element={<Inicio/>} />
          <Route path="/quienesSomos" element={<QuienesSomos/>} />
          <Route path="/productos" element={<Productos/>} />
          <Route path="/contacto" element={<Contacto/>} />
      </Routes>

      <footer className="bg-dark mt-5 py-5">
        <div className="container-xl">
          <p className="text-white text-center fs-4 mt-4 m-md-0">Todos los derechos Reservados</p>
        </div>
      </footer>
    </>
  )
}

export default App
