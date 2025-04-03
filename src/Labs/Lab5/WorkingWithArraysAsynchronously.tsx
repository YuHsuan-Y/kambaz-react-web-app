import {useEffect, useState} from "react";
import * as client from "./client";
import { FaTrash } from "react-icons/fa";
import {FaPlusCircle} from "react-icons/fa";
import {TiDelete} from "react-icons/ti";
import {FaPencil} from "react-icons/fa6";

interface Todo {
    id: string;
    title: string;
    completed: boolean;
    editing?: boolean;
}

export default function WorkingwithArraysAsynchnously(){
    const [todos, setTodos] = useState<Todo[]>([]);
    //error message for update and delete
    const[errorMessage, setErrorMessage] = useState<string | null>(null);
    const createTodo = async ()=>{
        const todos = await client.createTodo();
        setTodos(todos);
    };

    //HTTP post
    const postTodo = async()=>{
        const newTodo = await client.postTodo({
            title:"New Posted Todo", completed:false
        });
        setTodos([...todos, newTodo]);
    };

    //HTTP delete
    const deleteTodo = async(todo: Todo) =>{
        try{
            await client.deleteTodo(todo);
            const newTodos = todos.filter((t) => t.id !== todo.id);
            setTodos(newTodos);
        } catch(error: unknown){
            console.log(error);
            if (error instanceof Error) {
                setErrorMessage(error.message);
            } else {
                setErrorMessage("An unknown error occurred");
            }
        }
    };
    const fetchTodos = async() => {
        const todos = await client.fetchTodos();
        setTodos(todos);
    };

    const removeTodo = async(todo: Todo) =>{
        const updatedTodos = await client.removeTodo(todo);
        setTodos(updatedTodos);
    };

    const editTodo = (todo: Todo)=>{
        const updatedTodos = todos.map(
            (t) => t.id === todo.id? {...todo, editing: true} : t 
        );
        setTodos(updatedTodos);
    };

    const updateTodo = async(todo: Todo)=>{
        //await client.updateTodo(todo); -- not gonna tell server only change the local copy
        setTodos(todos.map((t) => (t.id === todo.id? todo : t )));
    };

    //updatea and save the result
    const saveTodo = async(todo:any)=>{
        try{
            await client.updateTodo(todo);
            setTodos(todos.map((t) => (t.id === todo.id? todo : t )));
        } catch(error:any){
            setErrorMessage(error.response.data.message);
        }
    };

    useEffect(()=>{
        fetchTodos();
    }, []);

    return(
        <div id="wd-asynchronously-arrays">
            <h3>Working with Arrays Asynchronously</h3>
            {errorMessage && (<div id = "wd-todo-error-message" className="alert alert-danger mb-2 mt-2">{errorMessage}</div>)}

            <h4>Todos
                {/*create todo button*/}
                <FaPlusCircle onClick={createTodo}
                    className="text-success float-end fs-3"
                    id="wd-create-todo"/>

                {/*post todo button -- blue add button*/}
                <FaPlusCircle onClick={postTodo} 
                    className="text-primary float-end fs-3 me-3" 
                    id="wd-post-todo"/>

            </h4>
            <ul className="list-group">
                {/*map used to iterate over the todos array and render a list for each task 
                key is a unique identifier to track changes for each todo item
                */}
                {todos.map((todo) => (
                    <li key={todo.id} className="list-group-item">
                        {/*remove todo button*/}
                        <FaTrash onClick={() => removeTodo(todo)}
                            className="text-danger float-end mt-1"
                            id="wd-remove-todo"/>
                        
                        {/*HTTP delete, matches server's app.delete as well as the URL format without the trailing /delete.*/}
                        <TiDelete onClick={() => deleteTodo(todo)}
                            className="text-danger float-end me-2 fs-3"
                            id="wd-delete-todo"/>

                        {/*edit todo button*/}
                        <FaPencil onClick={() => editTodo(todo)}
                            className="text-primary float-end me-2 mt-1"/>

                        <input type="checkbox" className="form-check-input me-2 float-start" 
                            defaultChecked={todo.completed}
                            onChange={(e)=> updateTodo({ ...todo, completed: e.target.checked }) } />
                            {!todo.editing ? (
                            <span style={{textDecoration: todo.completed ? 
                                "line-through" : "none" }}>
                               {todo.title}
                            </span>
                            ) : (
                            <input 
                                className="form-control w-50 float-start" 
                                defaultValue={todo.title}
                                onKeyDown={(e)=> {
                                    if (e.key === "Enter") {
                                        saveTodo({ ...todo, editing: false });
                                    }
                                }}
                                onChange={(e)=> updateTodo({ ...todo, title: e.target.value })}
                            />
                            )}
                        </li>
                    ))}
            </ul>{" "}
            <hr/>
        </div>
    );
}