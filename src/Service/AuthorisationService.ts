import { AxiosInstance } from "axios";
import { defaultAxiosInstance } from "./Api";

const AuthorizationService = (api : AxiosInstance = defaultAxiosInstance) => ({
    logInUser: async (email: string, password: string) => {
        const input = {
             email : email, 
             password : password
        }
        const data = await api.post('login', input)
        console.log(data['data']['accessToken'])
        return data['data']['accessToken']
    }
})

export default AuthorizationService