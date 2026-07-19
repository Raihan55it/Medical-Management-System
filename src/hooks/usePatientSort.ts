import { useMemo } from "react";
import type { Patient } from "../types/patient";

const usePatientSort = (patients: Patient[], sortBy: string) => {
  const sortedPatients = useMemo(() => {
    return [...patients].sort((a, b) => {
      switch (sortBy) {
        case "name-asc":
          return a.name.localeCompare(b.name);
        case "name-desc":
          return b.name.localeCompare(a.name);
        case "age-asc":
          return a.age - b.age;
        case "age-desc":
          return b.age - a.age;
        case "oldest":
          return (
            new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()
          );
        default:
          return (
            new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
          );
      }
    });
  }, [patients, sortBy]);
  return sortedPatients;
};

export default usePatientSort;
