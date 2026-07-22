import { useContext, useEffect } from "react";
import { UIContext } from "../../context/UIContext";
const PatientDetailsModal = () => {
  const uiContext = useContext(UIContext);
  if (!uiContext) return null;
  const { selectedPatient, setSelectedPatient } = uiContext;
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setSelectedPatient(null);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [setSelectedPatient]);
  if (!selectedPatient) return null;

  return (
    <div
      className="fixed inset-0 flex items-center justify-center bg-black/50"
      onClick={() => setSelectedPatient(null)}
    >
      <div
        className="w-full max-w-md rounded-lg bg-white p-6 shadow-lg dark:bg-gray-800"
        onClick={(e) => e.stopPropagation()}
      >
        <h2 className="mb-4 text-2xl font-bold dark:text-white">
          Patient Details
        </h2>
        <p className="mb-2 dark:text-white">
          <strong>Name:</strong> {selectedPatient.name}
        </p>
        <p className="mb-2 dark:text-white">
          <strong>Age:</strong> {selectedPatient.age}
        </p>
        <p className="mb-2 dark:text-white">
          <strong>Gender:</strong> {selectedPatient.gender}
        </p>
        <p className="mb-2 dark:text-white">
          <strong>Blood Group:</strong> {selectedPatient.bloodType}
        </p>
        <p className="mb-2 dark:text-white">
          <strong>Phone:</strong> {selectedPatient.phone}
        </p>
        <p className="mb-2 dark:text-white">
          <strong>Email:</strong> {selectedPatient.email}
        </p>
        <p className="mb-2 dark:text-white">
          <strong>Address:</strong> {selectedPatient.address}
        </p>
        <p className="dark:text-white">
          <strong>Created:</strong>
          {""}
          {new Date(selectedPatient.createdAt).toLocaleDateString()}
        </p>
        <div className="mt-6 text-right">
          <button
            className="rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600"
            onClick={() => setSelectedPatient(null)}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
export default PatientDetailsModal;
