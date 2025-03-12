import {createSlice} from "@reduxjs/toolkit";
import  {assignments} from "../../Database";
import {v4 as uuidv4} from "uuid";

const initialState = {
    assignments: assignments,
};

const assignmentsSlice = createSlice({
    name: "assignments",
    initialState,
    reducers:{
        addAssignment: (state, {payload}) => {
            // Validate required fields
            if (!payload.title || !payload.course) {
                console.log("Title and course are required fields");
                return;
            }
            const newAssignment = {
                _id: uuidv4(),
                title: payload.title,
                description: payload.descriptions,
                points: payload.points,
                dueDate: payload.dueDate,
                availableFrom: payload.availableFrom,
                availableTo: payload.availableTo,
                course: payload.course
                };
            state.assignments = [...state.assignments, newAssignment] as any;
        },

        deleteAssignment: (state, {payload: assignmentId}) => {
            state.assignments = state.assignments.filter(
            (assignment) => assignment._id !== assignmentId);
        },

        updateAssignment: (state, {payload}) => {
            state.assignments = state.assignments.map((assignment) => {
                if (assignment._id === payload._id) {
                    return {
                        ...assignment,
                        title: payload.title,
                        description: payload.description,
                        points: payload.points,
                        dueDate: payload.dueDate,
                        availableFrom: payload.availableFrom,
                        availableTo: payload.availableTo,
                    };
                }
                return assignment;
        });
        },

        editAssignment: (state, { payload: assignmentId })=> {
            state.assignments = state.assignments.map((a: any)=>
            a._id === assignmentId ? { ...a, editing: true } : a
            ) as any;
            },
    },
});

export const {addAssignment, deleteAssignment, updateAssignment, editAssignment} = assignmentsSlice.actions;
export default assignmentsSlice.reducer;