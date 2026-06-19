import AppRoutes from "./routes/AppRoutes";
import { ThemeProvider } from "./context/ThemContext";

const App = () => {
  return (
    <ThemeProvider>
      <AppRoutes />
    </ThemeProvider>
  );
};
export default App;
