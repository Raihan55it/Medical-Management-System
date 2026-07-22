import {
  createContext,
  useState,
  useEffect,
  useCallback,
  useMemo,
} from "react";
import type { Patient } from "../types/patient";

type AppContextType = {
  patients: Patient[];
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

  useEffect(() => {
    localStorage.setItem("patients", JSON.stringify(patients));
  }, [patients]);

  const addPatient = useCallback((patient: Patient) => {
    setPatients((prev) => [...prev, patient]);
  }, []);

  const updatePatient = useCallback((updatedPatient: Patient) => {
    setPatients((prev) =>
      prev.map((patient) =>
        patient.id === updatedPatient.id ? updatedPatient : patient,
      ),
    );
  }, []);

  const deletePatient = useCallback((id: string) => {
    setPatients((prev) => prev.filter((p) => p.id !== id));
  }, []);
  const value = useMemo(
    () => ({
      patients,
      addPatient,
      deletePatient,
      updatePatient,
    }),
    [patients, addPatient, deletePatient, updatePatient],
  );
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};
