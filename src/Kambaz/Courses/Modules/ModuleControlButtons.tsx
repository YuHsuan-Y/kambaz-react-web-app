import {IoEllipsisVertical} from "react-icons/io5";
import { IoAdd } from "react-icons/io5";
import GreenCheckmark from "./GreenCheckmark";

import {FaTrash} from "react-icons/fa";
import {FaPencil} from "react-icons/fa6";

export default function ModuleControlButtons(
    {moduleId, deleteModule, updateModule} : {
        moduleId: string; 
        deleteModule: (moduleId: string) => void; 
        updateModule: (moduleId: string) => void})
{

    return(
        <div className="float-end">
            <FaPencil onClick={() => updateModule(moduleId)} className="text-primary me-3" />
            <FaTrash className="text-danger me-2 mb-1" onClick={() => deleteModule(moduleId)}/>
            <GreenCheckmark />
            <IoAdd className="fs-4" />
            <IoEllipsisVertical className="fs-4" />
        </div>
    );
}