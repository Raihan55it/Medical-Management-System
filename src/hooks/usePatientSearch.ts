import { useMemo } from "react";
import type { Patient } from "../types/patient";

const usePatientSearch = (patients: Patient[], searchTerm: string) => {
  return useMemo(() => {
    return patients.filter((patient) =>
      patient.name.toLowerCase().includes(searchTerm.toLowerCase()),
    );
  }, [patients, searchTerm]);
};

export default usePatientSearch;
