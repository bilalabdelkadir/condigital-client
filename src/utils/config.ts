const backendUrl = "http://localhost:8000";

const signupUser: string = `${backendUrl}/auth/signup`;
const loginUser: string = `${backendUrl}/auth/signin`;
const logoutUser: string = `${backendUrl}/auth/signout`;
const getAllAccount: string = `${backendUrl}/account`;

export { signupUser, loginUser, logoutUser, getAllAccount };
