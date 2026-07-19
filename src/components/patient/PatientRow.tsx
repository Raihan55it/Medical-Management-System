import { memo } from "react";
import type { Patient } from "../../types/patient";

type Props = {
  patient: Patient;
  onView: (patient: Patient) => void;
  onEdit: (patient: Patient) => void;
  onDelete: (patientId: string) => void;
};

const PatientRow = memo(({ patient, onView, onEdit, onDelete }: Props) => {
  console.log("Rendaring PatientRow", patient.name);
  return (
    <tr>
      <td className="p-2 dark:text-white">{patient.name}</td>
      <td className="p-2 dark:text-white">{patient.age}</td>
      <td className="p-2 dark:text-white">{patient.gender}</td>
      <td className="p-2 dark:text-white">{patient.phone}</td>
      <td className="p-2 space-x-2">
        <button
          onClick={() => onView(patient)}
          className="rounded bg-sky-500 px-4 py-1 text-white hover:bg-sky-600"
        >
          View
        </button>
        <button
          onClick={() => onEdit(patient)}
          className="rounded bg-green-500 px-4 py-1 text-white hover:bg-green-600"
        >
          Edit
        </button>
        <button
          onClick={() => onDelete(patient.id)}
          className="rounded bg-blue-500 px-4 py-1 text-white hover:bg-red-600"
        >
          Delete
        </button>
      </td>
    </tr>
  );
});

export default PatientRow;
