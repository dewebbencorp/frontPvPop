import axios from "axios";

export const connection
 = axios.create({
    baseURL: import.meta.env.VITE_APP_PATH_BACKEND_TEST,
    timeout: 10000,
    headers:{
        'Content-Type': 'application/json'
    }
});