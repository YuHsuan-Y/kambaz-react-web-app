import {BsGripVertical, BsSearch} from "react-icons/bs";
import AssignmentControlButtons from "./AssignmentControlButtons";
import AControlButtons from "./AControlButtons";
import { LuNotebookPen } from "react-icons/lu";

import {Link, useParams} from "react-router-dom";
import * as db from "../../Database";

export default function Assignments(){
    //const {pathname} = useLocation();
    const {cid} = useParams();
    const{assignments} = db;

    return(
        <div id="wd-assignments" className="text-nowrap">
            <div className="d-flex justify-content-between align-items-center">
                <div className="input-group w-50">
                    <span className="input-group-text">
                        <BsSearch/>  
                    </span>
                    <input type="text" placeholder="Search..." id="wd-search-assignment" className="form-control w-50"/>
                    
                </div>

            {/* Buttons floated to the right */}
            <div className="d-flex">
                <button id="wd-add-assignment-group" className="btn btn-light me-2 float-end">+ Group</button>
                <button id="wd-add-assignment" className="btn btn-danger me-1 float-end">+ Assignment</button>
            </div>

          

            </div>
            <br/>

            <ul id="wd-lessons" className="list-group rounded-0"> </ul>
            <li className="wd-lesson list-group-item wd-assignment-title p-0 fs-5" ></li>  
                
                {/* Assignment Header with Dropdown */}
                <div className="wd-title p-4 ps-2 bg-secondary">
                <BsGripVertical className="me-2 fs-3"/>
                <span className="wd-title fw-bold">ASSIGNMENTS</span>
  
                <AssignmentControlButtons/>
                </div>

                
               { /*from here 
                   <a href="#/Kambaz/Courses/1234/Assignments/123"
                        className="wd-assignment-link p-5 text-black fw-bold">
                        A1
                    </a>
                    <ul className="wd-assignment-list-item list-group-item p-3 ps-2">
               */}
                {assignments.filter((assignment) => 
                assignment.course === cid)
                
                .map((assignment: any) => ( 
                    <div key={assignment._id} className="wd-assignment-list-item list-group-item p-3 ps-2"> 
                
                        <Link to = {`/Kambaz/Courses/${cid}/Assignments/${assignment._id}`}
                            className="wd-assignment-link p-5 text-black fw-bold">
                        {assignment.title}
                        </Link>
                    

                        <br/>
                        <BsGripVertical className="me-1 fs-4"/>
                        <LuNotebookPen className="me-2 fs-4" color="green"/>
                        <span className = "text-danger me-3">Multiple Modules</span> | 
                        <span className="fw-bold me-3"> Not Available until </span>{assignment.availableTo} | 
                            <AControlButtons/>
                        <br/>
                        <span className="fw-bold p-4">Due</span>{assignment.dueDate} | {assignment.points} pts
                    </div>  

                ))
                }
        </div>
    );
}

{/*
    <ul className="wd-assignment-list-item list-group-item p-3 ps-2">
                    <a href="#/Kambaz/Courses/1234/Assignments/1234" className="wd-assignment-link p-5 text-black fw-bold">
                        A2
                    </a>
                    <br/>
                    <BsGripVertical className="me-1 fs-4"/>
                    <LuNotebookPen className="me-2 fs-4" color="green"/>
                    <span className = "text-danger me-3">Multiple Modules</span> | 
                    <span className="fw-bold me-3"> Not Available until </span>May 13 at 12:00am |  
                        <AControlButtons/>
                    <br/>
                    <span className="fw-bold p-4">Due</span>May 20 at 11:59pm | 100 pts
                </ul>
                

                <ul className="wd-assignment-list-item list-group-item p-3 ps-2">
                    <a href="#/Kambaz/Courses/1234/Assignments/1234" className="wd-assignment-link p-5 text-black fw-bold">
                        A3
                    </a>
                    <br/>
                    <BsGripVertical className="me-1 fs-4"/>
                    <LuNotebookPen className="me-2 fs-4" color="green"/>
                    <span className = "text-danger me-3">Multiple Modules</span> | 
                    <span className="fw-bold me-3"> Not Available until </span>May 20 at 12:00am |  
                    <AControlButtons/>
                    <br/>
                    <span className="fw-bold p-3"> Due</span>May 27 at 11:59pm | 100 pts
                </ul>
             

    */}