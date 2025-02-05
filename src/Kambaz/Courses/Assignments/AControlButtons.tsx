import { IoEllipsisVertical } from "react-icons/io5";
import GreenCheckMark from "./GreenCheckMark";

export default function AControlButtons(){
    return(
        <div className="float-end">
            <GreenCheckMark/>
            <IoEllipsisVertical className="fs-4" />
        </div>
    );
}

