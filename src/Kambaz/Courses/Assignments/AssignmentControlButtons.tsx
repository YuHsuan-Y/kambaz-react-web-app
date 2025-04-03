import {IoEllipsisVertical} from "react-icons/io5";
import {IoAdd} from "react-icons/io5";

export default function AssignmentControlButtons({
    totalPoints,
    onAdd
}: {
    totalPoints: number;
    onAdd: () => void;
}) {
    return(
        <div className="float-end">
            <span className="badge border border-secondary text-dark bg-light rounded-pill px-3 py-1">
                {totalPoints}% of Total
            </span>
            <IoAdd className="fs-4" onClick={onAdd}/>
            <IoEllipsisVertical className="fs-4"/>
        </div>
    );
}