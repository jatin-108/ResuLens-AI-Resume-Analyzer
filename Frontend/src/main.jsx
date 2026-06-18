import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import Router from "./routes/Router";
import AuthProvider from "./context/AuthContext";

import ThemeProvider from "./context/ThemeContext";
import AppToaster from "./components/AppToaster";
import "@fontsource/poppins/400.css";
import "@fontsource/poppins/500.css";
import "@fontsource/poppins/600.css";
import "@fontsource/poppins/700.css";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <ThemeProvider>
    <AuthProvider>
      <RouterProvider router={Router} />
      <AppToaster />
    </AuthProvider>
  </ThemeProvider>,
);
