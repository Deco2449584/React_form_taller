import React from "react";
import { Routes, Route, useNavigate } from "react-router-dom";

import PersonalData from "../components/Registro/PersonalData";
import AcademicData from "../components/Registro/AcademicData";
import FamilyData from "../components/Registro/FamilyData";
import EmploymentData from "../components/Registro/EmploymentData";
import AccountData from "../components/Registro/AccountData";
import Summary from "../components/Registro/Sumary";

const Registro: React.FC = () => {
  const navigate = useNavigate();

  const handleComenzarRegistro = () => {
    navigate("/Registro/PersonalData");
  };

  return (
    <div className="registration-page">
      <h1>Registro</h1>
      <p>Bienvenido al proceso de registro.</p>
      <button onClick={handleComenzarRegistro}>Comenzar el registro</button>
      <Routes>
        <Route path="/PersonalData" element={<PersonalData />} />
        <Route path="/AcademicData" element={<AcademicData />} />
        <Route path="/FamilyData" element={<FamilyData />} />
        <Route path="/EmploymentData" element={<EmploymentData />} />
        <Route path="/AccountData" element={<AccountData />} />
        <Route path="/Summary" element={<Summary />} />
      </Routes>
    </div>
  );
};

export default Registro;
