import Modules from "../Modules";
import CourseStatus from "./Status";
export default function Home(){
    return(
        <table id="wd-home">
            <div id = "wd-button">
                <button>Collapse All</button>
                <button>View Progress</button>
                <button>Publish All</button>
                <button>+ Module</button>
            </div>
            <tr>
                <td valign="top">
                    <Modules />
                </td>

                <td valign="top">
                    <CourseStatus />
                </td>
            </tr>
        </table>
    );
}