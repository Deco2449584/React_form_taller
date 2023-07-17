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
      {/* <h1 className="text-2xl font-bold mb-4">Registro</h1>
      <p className="text-gray-600 mb-4">Bienvenido al proceso de registro.</p>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={handleComenzarRegistro}
      >
        Comenzar el registro
      </button> */}
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
