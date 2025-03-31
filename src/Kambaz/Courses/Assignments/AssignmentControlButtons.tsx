import {IoEllipsisVertical} from "react-icons/io5";
import {IoAdd} from "react-icons/io5";

export default function AssignmentControlButtons(){
    
    return(
        <div className="float-end">
            <span className="badge border border-secondary text-dark bg-light rounded-pill px-3 py-1"> 40% of Total </span>
            <IoAdd className="fs-4"/>
            <IoEllipsisVertical className="fs-4"/>
        </div>
    );
}