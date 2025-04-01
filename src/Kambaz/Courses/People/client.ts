import axios from "axios";
const REMOTE_SERVER = import.meta.env.VITE_REMOTE_SERVER;
const ENROLLMENT_API = `${REMOTE_SERVER}/api/enrollments`;

export const deleteEnrollment = async(id: string) => {
    const {data} = await axios.delete(`${ENROLLMENT_API}/${id}`);
    return data;
};

export const createEnrollment = async(enrollment: any) => {
    const response = await axios.post(`${ENROLLMENT_API}`, enrollment);
    return response.data;
};

export const findEnrollment = async(userId: string) => {
    const {data} = await axios.get(`${ENROLLMENT_API}/${userId}`);
    return data;
};

