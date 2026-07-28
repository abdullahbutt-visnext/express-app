const registerUser = (req, res) => {
  res.status(200).json({
    success: true,
    message: "Register route is working.",
  });
};

const loginUser = (req, res) => {
  res.status(200).json({
    success: true,
    message: "Login route is working.",
  });
};

export { registerUser, loginUser };