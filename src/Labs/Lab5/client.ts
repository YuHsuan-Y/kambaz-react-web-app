//USER INTERFACE
import axios from "axios";//imported for making HTTP requests

const REMOTE_SERVER = import.meta.env.VITE_REMOTE_SERVER;

const TODOS_API = `${REMOTE_SERVER}/lab5/todos`;

export const fetchTodos = async()=>{
    const response = await axios.get(TODOS_API);
    return response.data;
};
export const fetchWelcomeMessage = async () => {
    const response = await axios.get(`${REMOTE_SERVER}/lab5/welcome`);
    return response.data;
};

const ASSIGNMENT_API = `${REMOTE_SERVER}/lab5/assignment`;
export const fetchAssignment = async () => {
    //send a GET request to the URL, retrieve the response and returns assignments information
    //axios is a JS library used for making HTTP requests to a server.
    const response = await axios.get(`${ASSIGNMENT_API}`);
    return response.data;
};

export const updateTitle = async(title: string) => {
    //await is used to handing asynchronous operation, it ensures that response.data is available before trying to log it
    const response = await axios.get(`${ASSIGNMENT_API}/title/${title}`);
    return response.data;
};

//HTTP PUT -- update
export const updateTodo = async(todo:any) => {
    const response = await axios.put(`${TODOS_API}/${todo.id}`, todo)
    return response.data;
}

//remove data from a server asynchronously
export const removeTodo = async(todo:any) => {
    const response = await axios.get(`${TODOS_API}/${todo.id}/delete`);
    return response.data;
};
//HTTP delete, matches server's app.delete as well as the URL format without the trailing /delete.
export const deleteTodo = async(todo:any) => {
    const response = await axios.delete(`${TODOS_API}/${todo.id}`);
    return response.data;
}

export const createTodo = async() => {
    const response = await axios.get(`${TODOS_API}/create`);
    return response.data;
};

//HTTP post
//contains the todo instance added to the todos array in the server instead of all the todos on the server.
export const postTodo = async(todo: any) => {
    const response = await axios.post(`${TODOS_API}`, todo);
    return response.data;;
};