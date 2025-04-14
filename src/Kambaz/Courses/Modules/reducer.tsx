import {createSlice} from "@reduxjs/toolkit";
//import {modules} from "../../Database";
import {v4 as uuidv4} from "uuid";

interface Lesson {
    _id: string;
    name: string;
    description: string;
    module: string;
}

interface Module {
    _id: string;
    name: string;
    description: string;
    course: string;
    lessons?: Lesson[];
    editing?: boolean;
}

interface ModulesState {
    modules: Module[];
}

const initialState: ModulesState = {
    modules: [],
};

const modulesSlice = createSlice({
    name: "modules",
    initialState,
    reducers:{
        setModules: (state, {payload: modules}: {payload: Module[]}) => {
            state.modules = modules;
        },

        addModule: (state, {payload: module}: {payload: Omit<Module, '_id' | 'lessons'>}) => {
            const newModule: Module = {
                _id: uuidv4(),
                name: module.name,
                description: module.description,
                course: module.course,
                lessons: [],
            };
            state.modules = [...state.modules, newModule];
        },

        deleteModule: (state, {payload: moduleId}: {payload: string}) => {
            state.modules = state.modules.filter(
                (m) => m._id !== moduleId);
        },

        updateModule: (state, {payload: module}: {payload: Module}) => {
            state.modules = state.modules.map((m) =>
                m._id === module._id ? module : m
            );
        },
        /*
        editModule: (state, {payload: moduleId}: {payload: string})=> {
            state.modules = state.modules.map((m) =>
                m._id === moduleId ? { ...m, editing: true } : m
            );
        },
        */
    },
});

export const { addModule, deleteModule, updateModule, setModules } = modulesSlice.actions;
export default modulesSlice.reducer;