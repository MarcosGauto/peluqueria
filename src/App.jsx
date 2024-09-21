import { Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import Productos from "./components/Productos";
import { QuienesSomos } from "./components/QuienesSomos";
import { Contacto } from "./components/Contacto";
import Footer from "./components/Footer";
import Inicio from "./components/Inicio";



function App() {


  return (
    <>
      <NavBar/>

      <Routes>
          <Route path="/Inicio" element={<Inicio/>} />
          <Route path="/quienesSomos" element={<QuienesSomos/>} />
          <Route path="/productos" element={<Productos/>} />
          <Route path="/contacto" element={<Contacto/>} />
      </Routes>

      <Footer/>


    </>
  )
}

export default App
