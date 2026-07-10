import AppRoutes from "./routes/AppRoutes";
import { ThemeProvider } from "./context/ThemContext";
import { AppProvider } from "./context/AppContext";

const App = () => {
  return (
    <ThemeProvider>
      <AppProvider>
        <AppRoutes />
      </AppProvider>
    </ThemeProvider>
  );
};
export default App;
