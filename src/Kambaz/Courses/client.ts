//implemetns all the course related communication between the user interface and the server.

import axios from "axios";
const axiosWithCredentials = axios.create({withCredentials: true});
const REMOTE_SERVER = import.meta.env.VITE_REMOTE_SERVER;
const COURSES_API = `${REMOTE_SERVER}/api/courses`;

//const USERS_API = `${REMOTE_SERVER}/api/users`;
const ENROLLMENTS_API = `${REMOTE_SERVER}/api/enrollments`;

export const findUsersForCourse = async (courseId: string) => {
    const response = await axiosWithCredentials.get(`${COURSES_API}/${courseId}/users`);
    return response.data;
};

// Course
export const fetchCourse = async (courseId: string) => {
    const response = await axiosWithCredentials.get(`${COURSES_API}/${courseId}`);
    return response.data;
};

export const fetchAllCourses = async() => {
    const {data} = await axiosWithCredentials.get(COURSES_API);
    return data;
};

export const createCourse = async(course: any) => {
    const {data} = await axiosWithCredentials.post(COURSES_API, course);
    return data;
};

export const deleteCourse = async(id: string) => {
    const {data} = await axiosWithCredentials.delete(`${COURSES_API}/${id}`);
    return data;
};

export const updateCourse = async (course: any) => {
    const {data} = await axiosWithCredentials.put(`${COURSES_API}/${course._id}`, course);
    return data;
};

// Module
export const createModuleForCourse = async (courseId: string, module:any) => {
    const response = await axiosWithCredentials.post(
        `${COURSES_API}/${courseId}/modules`, module
    );
    return response.data;
};

export const findModulesForCourse = async (courseId: string) => {
    const response = await axiosWithCredentials.get(
        `${COURSES_API}/${courseId}/modules`
    );
    return response.data;
};

// Enrollment
export const enrollInCourse = async (userId: string, courseId: string) => {
    const response = await axiosWithCredentials.post(ENROLLMENTS_API, { userId, courseId });
    return response.data;
};

export const unenrollFromCourse = async (userId: string, courseId: string) => {
    const response = await axiosWithCredentials.delete(`${ENROLLMENTS_API}/${userId}/${courseId}`);
    return response.data;
};

export const getEnrollments = async (userId: string) => {
    const response = await axiosWithCredentials.get(`${ENROLLMENTS_API}/${userId}`);
    return response.data;
};