import axios from "axios";
import { useNavigate } from "react-router-dom";
import useAuth from './useAuth'

const axiosSecure = axios.create({
    baseURL: 'http://localhost:5000/'
})

const useAxiosSecure = () => {
    const navigate = useNavigate()
    const { logOut } = useAuth()
    // Interceptior for all secret route
    axiosSecure.interceptors.request.use(function (config) {
        const token = localStorage.getItem('Access-Token')
        // console.log('interceptor', token)
        config.headers.authorization = `Bearer ${token}`

        return config;
    }, function (error) {
        return Promise.reject(error);
    })
    // End


    // Intercepts 401 and 403 status
    axiosSecure.interceptors.response.use(function (response) {
        return response;
    }, async (error) => {
        const status = error.response.status
        // console.log('status error in interceptor', status)

        // For 401 and 403 logout the user and move the user to the login
        if (status === 401 || status === 403) {
            await logOut()
            navigate('/login')
        }
        return Promise.reject(error)
    })


    return axiosSecure;
};

export default useAxiosSecure;