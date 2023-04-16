import { AxiosInstance } from "axios";
import { defaultAxiosInstance } from "./Api";
/*
const config = {
    headers: {
        Authorization : `Bearer ${localStorage.getItem("access_token")}`
    }
}
*/
const EmployeeService = (api: AxiosInstance = defaultAxiosInstance) => ({
    getAllEmloyees: async () => {
        console.log("test")
        const data = await api.get('employee'/*, config*/)
        return data['data']
    }
})

export default EmployeeService