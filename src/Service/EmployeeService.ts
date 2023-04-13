import { AxiosInstance } from "axios";
import { defaultAxiosInstance } from "./Api";

const config = {
    headers: {
        Authorization : `Bearer ${localStorage.getItem("access_token")}`
    }
}

const EmployeeService = (api: AxiosInstance = defaultAxiosInstance) => ({
    getAllEmloyees: async () => {
        const data = await api.get('employee', config)
        console.log(data['data'])
        return data['data']
    }
})

export default EmployeeService