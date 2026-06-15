import { createContext, useState } from "react";

export const AnalysisContext = createContext();

const AnalysisProvider = ({ children }) => {
  const [analysis, setAnalysis] = useState(null);

  return (
    <AnalysisContext.Provider
      value={{
        analysis,
        setAnalysis,
      }}
    >
      {children}
    </AnalysisContext.Provider>
  );
};

export default AnalysisProvider;