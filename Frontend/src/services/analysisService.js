import API from "./api";
export const getAnalysisById = async (id) => {
  const response = await API.get(`/analysis/${id}`);

  return response.data;
};
export const getHistory = async () => {
  const response = await API.get("/analysis/history");

  return response.data;
};
