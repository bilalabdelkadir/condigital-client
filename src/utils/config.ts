const backendUrl = "http://localhost:8000";

const signupUser: string = `${backendUrl}/auth/signup`;
const loginUser: string = `${backendUrl}/auth/signin`;
const logoutUser: string = `${backendUrl}/auth/signout`;

export { signupUser, loginUser, logoutUser };
