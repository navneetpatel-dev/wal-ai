import axios from "axios";

const baseURL = "https://cfad-182-50-66-213.ngrok-free.app";

export const api = axios.create({
    baseURL,
})


// TODO: implement this interceptor
api.interceptors.response.use((response) => {
    return response;
}, (error) => {
    return Promise.reject(error);
})

api.interceptors.request.use((config) => {
    const token = localStorage.getItem("token_ramailo");
    if (token) {
        const parsed = JSON.parse(token);
        config.headers = {
            ...config.headers,
            Authorization: `Bearer ${parsed.access_token}`,
        }
    }
    return config;
}, (error) => {
    return Promise.reject(error);
})