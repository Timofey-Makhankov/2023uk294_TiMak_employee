import { AxiosInstance } from "axios";
import { defaultAxiosInstance } from "./Api";

const EmployeeService = (api: AxiosInstance = defaultAxiosInstance) => ({
    getAllEmloyees: async () => {
        console.log("test")
        const data = await api.get('employee')
        return data['data']
    }
})

export default EmployeeService