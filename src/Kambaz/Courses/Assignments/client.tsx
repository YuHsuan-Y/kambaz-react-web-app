//import axios from "axios";
import { axiosWithCredentials } from "../../Account/client";

const REMOTE_SERVER = import.meta.env.VITE_REMOTE_SERVER;
const COURSES_API = `${REMOTE_SERVER}/api/courses`;

export const getAssignments = async() => {
    const {data} = await axiosWithCredentials.get(`${COURSES_API}/assignments`);
    return data;
};

export const findAssignmentsForCourse = async(courseId: string) => {
    const response = await axiosWithCredentials.get(`${COURSES_API}/${courseId}/assignments`);
    return response.data;
};

export const deleteAssignment = async(courseId: string, assignmentId: string) => {
    const response = await axiosWithCredentials.delete(`${COURSES_API}/${courseId}/assignments/${assignmentId}`);
    return response.data;
};

export const createAssignment = async(courseId: string, assignment: any) => {
    const response = await axiosWithCredentials.post(
        `${COURSES_API}/${courseId}/assignments`, assignment
    );
    return response.data;
};

export const updateAssignment = async(courseId: string, assignmentId: string, assignment: any) => {
    const response = await axiosWithCredentials.put(
        `${COURSES_API}/${courseId}/assignments/${assignmentId}`, 
        assignment
    );
    return response.data;
};