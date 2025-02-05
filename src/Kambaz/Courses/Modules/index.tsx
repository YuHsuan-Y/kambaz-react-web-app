import { BsGripVertical } from "react-icons/bs";
import ModulesControls from "./ModulesControls";
import LessonControlButtons from "./LessonControlButtons";
import ModuleControlButtons from "./ModuleControlButtons";

export default function Modules(){
    return(
        <div>
            <ModulesControls /><br /><br /><br /><br/>
                <ul id="wd-modules" className="list-group rounded-0">
                
                <li className="wd-module list-group-item p-0 mb-5 fs-5 border-gray">
                    <div className="wd-title p-3 ps-2 bg-secondary">
                    <BsGripVertical className="me-2 fs-3" />
                        Week 1 - Course Introduction, Sylllabus, Agenda
                    <ModuleControlButtons/>
                    </div>
                    <ul className="wd-lessons list-group rounded-0">
                        
                        <li className="wd-lesson list-group-item p-3 ps-1">
                            <BsGripVertical className="me-2 fs-3"/>
                            <span className="wd-title">LEARNING OBJECTIVES</span>
                            <LessonControlButtons/>

                            <ul className="wd-content">
                                <li className="wd-content-item">Introduction to the course</li>
                                <li className="wd-content-item">Learn what is Web Development</li>
                            </ul>
                        </li>

                        <li className="wd-lesson list-group-item p-3 ps-1">
                            <BsGripVertical className="me-2 fs-3"/>
                            <span className="wd-title">READING</span>
                            <LessonControlButtons/>
                            <ul className="wd-content">
                                <li className="wd-content-item">Full Stack Developer - Chapter 1 - Introduction</li>
                                <li className="wd-content-item">Full Stack Developer - Chapter 2 - Creating Us</li>
                            </ul>
                        </li>

                        <li className="wd-lesson list-group-item p-3 ps-1">
                            <BsGripVertical className="me-2 fs-3"/>
                            <span className="wd-title">SLIDES</span>
                            <LessonControlButtons/>
                            <ul className="wd-content">
                                <li className="wd-content-item">Introduction to Web Development</li>
                                <li className="wd-content-item">Creating an HTTP server with Node.js</li>
                                <li className="wd-content-item">Creating a React Application</li>
                            </ul>
                        </li>
                    </ul>
                </li>

                <ul id="wd-modules" className="list-group rounded-0">
                
                <li className="wd-module list-group-item p-0 mb-5 fs-5 border-gray">
                    <div className="wd-title p-3 ps-2 bg-secondary">
                    <BsGripVertical className="me-2 fs-3" />
                    Week 2 - Prototyping the React Kambaz User Interface with HTML
                    <ModuleControlButtons/>
                    </div>
                    <ul className="wd-lessons list-group rounded-0">
                        
                        <li className="wd-lesson list-group-item p-3 ps-1">
                            <BsGripVertical className="me-2 fs-3"/>
                            <span className="wd-title">LEARNING OBJECTIVES</span>
                            <LessonControlButtons/>

                            <ul className="wd-content">
                                <li className="wd-content-item">Learn how to create user interfaces with HTML</li>
                                <li className="wd-content-item">Keep working on assignment 1</li>
                                <li className="wd-content-item">Deplpoy the assignment to Netlify</li>
                            </ul>
                        </li>

                        <li className="wd-lesson list-group-item p-3 ps-1">
                            <BsGripVertical className="me-2 fs-3"/>
                            <span className="wd-title">READING</span>
                            <LessonControlButtons/>
                            <ul className="wd-content">
                                <li className="wd-content-item">Developing Full Stack MERN Web Applications - Chapter 1 - Building React User Interfaces with HTML</li>
                            </ul>
                        </li>

                        <li className="wd-lesson list-group-item p-3 ps-1">
                            <BsGripVertical className="me-2 fs-3"/>
                            <span className="wd-title">ASSIGNMENT 1 - PROTOTYPING THE KAMBAZ REACT APPLICATION WITH HTML</span>
                            <LessonControlButtons/>
                            <ul className="wd-content">
                                <li className="wd-content-item">Implementing the Kambaz Account Screens</li>
                                <li className="wd-content-item">Implementing the Kambaz Dashboard Screen</li>
                                <li className="wd-content-item">Implementing the Kambaz Courses Screen</li>
                                <li className="wd-content-item">Implementing the Kambaz Assignments Screens</li>
                                <li className="wd-content-item">Implementing the Kambaz Modules Screen</li>
                                <li className="wd-content-item">Kambaz Web App on Netlify</li>
                            </ul>
                        </li>
                    </ul>
                </li>
                </ul>
              
                <ul id="wd-modules" className="list-group rounded-0">
                <li className="wd-module list-group-item p-0 mb-5 fs-5 border-gray">
                    <div className="wd-title p-3 ps-2 bg-secondary">
                    <BsGripVertical className="me-2 fs-3"/>
                        Week 3 - Styling Web Pages with CSS and BootStrap, Assignment 2
                    <LessonControlButtons/>
                    </div>
                    <ul className="wd-lessons list-group rounded-0">
                        <li className="wd-lesson list-group-item p-3 ps-1">
                            <BsGripVertical className="me-2 fs-3"/>
                            <span className="wd-title">LEARNING OBJECTIVES </span>
                            <LessonControlButtons/>

                            <ul className="wd-content">
                                <li className="wd-content-item">Introduction to CSS</li>
                                <li className="wd-content-item">Selectors by tag, ID, classes, and document structure</li>
                                <li className="wd-content-item">Styling color and background color</li>
                                <li className="wd-content-item">Styling dimensions and positions</li>
                                <li className="wd-content-item">The box model - styling margins, borders, and paddings</li>
                            </ul>
                        </li>

                        <li className="wd-lesson list-group-item p-3 ps-1">
                            <BsGripVertical className="me-2 fs-3"/>
                            <span className="wd-title">READING</span>
                            <LessonControlButtons/>
                            <ul className="wd-content">
                                <li className="wd-content-item">Developing Full Stack MERN Web Applicaitons - Chapter 2 - Styling Web Pages with CSS</li>
                            </ul>
                        </li>

                        <li className="wd-lesson list-group-item p-3 ps-1">
                            <BsGripVertical className="me-2 fs-3"/>
                            <span className="wd-title">ASSIGNMENT 2 - CSS & BOOTSTRAP LAB EXERCISES</span>
                            <LessonControlButtons/>
                            <ul className="wd-content">
                                <li className="wd-content-item">Assignment 2 - CSS Lab Exercises</li>
                                <li className="wd-content-item">Assignemnt 2 - Bootstrap Lab Exercises</li>
                            </ul>
                        </li>

                    </ul>
                
                    </li>
                </ul>
            </ul>
        </div>
    );
}