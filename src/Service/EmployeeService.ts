import { AxiosInstance } from "axios";
import { defaultAxiosInstance } from "./Api";
import { Employee } from "../Types/Employee";

/**
 * This Employee Service Implements the 5 CRUD Methods to
 * Access the Data from The JSON Webserver
 * @param api The Axios Object given or default Axios Object
 * @returns a response from the JSON webserver
 */
const EmployeeService = (api: AxiosInstance = defaultAxiosInstance) => ({
  getAllEmloyees: async () => {
    const data = await api.get("employee");
    return data["data"];
  },
  getEmployeeById: async (id: string) => {
    const data = await api.get(`employee/${id}`);
    return data.data;
  },
  createEmployee: async (employee: Employee) => {
    const data = await api.post("employee", employee);
    return data["data"];
  },
  updateEmployee: async (id: string, employee: Employee) => {
    const data = await api.put(`employee/${id}`, employee);
    return data["data"];
  },
  deleteEmployee: async (id: string) => {
    const data = await api.delete(`employee/${id}`);
    return data["data"];
  },
});

export default EmployeeService;
