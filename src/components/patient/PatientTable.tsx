import { useCallback, useContext, useEffect, useState } from "react";
import { AppContext } from "../../context/AppContext";
import PatientSearch from "./PatientSearch";
import PatientSort from "./PatientSort";
import PatientRow from "./PatientRow";
import usePatientSearch from "../../hooks/usePatientSearch";
import usePatientSort from "../../hooks/usePatientSort";
import type { Patient } from "../../types/patient";
import useDebounce from "../../hooks/useDebounce";
import usePagination from "../../hooks/usePagination";
import Pagination from "../pagination/Pagination";
import { UIContext } from "../../context/UIContext";

const PatientTable = () => {
  console.log("Rendering PatientTable");
  const appContext = useContext(AppContext);
  if (!appContext) return null;
  const uiContext = useContext(UIContext);
  if (!uiContext) return null;

  const { patients, deletePatient } = appContext;
  const { setEditingPatient, setSelectedPatient } = uiContext;

  const [search, setSearch] = useState("");
  const debouncedSearch = useDebounce(search, 500);
  const [sortBy, setSortBy] = useState("Latest");
  const handleView = useCallback(
    (patient: Patient) => {
      setSelectedPatient(patient);
    },
    [setSelectedPatient],
  );
  const handleEdit = useCallback(
    (patient: Patient) => {
      setEditingPatient(patient);
    },
    [setEditingPatient],
  );

  const handleDelete = useCallback(
    (patientId: string) => {
      deletePatient(patientId);
    },
    [deletePatient],
  );
  const filteredPatients = usePatientSearch(patients, debouncedSearch);

  const sortedPatients = usePatientSort(filteredPatients, sortBy);
  const { currentPage, setCurrentPage, paginatedItems, totalPages } =
    usePagination(sortedPatients, 5);
  useEffect(() => {
    setCurrentPage(1);
  }, [search, sortBy, setCurrentPage]);

  return (
    <div className="mt-6 rounded-lg border bg-white p-6 shadow-sm dark:bg-gray-800">
      <h2 className="mb-4 text-xl font-semibold dark:text-white">
        Patient List
      </h2>

      <div>
        <PatientSearch search={search} setSearch={setSearch} />
        <div className="my-4">
          <PatientSort sortBy={sortBy} setSortBy={setSortBy} />
        </div>
      </div>

      <table className="w-full border-collapse">
        <thead>
          <tr className="border-b">
            <th className="p-2 text-left dark:text-white">Name</th>
            <th className="p-2 text-left dark:text-white">Age</th>
            <th className="p-2 text-left dark:text-white">Gender</th>
            <th className="p-2 text-left dark:text-white">Phone</th>
            <th className="p-2 text-left dark:text-white">Action</th>
          </tr>
        </thead>
        <tbody>
          {paginatedItems.map((patient) => (
            <PatientRow
              key={patient.id}
              patient={patient}
              onView={handleView}
              onEdit={handleEdit}
              onDelete={handleDelete}
            />
          ))}
        </tbody>
      </table>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        setCurrentPage={setCurrentPage}
      />
    </div>
  );
};
export default PatientTable;
