import React, { createContext, useState, ReactNode } from "react";
import {
  PersonalDataFormValues,
  AcademicDataFormValues,
  FamilyDataFormValues,
  EmploymentDataFormValues,
  AccountDataFormValues,
} from "../models/DataFormValues";

// Define el tipo para el contexto
export interface FormDataContextType {
  personalData: PersonalDataFormValues;
  setPersonalData: React.Dispatch<React.SetStateAction<PersonalDataFormValues>>;
  academicData: AcademicDataFormValues;
  setAcademicData: React.Dispatch<React.SetStateAction<AcademicDataFormValues>>;
  familyData: FamilyDataFormValues;
  setFamilyData: React.Dispatch<React.SetStateAction<FamilyDataFormValues>>;
  employmentData: EmploymentDataFormValues;
  setEmploymentData: React.Dispatch<
    React.SetStateAction<EmploymentDataFormValues>
  >;
  accountData: AccountDataFormValues;
  setAccountData: React.Dispatch<React.SetStateAction<AccountDataFormValues>>;
}

// Crea el contexto
export const FormDataContext = createContext<FormDataContextType | undefined>(
  undefined
);

// Crea el proveedor del contexto
export const FormDataProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  // Define el estado para los datos del formulario
  const [personalData, setPersonalData] = useState<PersonalDataFormValues>({
    firstName: "",
    lastName: "",
    birthDate: "",
    gender: "",
  });

  const [academicData, setAcademicData] = useState<AcademicDataFormValues>({
    degree: "",
    institution: "",
    year: "",
  });

  const [familyData, setFamilyData] = useState<FamilyDataFormValues>({
    parentName: "",
    siblingName: "",
    maritalStatus: "",
  });

  const [employmentData, setEmploymentData] =
    useState<EmploymentDataFormValues>({
      companyName: "",
      position: "",
      yearsOfWork: "",
    });

  const [accountData, setAccountData] = useState<AccountDataFormValues>({
    username: "",
    password: "",
    confirmPassword: "",
  });

  // Define el valor del contexto
  const contextValue: FormDataContextType = {
    personalData,
    setPersonalData,
    academicData,
    setAcademicData,
    familyData,
    setFamilyData,
    employmentData,
    setEmploymentData,
    accountData,
    setAccountData,
  };

  return (
    <FormDataContext.Provider value={contextValue}>
      {children}
    </FormDataContext.Provider>
  );
};
