import { createContext, useState, useEffect } from "react";
import type { Patient } from "../types/patient";

type AppContextType = {
  patients: Patient[];
  editingPatient: Patient | null;
  setEditingPatient: React.Dispatch<React.SetStateAction<Patient | null>>;
  addPatient: (patient: Patient) => void;
  updatePatient: (patient: Patient) => void;
  deletePatient: (id: string) => void;
};

export const AppContext = createContext<AppContextType | null>(null);

export const AppProvider = ({ children }: { children: React.ReactNode }) => {
  const [patients, setPatients] = useState<Patient[]>(() => {
    const data = localStorage.getItem("patients");
    return data ? JSON.parse(data) : [];
  });
  const [editingPatient, setEditingPatient] = useState<Patient | null>(null);

  useEffect(() => {
    localStorage.setItem("patients", JSON.stringify(patients));
  }, [patients]);

  const addPatient = (patient: Patient) => {
    setPatients((prev) => [...prev, patient]);
  };

  const updatePatient = (updatedPatient: Patient) => {
    setPatients((prev) =>
      prev.map((patient) =>
        patient.id === updatedPatient.id ? updatedPatient : patient,
      ),
    );
  };

  const deletePatient = (id: string) => {
    setPatients((prev) => prev.filter((p) => p.id !== id));
  };
  return (
    <AppContext.Provider
      value={{ patients, addPatient, deletePatient, updatePatient, editingPatient, setEditingPatient }}
    >
      {children}
    </AppContext.Provider>
  );
};
