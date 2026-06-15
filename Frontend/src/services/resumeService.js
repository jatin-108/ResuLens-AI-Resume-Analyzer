import API from "./api";

export const uploadResume = async (file) => {
  const formData = new FormData();

  formData.append("resume", file);

  const response = await API.post("/resume/upload", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });

  return response.data;
};
