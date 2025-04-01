//import axios from "axios";
import { axiosWithCredentials } from "../../Account/client";
const REMOTE_SERVER = import.meta.env.VITE_REMOTE_SERVER;
const ASSIGNMENTS_API = `${REMOTE_SERVER}/api/assignments`;
const COURSES_API = `${REMOTE_SERVER}/api/courses`;

export const getAssignments = async() => {
    const {data} = await axiosWithCredentials.get(ASSIGNMENTS_API);
    return data;
};

export const deleteAssignment = async(assignmentId: string ) => {
    const response = await axiosWithCredentials.delete(`${ASSIGNMENTS_API}/${assignmentId}`);
    return response.data;
};

export const createAssignment = async(courseId: string, assignment: any) => {
    const response = await axiosWithCredentials.post(
        `${COURSES_API}/${courseId}/assignments`, assignment
    );
    return response.data;
};

export const findAssignmentsForCourse = async(courseId: string) => {
    const response = await axiosWithCredentials.get(`${ASSIGNMENTS_API}/${courseId}/assignments`);
    return response.data;
};

export const updateAssignment = async(assignment: any) => {
    const response = await axiosWithCredentials.put(`${ASSIGNMENTS_API}/${assignment._id}`, assignment);
    return response.data;
};