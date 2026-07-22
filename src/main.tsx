import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "./context/ThemContext.tsx";
import { AppProvider } from "./context/AppContext.tsx";
import { UIProvider } from "./context/UIContext.tsx";

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <ThemeProvider>
      <AppProvider>
        <UIProvider>
          <App />
        </UIProvider>
      </AppProvider>
    </ThemeProvider>
  </BrowserRouter>,
);
