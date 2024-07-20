import axios from "axios";

const axiosPublic = axios.create({
<<<<<<< HEAD
    baseURL: 'http://localhost:8000/api/v1'
=======
    baseURL: 'http://localhost:8000/api/v1',
    withCredentials: true,
>>>>>>> origin/main
})

const useAxiosPublic = () => {
    return axiosPublic;
};

export default useAxiosPublic;