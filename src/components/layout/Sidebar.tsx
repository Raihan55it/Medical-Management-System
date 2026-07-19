import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="w-48 h-full bg-white dark:bg-gray-800 border-r dark:border-gray-700 p-4">
      <h1 className="text-xl font-bold mb-6 text-gray-800 dark:text-white">
        🏥 Medical App
      </h1>
      <nav className="space-y-2 ">
        <NavLink
          className="block p-2 rounded hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-800 dark:text-white"
          to="/"
        >
          Dashboard
        </NavLink>
        <NavLink
          className="block p-2 rounded hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-800 dark:text-white"
          to="/patients"
        >
          Patient
        </NavLink>
        <NavLink
          className="block p-2 rounded hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-800 dark:text-white"
          to="/doctors"
        >
          Doctors
        </NavLink>

        <NavLink
          className="block p-2 rounded hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-800 dark:text-white"
          to="/appointments"
        >
          Appointments
        </NavLink>

        <NavLink
          className="block p-2 rounded hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-800 dark:text-white"
          to="/prescriptions"
        >
          Prescriptions
        </NavLink>
      </nav>
    </div>
  );
};

export default Sidebar;
