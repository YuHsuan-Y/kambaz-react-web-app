//add new assignments
import AssignmentsEditor from "./AssignmentsEditor";
import {BsSearch} from "react-icons/bs";

interface AssignmentsControlsProps {
    assignmentName: {
        title: string;
        description: string;
        points: string;
        dueDate: string;
        availableFrom: string;
        availableTo: string;
    };
    setAssignmentName: (assignment: {
        title: string;
        description: string;
        points: string;
        dueDate: string;
        availableFrom: string;
        availableTo: string;
    }) => void;
    addAssignment: () => void;
    dialogTitle: string;
    saveAssignment: () => void;
}

export default function AssignmentsControls({
    assignmentName,
    setAssignmentName,
    addAssignment,
    dialogTitle,
    saveAssignment
}: AssignmentsControlsProps) {
    return (
        <div className="d-flex justify-content-between align-items-center">
            <div className="input-group w-50">
                <span className="input-group-text">
                    <BsSearch/>  
                </span>
                <input 
                    type="text" 
                    placeholder="Search..." 
                    id="wd-search-assignment" 
                    className="form-control w-50"
                />
            </div>

            <div className="d-flex">
                <button 
                    id="wd-add-assignment-group" 
                    className="btn btn-light me-2"
                    data-bs-toggle="modal"
                    data-bs-target="#wd-add-assignment-dialog"
                >
                    + Group
                </button>

                <button 
                    id="wd-add-assignment" 
                    className="btn btn-danger me-1"
                    data-bs-toggle="modal"
                    data-bs-target="#wd-add-assignment-dialog"
                >
                    + Assignment
                </button>
            </div>

            <AssignmentsEditor 
                dialogTitle={dialogTitle}
                assignmentName={assignmentName}
                setAssignmentName={setAssignmentName}
                addAssignment={addAssignment}
                saveAssignment={saveAssignment}
            />
        </div>
    );
}
