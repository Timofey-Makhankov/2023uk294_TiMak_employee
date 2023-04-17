import { AxiosInstance } from "axios";
import { defaultAxiosInstance } from "./Api";
import { Employee } from "../Types/Employee";

const EmployeeService = (api: AxiosInstance = defaultAxiosInstance) => ({
    getAllEmloyees: async () => {
        console.log("test")
        const data = await api.get('employee')
        return data['data']
    },
    getEmployeeById: async (id: string) => {
        const data = await api.get(`employee/${id}`)
        return data.data
    },
    createEmployee: async (employee: Employee) => {
        console.log("hello")
        const data = await api.post("employee", employee)
        console.log("2. hallo")
        return data['data']
    },
    updateEmployee: async (id: string, employee: Employee) => {
        const data = await api.put(`employee/${id}`, employee)
        return data['data']
    },
    deleteEmployee: async (id: string) => {
        const data = await api.delete(`employee/${id}`)
        return data['data']
    }
})

export default EmployeeService