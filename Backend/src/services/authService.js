export const forgotPassword = async (email) => {
  const response = await axios.post(`${API_URL}/forgot-password`, {
    email,
  });

  return response.data;
};
export const resetPassword = async (token, password) => {
  const response = await axios.post(`${API_URL}/reset-password/${token}`, {
    password,
  });

  return response.data;
};
