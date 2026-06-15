import API from "./api";

export const loginUser = async (formData) => {
  const response = await API.post("/auth/login", formData);
  return response.data;
};

export const registerUser = async (formData) => {
  const response = await API.post("/auth/register", formData);
  return response.data;
};

export const forgotPassword = async (email) => {
  const response = await API.post("/auth/forgot-password", {
    email,
  });

  return response.data;
};

export const resetPassword = async (token, password) => {
  const response = await API.post(`/auth/reset-password/${token}`, {
    password,
  });

  return response.data;
};
