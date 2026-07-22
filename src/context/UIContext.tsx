import { createContext, useState } from "react";
import type { Patient } from "../types/patient";

type UIContextType = {
  editingPatient: Patient | null;
  selectedPatient: Patient | null;
  setEditingPatient: React.Dispatch<React.SetStateAction<Patient | null>>;
  setSelectedPatient: React.Dispatch<React.SetStateAction<Patient | null>>;
};
export const UIContext = createContext<UIContextType | null>(null);
export const UIProvider = ({ children }: { children: React.ReactNode }) => {
  const [editingPatient, setEditingPatient] = useState<Patient | null>(null);
  const [selectedPatient, setSelectedPatient] = useState<Patient | null>(null);

  return (
    <UIContext.Provider
      value={{
        editingPatient,
        setEditingPatient,
        selectedPatient,
        setSelectedPatient,
      }}
    >
      {children}
    </UIContext.Provider>
  );
};
