import axios from "axios";
export const REMOTE_SERVER = import.meta.env.VITE_REMOTE_SERVER;
const USERS_API = `${REMOTE_SERVER}/api/users`;
export const axiosWithCredentials = axios.create({ withCredentials: true });

interface Credentials {
    username: string;
    password: string;
}

interface User {
    _id?: string;
    username: string;
    password?: string;
    firstName?: string;
    lastName?: string;
    email?: string;
    role?: string;
}

export const signin = async (credentials: Credentials)=> {
    const response = await axiosWithCredentials.post(`${USERS_API}/signin`, credentials);
    return response.data;
};

export const profile = async ()=> {
    const response = await axiosWithCredentials.post(`${USERS_API}/profile`);
    return response.data;
};

export const signup = async (user: User) => {
    const response = await axiosWithCredentials.post(`${USERS_API}/signup`, user);
    return response.data;
};

export const signout = async() => {
    const response = await axiosWithCredentials.post(`${USERS_API}/signout`);
    return response.data;
};

export const updateUser = async (user: User)=>{
    const response = await axiosWithCredentials.put(`${USERS_API}/${user._id}`, user);
    return response.data;
};

//Course
export const findMyCourses = async() => {
    const response = await axiosWithCredentials.get(`${USERS_API}/current/courses`);
    return response.data;
};

interface Course {
    _id?: string;
    name: string;
    description: string;
    instructor?: string;
}

export const createCourse = async (course: Course) => {
    const response = await axiosWithCredentials.post(`${USERS_API}/current/courses`, course);
    return response.data;
};
