import { IoEllipsisVertical } from "react-icons/io5";
import GreenCheckMark from "./GreenCheckMark";
import { FaTrash } from "react-icons/fa";
import DeleteDialog from "./DeleteDialog";

export default function AControlButtons(
    {assignmentId, deleteAssignment}: 
    {assignmentId: string, deleteAssignment: (assignmentId: string) => void;})
    {
    return(
        <div className="float-end">
            <FaTrash className="text-danger me-2 mb-1" 
            data-bs-toggle="modal" 
            data-bs-target={`#wd-delete-assignment-dialog-${assignmentId}`}
            />
            

            <GreenCheckMark/>
            <IoEllipsisVertical className="fs-4" />

            <DeleteDialog assignmentId={assignmentId} deleteAssignment={deleteAssignment} />
        </div>

    );
}

/*<FaPencil onClick={()=> editAssignment(assignmentId)} className="text-primary me-3" /> */

