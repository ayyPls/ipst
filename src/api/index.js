import axios from "axios"

export const api = axios.create({
    baseURL: 'https://api.englishpatient.org',
    headers: { 'Content-Type': 'application/json' }
})

const checkTokenInterceptor = (config) => {
    const token = localStorage.getItem('token');
    if (config.method === 'get' && token) {
        config.headers.Authorization = token;
    }
    return config;
};

api.interceptors.request.use(checkTokenInterceptor);

const tokenSuccessInterceptor = (response) => {
    if (response.data.error) {
        return { error: response.data };
    }
    return response;
};

api.interceptors.response.use(tokenSuccessInterceptor);