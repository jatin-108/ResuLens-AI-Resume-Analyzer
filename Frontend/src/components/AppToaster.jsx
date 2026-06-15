import { Toaster } from "react-hot-toast";
import { useTheme } from "../context/ThemeContext";

const AppToaster = () => {
  const { darkMode } = useTheme();

  return (
    <Toaster
      position="top-right"
      reverseOrder={false}
      gutter={12}
      toastOptions={{
        duration: 4000,

        style: {
          background: darkMode ? "#111827" : "#ffffff",
          color: darkMode ? "#ffffff" : "#111827",

          border: darkMode ? "1px solid #374151" : "1px solid #E5E7EB",

          borderRadius: "20px",

          padding: "16px",

          boxShadow: "0 10px 30px rgba(0,0,0,0.15)",
        },

        success: {
          iconTheme: {
            primary: "#22C55E",
            secondary: "#ffffff",
          },
        },

        error: {
          iconTheme: {
            primary: "#EF4444",
            secondary: "#ffffff",
          },
        },
      }}
    />
  );
};

export default AppToaster;
