import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

type Enrollment = {
    _id: string;
    user: string;
    course: string;
};

const loadEnrollments = () => {
    try {
        const serializedState = localStorage.getItem('enrollments');
        return serializedState ? JSON.parse(serializedState) : [];
    } catch (e) {
        console.warn('Failed to load enrollments from local storage', e);
        return [];
    }
};

const saveEnrollments = (enrollments: Enrollment[]) => {
    try {
        const serializedState = JSON.stringify(enrollments);
        localStorage.setItem('enrollments', serializedState);
    } catch (e) {
        console.warn('Failed to save enrollments to local storage', e);
    }
};

const initialState = {
    enrollments: loadEnrollments(),
};

const enrollmentsSlice = createSlice({
    name: "enrollments",
    initialState,
    reducers: {
        enroll: (state, { payload: { userId, courseId } }: { payload: { userId: string; courseId: string } }) => {
            if (!state.enrollments.some((e: Enrollment) => e.user === userId && e.course === courseId)) {
                state.enrollments.push({ _id: uuidv4(), user: userId, course: courseId });
                saveEnrollments(state.enrollments);
            }
        },
        unenroll: (state, { payload: { userId, courseId } }: { payload: { userId: string; courseId: string } }) => {
            state.enrollments = state.enrollments.filter(
                (e: Enrollment) => !(e.user === userId && e.course === courseId)
            );
            saveEnrollments(state.enrollments);
        },
    },
});

export const { enroll, unenroll } = enrollmentsSlice.actions;
export default enrollmentsSlice.reducer;
