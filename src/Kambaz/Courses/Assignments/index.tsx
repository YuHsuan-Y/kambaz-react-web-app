import {BsGripVertical} from "react-icons/bs";
import AssignmentControlButtons from "./AssignmentControlButtons";
import AControlButtons from "./AControlButtons";
import { LuNotebookPen } from "react-icons/lu";
import {Link, useParams} from "react-router-dom";
//import * as db from "../../Database";

import {useState, useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import { setAssignments,addAssignment, deleteAssignment, updateAssignment } from "./reducer";
import AssignmentsControls from "./AssignmentsControls";
import * as client from "./client";
import AssignmentsEditor from "./AssignmentsEditor";

export default function Assignments(){
    const {cid} = useParams();
    //const {assignments} = db;
    const dispatch = useDispatch();
    const assignments = useSelector((state:any) => state.assignmentReducer.assignments);
    
    const [assignment, setAssignment] = useState({
        title: "",
        description: "",
        points: "",
        dueDate: "",
        availableFrom: "",
        availableTo: "",
    });
    const [isEditing, setIsEditing] = useState(false);
    const [showEditor, setShowEditor] = useState(false);

    const fetchAssignments = async() => {
        const assignments = await client.findAssignmentsForCourse(cid as string);
        dispatch(setAssignments(assignments));
    };

    const createAssignment = async(assignment: any) => {
        const newAssignment = await client.createAssignment(cid as string, assignment);
        dispatch(addAssignment(newAssignment));
    };

    const removeAssignment = async(assignmentId: string) => {
        if (!cid) return;
        await client.deleteAssignment(cid, assignmentId);
        dispatch(deleteAssignment(assignmentId)); //update the state
    };

    const saveAssignment = async(assignment: any) => {
        if (!cid) return;
        await client.updateAssignment(cid, assignment._id, assignment); 
        dispatch(updateAssignment(assignment));
    };

    const handleEdit = (assignmentId: string) => {
        const assignmentToEdit = assignments.find((a: any) => a._id === assignmentId);
        if (assignmentToEdit) {
            setAssignment(assignmentToEdit);
            setIsEditing(true);
            setShowEditor(true);
        }
    };

    const handleAdd = () => {
        setAssignment({
            title: "",
            description: "",
            points: "",
            dueDate: "",
            availableFrom: "",
            availableTo: "",
        });
        setIsEditing(false);
        setShowEditor(true);
    };

    const handleSaveAssignment = () => {
        saveAssignment(assignment);
    };

    useEffect(() => {
        fetchAssignments();
    }, []);

    return(
        <div id="wd-assignments" className="text-nowrap">
            <AssignmentsControls
                assignmentName={assignment}
                setAssignmentName={setAssignment}
                addAssignment={handleAdd}
                dialogTitle={isEditing ? "Edit Assignment" : "Add Assignment"}
                saveAssignment={handleSaveAssignment}
            />
            <br/>
            
            {showEditor && (
                <AssignmentsEditor
                    dialogTitle={isEditing ? "Edit Assignment" : "Add Assignment"}
                    assignmentName={assignment}
                    setAssignmentName={setAssignment}
                    addAssignment={() => {
                        createAssignment({...assignment, course: cid});
                        setAssignment({
                            title: "",
                            description: "",
                            points: "",
                            dueDate: "",
                            availableFrom: "",
                            availableTo: "",
                        });
                        setShowEditor(false);
                    }}
                    saveAssignment={() => {
                        saveAssignment(assignment);
                        setShowEditor(false);
                    }}
                    isEditing={isEditing}
                />
            )}
            
            {/* Assignment Header with Dropdown */}
            <ul id="wd-lessons" className="list-group rounded-0">
                <li className="wd-lesson list-group-item wd-assignment-title p-0 fs-5">
                    <div className="wd-title p-4 ps-2 bg-secondary">
                        <BsGripVertical className="me-2 fs-3"/>
                        <span className="wd-title fw-bold">ASSIGNMENTS</span>
                        <AssignmentControlButtons/>
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
                            deleteAssignment={removeAssignment}
                            editAssignment={handleEdit}
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