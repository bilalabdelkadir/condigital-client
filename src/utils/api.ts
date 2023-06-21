import axios, { AxiosResponse } from "axios";
import { signupUser, loginUser, logoutUser } from "./config";

const registerUser = async (
  firstName: string,
  lastName: string,
  email: string,
  password: string
): Promise<AxiosResponse> => {
  return await axios.post(signupUser, {
    firstName,
    lastName,
    email,
    password,
  });
};

const loginUserRequest = async (
  email: string,
  password: string
): Promise<AxiosResponse> => {
  return await axios.post(loginUser, {
    email,
    password,
  });
};

const logoutUserRequest = async (): Promise<AxiosResponse> => {
  return await axios.post(logoutUser);
};

export { registerUser, loginUserRequest, logoutUserRequest };
