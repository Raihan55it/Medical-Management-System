import PatientForm from "../../components/patient/PatientForm";
import PatientTable from "../../components/patient/PatientTable";
import PatientDetailsModal from "../../components/patient/PatientDetailsModal";

const Patients = () => {
  return (
    <div>
      <PatientForm />
      <PatientTable />
      <PatientDetailsModal />
    </div>
  );
};
export default Patients;
