import { BrowserRouter, Route, Routes } from "react-router-dom";

import NavBar from "./components/NavBar";

import Home from "./pages/Home";
import Cursos from "./pages/Cursos";
import Adicionar from "./pages/Adicionar";

const Router = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cursos" element={<Cursos />} />
        <Route path="/adicionar" element={<Adicionar />} />
        <Route path="/editar/:id" element={<Adicionar editar />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
