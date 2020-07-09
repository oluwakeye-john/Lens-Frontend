export const saveUsername = (username) => {
  localStorage.setItem("lens-username", username);
};

export const readUsername = () => {
  const val = localStorage.getItem("lens-username");
  return val ? val : "";
};
