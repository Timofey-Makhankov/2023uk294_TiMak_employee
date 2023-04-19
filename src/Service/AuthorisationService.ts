import { AxiosInstance } from "axios";
import { defaultAxiosInstance } from "./Api";

/**
 * This Authorisation Service is for creating Requests to the
 * Webserver with Axios
 * @param api The Axios Object given or default Axios Object
 * @returns a response from the JSON webserver
 */
const AuthorizationService = (api: AxiosInstance = defaultAxiosInstance) => ({
  logInUser: async (email: string, password: string) => {
    const input = {
      email: email,
      password: password,
    };
    const data = await api.post("login", input);
    return data["data"]["accessToken"];
  },

  logOut: async () => {
    localStorage.setItem("accessToken", "");
  },

  registerUser: async (email: string, password: string) => {
    const input = {
      email: email,
      password: password,
    };
    const data = await api.post("register", input);
    return data["data"]["accessToken"];
  },
});

export default AuthorizationService;
