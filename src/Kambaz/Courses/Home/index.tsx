import Modules from "../Modules";
import CourseStatus from "./Status";
export default function Home(){
    return(       

            <div className="d-flex gap-5" id="wd-home">
            {/* gap-5 Vertical stack of single buttons */}
                <div className="flex-fill">
                    <Modules />
                </div>
                <div className="d-none d-md-block">
                    <CourseStatus />
                </div>
            </div>
                /*
                    <div id = "wd-button">
                    <button>Collapse All</button>
                    <button>View Progress</button>
                    <button>Publish All</button>
                    <button>+ Module</button>
                    </div>
                */
            
    );
}
