import {createSlice} from "@reduxjs/toolkit";
//import  {assignments} from "../../Database";
//import {v4 as uuidv4} from "uuid";

/*
const initialState = {
    assignments: assignments,
};
*/

const initialState = {
    assignments: [],
};

const assignmentsSlice = createSlice({
    name: "assignments",
    initialState,
    reducers:{
        setAssignments: (state, action) => {
            state.assignments = action.payload;
        },

        addAssignment: (state, {payload: assignment}) => {
            
            const newAssignment = {
                _id: new Date().getTime().toString(),
                title: assignment.title,
                description: assignment.description,
                points: assignment.points,
                dueDate: assignment.dueDate,
                availableFrom: assignment.availableFrom,
                availableTo: assignment.availableTo,
                course: assignment.course
                };
            state.assignments = [...state.assignments, newAssignment] as any;
        },

        deleteAssignment: (state, {payload: assignmentId}) => {
            state.assignments = state.assignments.filter(
            (a: any) => a._id !== assignmentId);
        },

        updateAssignment: (state, {payload: assignment}) => {
            state.assignments = state.assignments.map((a: any) => 
                a._id === assignment._id ? assignment : a) as any;
        },

        editAssignment: (state, { payload: assignmentId })=> {
            state.assignments = state.assignments.map((a: any)=>
            a._id === assignmentId ? { ...a, editing: true } : a
            ) as any;
        },
    },
});

export const {addAssignment, deleteAssignment, updateAssignment, editAssignment, setAssignments} = assignmentsSlice.actions;
export default assignmentsSlice.reducer;