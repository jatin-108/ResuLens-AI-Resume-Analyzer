import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import Router from "./routes/Router";
import AuthProvider from "./context/AuthContext";
import AnalysisProvider from "./context/AnalysisContext";
import ThemeProvider from "./context/ThemeContext";
import AppToaster from "./components/AppToaster";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <ThemeProvider>
    <AuthProvider>
      <AnalysisProvider>
        <RouterProvider router={Router} />
        <AppToaster />
      </AnalysisProvider>
    </AuthProvider>
  </ThemeProvider>,
);
