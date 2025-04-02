import {BsGripVertical} from "react-icons/bs";
import AssignmentControlButtons from "./AssignmentControlButtons";
import AControlButtons from "./AControlButtons";
import { LuNotebookPen } from "react-icons/lu";
import {Link, useParams} from "react-router-dom";
//import * as db from "../../Database";
import {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import { addAssignment, deleteAssignment } from "./reducer";
import AssignmentsControls from "./AssignmentsControls";
import { useNavigate } from "react-router-dom";

export default function Assignments(){
    const {cid} = useParams();
    //const {assignments} = db;
    const dispatch = useDispatch();
    const assignments = useSelector((state:any) => state.assignmentReducer.assignments);
    const navigate = useNavigate();
    
    const [assignment, setAssignment] = useState({
        title: "",
        description: "",
        points: "",
        dueDate: "",
        availableFrom: "",
        availableTo: "",
    });

    return(
        <div id="wd-assignments" className="text-nowrap">
            <AssignmentsControls
                assignmentName={assignment}
                setAssignmentName={setAssignment}
                addAssignment={() => {
                    if (!cid) return;
                    dispatch(addAssignment({ 
                        ...assignment, 
                        course: cid,
                        description: assignment.description
                    }));
                    setAssignment({
                        title: "",
                        description: "",
                        points: "",
                        dueDate: "",
                        availableFrom: "",
                        availableTo: "",
                    });
                }}
                dialogTitle="Add Assignment"
                saveAssignment={() => {
                    if (!cid) return;
                    dispatch(addAssignment({ 
                        ...assignment, 
                        course: cid,
                        description: assignment.description
                    }));
                    setAssignment({
                        title: "",
                        description: "",
                        points: "",
                        dueDate: "",
                        availableFrom: "",
                        availableTo: "",
                    });
                }}
            />
            <br/>
            
             {/* Assignment Header with Dropdown */}
            <ul id="wd-lessons" className="list-group rounded-0">
                <li className="wd-lesson list-group-item wd-assignment-title p-0 fs-5">
                    <div className="wd-title p-4 ps-2 bg-secondary">
                        <BsGripVertical className="me-2 fs-3"/>
                        <span className="wd-title fw-bold">ASSIGNMENTS</span>
                        <AssignmentControlButtons
                            totalPoints={40}
                            onAdd={() => {
                                // Handle adding a new assignment group
                                console.log("Add assignment group");
                            }}
                        />
                    </div>
            
            {/*Assignment list*/}
                {assignments.filter((assignment: any) => assignment.course === cid)
                .map((assignment: any) => ( 
                    <div key={assignment._id} className="wd-assignment-list-item list-group-item p-3 ps-2"> 
                        <Link to={`/Kambaz/Courses/${cid}/Assignments/${assignment._id}`}
                            className="wd-assignment-link p-5 text-black fw-bold">
                            {assignment.title}
                        </Link>

                        <br/>
                        <BsGripVertical className="me-1 fs-4"/>
                        <LuNotebookPen className="me-2 fs-4" color="green"/>
                        <span className="text-danger me-3">Multiple Modules</span> | 
                        <span className="fw-bold me-3"> Not Available until </span>{assignment.availableTo} | 
                        
                        {/*Delete, edit assignemnt here -- list*/}
                        <AControlButtons
                            assignmentId={assignment._id}
                            deleteAssignment={(assignmentId) => {
                                dispatch(deleteAssignment(assignmentId));
                            }}
                            editAssignment={(assignmentId) => {
                                // Navigate to the editor page for this assignment
                                navigate(`/Kambaz/Courses/${cid}/Assignments/${assignmentId}/edit`);
                            }}
                        />
                        <br/>
                        <span className="fw-bold p-4">Due</span>{assignment.dueDate} | {assignment.points} pts
                    </div>  
                    ))}
                </li>
            </ul>
        </div>
    );
}