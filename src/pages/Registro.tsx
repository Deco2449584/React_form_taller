import React from "react";
import { Routes, Route } from "react-router-dom";

import Personales from "../components/Registro/personales";
import Academicos from "../components/Registro/academicos";
import Familiares from "../components/Registro/familiares";
import Laborales from "../components/Registro/laborales";
import DatosCuenta from "../components/Registro/datosCuenta";

const Registro: React.FC = () => {
  return (
    <>
      <Routes>
        <Route path="/personales" element={<Personales />} />
        <Route path="/academicos" element={<Academicos />} />
        <Route path="/familiares" element={<Familiares />} />
        <Route path="/laborales" element={<Laborales />} />
        <Route path="/datoscuenta" element={<DatosCuenta />} />
      </Routes>
    </>
  );
};

export default Registro;
