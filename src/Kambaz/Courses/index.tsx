import CourseNavigation from "./Navigation";
import Modules from "./Modules";
import Piazza from "./Piazza";
import Zoom from "./Zoom";
import Home from "./Home";
import Assignments from "./Assignments";
import Editor from "./Assignments/Editor";
import Quizzes from "./Quizzes";
import Grades from "./Grades";
import PeopleTable from "./People/Table";

//import {courses} from "../Database";
import { FaAlignJustify } from "react-icons/fa";
//import ModulesControls from "./Modules";
import { Navigate, Route, Routes, useParams, useLocation } from "react-router-dom";

export default function Courses({courses}:{courses:any[]}){
    const {cid} = useParams();
    const course = courses.find((course) => course._id === cid);
    const {pathname} = useLocation();

    return(
        <div id="wd-courses">
            <h2 className="text-danger">
                <FaAlignJustify className="me-4 fs-4 mb-1" />
                {course && course.name} &gt; {pathname.split("/")[4]}</h2>
            <hr />
            <div className="d-flex">
                <div className="d-none d-md-block">
                    <CourseNavigation />
                </div>
                
                <div className="flex-fill">
                    <Routes>
                        <Route path="/" element={<Navigate to="Home"/>} />
                        <Route path="Home" element={<Home />} />
                        <Route path="Modules" element={<Modules/>}/>
                        <Route path="Piazza" element={<Piazza/>}/>
                        <Route path="Zoom" element={<Zoom/>}/>
                        <Route path="Assignments/*" element={<Assignments/>} />
                        <Route path="Assignments/:aid" element={<Editor />} />
                        <Route path="Quizzes" element={<Quizzes/>}/>
                        <Route path="Grades" element={<Grades/>}/>
                        <Route path="People" element={<PeopleTable />}/>
                    </Routes>
                </div>
             </div>

        </div>
    );
            /*
             <div>
                <ModulesControls /><br/><br/><br/><br/>
                <ul id="wd-modules" className="list-group rounded-0">
                    <li className="wd-module list-group-item p-0 mb-5 fs-5 border-gray">
                        <div className="wd-title p-3 ps-2 bg-secondary"> Week 1</div>
                        <ul className="wd-lessons list-group rounded-0">
                            <li className="wd-lesson list-group-item p-3 ps-1">
                                LEARNING OBJECTIVES
                            </li>

                            <li className="wd-lesson list-group-item p-3 ps-1">
                                Introduction to the course
                            </li>

                            <li className="wd-lesson list-group-item p-3 ps-1">
                                Learn what is Web Development
                            </li>

                            <li className="wd-lesson list-group-item p-3 ps-1">
                                LESSON 1
                            </li>

                            <li className="wd-lesson list-group-item p-3 ps-1">
                                LESSON 2
                            </li>
                        </ul>
                    </li>
                    <li className="wd-module list-group-item p-0 mb-5 fs-5 border-gray">
                        <div className="wd-title p-3 ps-2 bg-secondary"> Week 2</div>
                        <ul className="wd-lessons list-group rounded-0">
                            <li className="wd-lesson list-group-item p-3 ps-1"> LESSON 1</li>
                            <li className="wd-lesson list-group-item p-3 ps-1"> LESSON 2</li>
                        </ul>
                    </li>
                </ul>
             </div>
            */
}