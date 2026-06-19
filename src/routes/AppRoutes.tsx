import { Routes, Route } from "react-router-dom";
import Layout from "../components/layout/Layout";

const Dashboard = () => <div>Dashboard</div>;
const Patients = () => <div>Patients</div>;
const Doctors = () => <div>Doctors</div>;
const Appointments = () => <div>Appointments</div>;
const Prescriptions = () => <div>Prescriptions</div>;

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Dashboard />} />
        <Route path="patients" element={<Patients />} />
        <Route path="doctors" element={<Doctors />} />
        <Route path="appointments" element={<Appointments />} />
        <Route path="prescriptions" element={<Prescriptions />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
