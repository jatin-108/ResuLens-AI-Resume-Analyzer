import { useContext } from "react";
import { AnalysisContext } from "../context/AnalysisContext";

const useAnalysis = () => {
  return useContext(AnalysisContext);
};

export default useAnalysis;