import { useState } from "react";
const REMOTE_SERVER = import.meta.env.VITE_REMOTE_SERVER;

export default function WorkingWithArrays(){
    const API = `${REMOTE_SERVER}/lab5/todos`;

    const [todo, setTodo] = useState({
        id:"1",
        title:"NodeJS Assignment",
        description:"Create a NodeJS server with ExpressJS",
        due: "2021-09-09",
        completed:true,
    });

    return(
        <div id="wd-working-with-arrays">
            <h3>Working with Arrays</h3>
            <h4>Retrieving Arrays</h4>
            <a className="btn btn-primary" id="wd-retrieve-todos"
                href={API}>
                Get Todos
            </a><hr/>

            <h4>Retrieving an Item from an Array by ID</h4>
            <a id="wd-retrieve-todo-by-id"
                className="btn btn-primary float-end"
                href = {`${API}/${todo.id}`}>
                Get Todo by ID
            </a>

            <input id="wd-todo" defaultValue={todo.id}
                className="form-control w-50"
                onChange={(e) => setTodo({...todo,id: e.target.value})}/>
            <hr/>

            <h3>Filtering Array Items</h3>
            <a id="wd-retrieve-completed-todos"
                className="btn btn-primary"
                href={`${API}?completed=true`}>
                Get Completed Todos
            </a>
            <br/><hr/>

            <h3>Creating new Items in an Array</h3>
                <a id="wd-create-todo"
                    className="btn btn-primary"
                    href={`${API}/create`}>
                Create Todo
            </a>
            <br/><hr/>

            <h3>Deleting an Item from an Array</h3>
            <a id="wd-delete-todo" className="btn btn-primary float-end"
                href={`${API}/${todo.id}/delete`}>
                Delete Todo with ID = {todo.id}
            </a>
            <input defaultValue={todo.id}
                className="form-control w-50"
                onChange={(e) => setTodo({...todo, id:e.target.value})}/>

            <br/><hr/>

            <h3>Updating an Item in an Array</h3>
            <a id="wd-update-todo" className="btn btn-primary float-end"
                href={`${API}/${todo.id}/title/${todo.title}`}>
                Update Todo</a>
            <input defaultValue={todo.id} className="form-control w-25 float-start me-2"
                onChange={(e)=> setTodo({...todo, id: e.target.value})}/>

            <input defaultValue={todo.title} className="form-control w-50 float-start"
                onChange={(e) => setTodo({...todo, title: e.target.value})}/>
            <br/><br/><hr/>  
            
            <h3>Updating Completed & Description property</h3> 
                <h4>Checkbox Update Completed</h4>
                <input type="checkbox" name="completed-check-property"
                    id="wd-todo-completed-checkbox"
                    checked={todo.completed}
                    onChange={(e) => setTodo({...todo, completed:e.target.checked})}/>
                <label htmlFor="wd-todo-completed-checkbox">True</label><br/>

                <input type="checkbox" name="not-completed-check-property"
                    id="wd-todo-not-completed-checkbox"
                    checked={!todo.completed}
                    onChange={(e) => setTodo({...todo, completed: !e.target.checked})}/>
                <label htmlFor="wd-todo-not-completed-checkbox">False</label><br/>

                <a id="wd-update-completed-property"
                    type="checkbox"
                    href={`${API}/${todo.id}/completed/${todo.completed}`}>
                    Completed Todo ID = {todo.id}
                </a>
                <br/>

                <h4>Update Description</h4>
                <input type="text" defaultValue={todo.description}
                    className="" onChange={(e) => setTodo({...todo, description:e.target.value})}/><br/>
                <a id="wd-update-description" 
                    href={`${API}/${todo.id}/description/${todo.description}`}  >
                    Describe Todo ID = {todo.id}
                </a>
                <hr/>
         </div>
    );
}