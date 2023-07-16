import React from "react";
import { Routes, Route } from "react-router-dom";
import { FormDataProvider } from "../context/FormDataContext";

import PersonalData from "../components/Registro/PersonalData";
import AcademicData from "../components/Registro/AcademicData";
import FamilyData from "../components/Registro/FamilyData";
import EmploymentData from "../components/Registro/EmploymentData";
import AccountData from "../components/Registro/AccountData";

const Registro: React.FC = () => {
  return (
    <FormDataProvider>
      <Routes>
        <Route path="/PersonalData" element={<PersonalData />} />
        <Route path="/AcademicData" element={<AcademicData />} />
        <Route path="/FamilyData" element={<FamilyData />} />
        <Route path="/EmploymentData" element={<EmploymentData />} />
        <Route path="/AccountData" element={<AccountData />} />
      </Routes>
    </FormDataProvider>
  );
};

export default Registro;
