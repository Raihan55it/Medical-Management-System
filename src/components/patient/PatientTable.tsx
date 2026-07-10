import { useContext } from "react";
import { AppContext } from "../../context/AppContext";

const PatientTable = () => {
  const appContext = useContext(AppContext);
  if (!appContext) return null;

  const { patients, deletePatient, setEditingPatient } = appContext;
  return (
    <div className="mt-6 rounded-lg border bg-white p-6 shadow-sm dark:bg-gray-800">
      <h2 className="mb-4 text-xl font-semibold dark:text-white">
        Patient List
      </h2>

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
          {patients.map((patient) => (
            <tr key={patient.id}>
              <td className="p-2 dark:text-white">{patient.name}</td>
              <td className="p-2 dark:text-white">{patient.age}</td>
              <td className="p-2 dark:text-white">{patient.gender}</td>
              <td className="p-2 dark:text-white">{patient.phone}</td>
              <td className="p-2 space-x-2">
                <button
                  onClick={() => setEditingPatient(patient)}
                  className="rounded bg-green-500 px-4 py-1 text-white hover:bg-green-600"
                >
                  Edit
                </button>
                <button
                  onClick={() => deletePatient(patient.id)}
                  className="rounded bg-blue-500 px-4 py-1 text-white hover:bg-red-600"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default PatientTable;
