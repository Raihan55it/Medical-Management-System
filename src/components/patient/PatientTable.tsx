import { useContext, useMemo, useState } from "react";
import { AppContext } from "../../context/AppContext";
const PatientTable = () => {
  const appContext = useContext(AppContext);
  if (!appContext) return null;

  const { patients, deletePatient, setEditingPatient, setSelectedPatient } =
    appContext;

  const [search, setSearch] = useState("");
  const [sortBy, setSortBy] = useState("Latest");
  const filteredPatients = useMemo(() => {
    console.log("Filtering...");
    return patients.filter((patient) =>
      patient.name.toLowerCase().includes(search.toLowerCase()),
    );
  }, [patients, search]);

  const sortedPatients = [...filteredPatients].sort((a, b) => {
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

  return (
    <div className="mt-6 rounded-lg border bg-white p-6 shadow-sm dark:bg-gray-800">
      <h2 className="mb-4 text-xl font-semibold dark:text-white">
        Patient List
      </h2>

      <div>
        <input
          type="text"
          placeholder="Search patient..."
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
          }}
          className="w-full rounded-lg border px-3 py-2 dark:bg-gray-700 dark:text-white"
        />
        <div className="my-4">
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="rounded-lg border px-3 py-2 dark:bg-gray-700 dark:text-white"
          >
            <option value="Latest">Latest Added</option>
            <option value="oldest">Oldest Added</option>
            <option value="name-asc">Name (A-Z)</option>
            <option value="name-desc">Name (Z-A)</option>
            <option value="age-asc">Age (Low-High)</option>
            <option value="age-desc">Age (High-Low)</option>
          </select>
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
          {sortedPatients.map((patient) => (
            <tr key={patient.id}>
              <td className="p-2 dark:text-white">{patient.name}</td>
              <td className="p-2 dark:text-white">{patient.age}</td>
              <td className="p-2 dark:text-white">{patient.gender}</td>
              <td className="p-2 dark:text-white">{patient.phone}</td>
              <td className="p-2 space-x-2">
                <button
                  onClick={() => setSelectedPatient(patient)}
                  className="rounded bg-sky-500 px-4 py-1 text-white hover:bg-sky-600"
                >
                  View
                </button>
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
