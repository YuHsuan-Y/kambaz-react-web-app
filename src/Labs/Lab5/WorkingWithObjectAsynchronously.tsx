import {useEffect, useState} from "react";
import * as client from "./client";

export default function WorkingWithObjectAsynchrnously(){
    const [assignment, setAssignment] = useState<any>({});
    const fetchAssignment = async () => {
        const assignment = await client.fetchAssignment();
        setAssignment(assignment);
    };
    const updateTitle = async(title:string)=>{
        const updateAssignment = await client.updateTitle(title);
        setAssignment(updateAssignment);
    };
    //useEffect to fetch the assignment 
    useEffect(() => {
        fetchAssignment();
    }, []);

    return(
        <div id="wd-asynchronous-objects">
            <h3>Working with Object Asynchronously</h3>
            <h4>Assignment</h4>
            <input type="text" defaultValue={assignment.title}
                className="form-control mb-2"
                onChange={(e) => setAssignment({...assignment, title: e.target.value})}/>
            
            <textarea defaultValue={assignment.description}
                className="form-control mb-2" 
                onChange={(e) => setAssignment({...assignment, description: e.target.value})}/>
            
            <input type="date" defaultValue={assignment.due}
                className="form-control mb-2"
                onChange={(e) => setAssignment({...assignment, due:e.target.value})}/>
            
            <div className="form-check form-switch">
                <input type="checkbox" defaultValue={assignment.completed}
                    className="form-check-input mb-2"
                    onChange={(e)=> setAssignment({...assignment, completed:e.target.checked})}/>
                <label className="form-check-label" htmlFor="wd-completed">Completed</label>
            </div>

            <button className="btn btn-primary me-2" onClick={() => updateTitle(assignment.title)}>Update Title</button>
            {/*JSON expression used to format and display JSON data in a readable way.
            JSON.stringify(value, replacer, space);*/}
            <pre>{JSON.stringify(assignment, null, 2)}</pre>
            <hr/>
        </div>
    );
}