import Sidebar from "./Sidebar.tsx";
import Topbar from "./Topbar.tsx";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="flex h-screen bg-gray-100 dark:bg-gray-900">
      <Sidebar />

      <div>
        <Topbar />
        <main className="flex flex-col flex-1">
          <Outlet />
        </main>
      </div>
    </div>
  );
};
export default Layout;
