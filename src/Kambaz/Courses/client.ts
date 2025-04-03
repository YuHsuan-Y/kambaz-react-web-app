//implemetns all the course related communication between the user interface and the server.

import axios from "axios";
import { axiosWithCredentials } from "../Account/client";
const REMOTE_SERVER = import.meta.env.VITE_REMOTE_SERVER;
const COURSES_API = `${REMOTE_SERVER}/api/courses`;
//const USERS_API = `${REMOTE_SERVER}/api/users`;
const ENROLLMENTS_API = `${REMOTE_SERVER}/api/enrollments`;

// Course
export const fetchAllCourses = async() => {
    const {data} = await axios.get(COURSES_API);
    return data;
};
/*
export const createCourse = async(course: any) => {
    const {data} = await axiosWithCredentials.post(COURSES_API, course);
    return data;
};
*/


export const deleteCourse = async(id: string) => {
    const {data} = await axios.delete(`${COURSES_API}/${id}`);
    return data;
};

export const updateCourse = async (course: any) => {
    const {data} = await axios.put(`${COURSES_API}/${course._id}`, course);
    return data;
};

// Module
export const createModuleForCourse = async (courseId: string, module:any) => {
    const response = await axios.post(
        `${COURSES_API}/${courseId}/modules`, module
    );
    return response.data;
};

export const findModulesForCourse = async (courseId: string) => {
    const response = await axios.get(`${COURSES_API}/${courseId}/modules`);
    return response.data;
};

// Enrollment functions
export const enrollInCourse = async (userId: string, courseId: string) => {
    const response = await axiosWithCredentials.post(ENROLLMENTS_API, { userId, courseId });
    return response.data;
};

// Get course by ID
export const fetchCourse = async (courseId: string) => {
    const response = await axiosWithCredentials.get(`${COURSES_API}/${courseId}`);
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