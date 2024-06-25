import axios from "axios";

const api = axios.create({
    baseURL: "https://task-management-backend-5qx2.onrender.com/api",
});
export default api;