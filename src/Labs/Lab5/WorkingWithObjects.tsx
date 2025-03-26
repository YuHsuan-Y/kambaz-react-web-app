import { useState } from "react";
const REMOTE_SERVER = import.meta.env.VITE_REMOTE_SERVER;

export default function WorkingWithObjects() {
    const [assignment, setAssignment] = useState({
        id: 1, title:"NodeJS Assignment",
        description: "Create a NodeJS server with ExpressJS",
        due: "2021-10-10", completed:false, score: 0,
    });

    const ASSIGNMENT_API_URL = `${REMOTE_SERVER}/lab5/assignment`

    const [module, setModule] = useState({
        id: 1, name: "NodeJS Module",
        description: "Create a NodeJS server with ExpressJS",
        course: "CS5610",
    });

    //const MODULE_API_URL = `${REMOTE_SERVER}/lab5/module`

    return (
        <div id="wd-working-with-objects">
            <h3 id="wd-working-with-objects">Working With Objects</h3>

            <h4>Retrieving Objects</h4>
                <a id="wd-retrieve-assignments" className="btn btn-primary"
                    href={`${REMOTE_SERVER}/lab5/assignment`}>
                Get Assignment
                </a><hr/>

            <h4>Retrieving Properties</h4>
                <a id="wd-retrieve-assignment-title" className="btn btn-primary"
                    href={`${REMOTE_SERVER}/lab5/assignment/title`}>
                Get Title
                </a><hr/>

            <h4>Modifying Properties</h4>
                <a id="wd-update-assignment-title"
                    className="btn btn-primary float-end"
                    href={`${ASSIGNMENT_API_URL}/title/${assignment.title}`}>
                Update Title
                </a>

                <input className="form-control w-75" id="wd-assignment-title"
                    defaultValue={assignment.title} onChange={(e) =>
                        setAssignment({...assignment, title: e.target.value})
                }/><hr/>

            <h4>Modifying Score Properties</h4>
                <a id="wd-update-assignment-score" type="number"
                    className="btn btn-primary float-end"
                    href={`${ASSIGNMENT_API_URL}/score/${assignment.score}`}>
                    Update Score
                </a>

                <input className="form-control w-75" id="wd-assignment-score"
                    defaultValue={assignment.score} onChange={(e) =>
                        setAssignment({...assignment, score: parseInt(e.target.value)})
                }/><hr/>

            <h4 id="wd-checkboxes">Checkbox Completed Property</h4>
                <input type="checkbox" name="completed-check-property" id="wd-assignment-completed"
                  checked={assignment.completed} onChange={(e) =>
                    setAssignment({...assignment, completed: e.target.checked})}/>
                <label htmlFor="wd-assignment-completed">True</label><br/>

                <input type="checkbox" name="check-property" id="wd-assignment-not-completed"
                    checked={!assignment.completed} onChange={(e) =>
                        setAssignment({...assignment, completed: !e.target.checked})}/>
                    <label htmlFor="wd-assignment-not-completed">False</label><br/>

                <a id="wd-update-completed-property"
                    type="checkbox"
                    href={`${ASSIGNMENT_API_URL}/completed/${assignment.completed}`}>
                    Update Completed
                </a>

            <hr/>
            
            <h4>Module</h4>
                <a id="wd-get-module" className="btn btn-primary"
                    href={`${REMOTE_SERVER}/lab5/module`}>
                Get Module
                </a><hr/>
            
            <h4>Get Module Name</h4>
                <a id="wd-get-module-name" className="btn btn-primary"
                    href={`${REMOTE_SERVER}/lab5/module/name`}>
                        Get Name
                </a><hr/>

            <h4>Update Module Name</h4> 

                <a id="wd-update-module-name" 
                className="btn btn-primary float-end"
                    href={`${REMOTE_SERVER}/lab5/module/name/${module.name}`}>
                        Update Name
                </a>

                <input className="form-control w-75" id="wd-module-name"
                    defaultValue={module.name} onChange={(e) =>
                        setModule({...module, name: e.target.value})
                }/>
            <hr/>
        </div>

    );
}
/*
const [assignment, setAssignment] = useState({
        id: 1, title: "NodeJS Assignment", description:"Create a NodeJS server with ExpressJS",
        due: "2021-10-10", completed: false, score: 0,
    });

    const[title, setTitle] = useState(null);
*/