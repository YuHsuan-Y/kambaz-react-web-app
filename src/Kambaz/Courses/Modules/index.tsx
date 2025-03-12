import { BsGripVertical } from "react-icons/bs";
import {useParams} from "react-router";

import ModulesControls from "./ModulesControls";
import LessonControlButtons from "./LessonControlButtons";
import ModuleControlButtons from "./ModuleControlButtons";

import {useState} from "react";

import {addModule, editModule, updateModule, deleteModule} from "./reducer";
import {useSelector, useDispatch} from "react-redux";

export default function Modules(){
    const{cid} = useParams();
    const [moduleName, setModuleName] = useState("");

    const {modules} = useSelector((state:any) => state.modulesReducer);
    const dispatch = useDispatch();

    return(
        <div className="wd-modules">
            <ModulesControls setModuleName={setModuleName} moduleName={moduleName} 
            addModule={() => {
                dispatch(addModule({name: moduleName, course: cid}));
                setModuleName("");
            }} /> <br /><br /><br /><br/>

                <ul id="wd-modules" className="list-group rounded-0">
                    {modules
                    .filter((module:any) => module.course === cid)
                    .map((module:any) => (
                    <li className="wd-module list-group-item p-0 mb-5 fs-5 border-gray">
                        <div className="wd-title p-3 ps-2 bg-secondary">
                            <BsGripVertical className="me-2 fs-3" /> {module.name} 
                            {!module.editing && module.name}
                            {module.editing && (
                                <input className="form-control w-50 d-inline-block"
                                        onChange={(e) => dispatch( updateModule({...module, name:e.target.value}))
                                        }
                                        onKeyDown={(e) => {
                                            if(e.key === "Enter"){
                                                dispatch(updateModule({...module, editing: false}));
                                            }
                                        }}
                                        defaultValue={module.name}/>
                            )}
                            <ModuleControlButtons moduleId = {module._id}
                                deleteModule={(moduleId) => {dispatch(deleteModule(moduleId));}}
                                editModule={(moduleId) => dispatch(editModule(moduleId))}/>
                        </div>

                        {module.lessons && (
                        <ul className="wd-lessons list-group rounded-0">
                            {module.lessons.map((lesson: any) => (

                            <li className="wd-lesson list-group-item p-3 ps-1">
                                <BsGripVertical className="me-2 fs-3" /> {lesson.name} <LessonControlButtons />
                            </li>))}
                        </ul>)}
                    </li>))}
                </ul>
        </div>
    );
}
/*
import {v4 as uuidv4} from "uuid";
 const [modules, setModules] = useState<any[]> (db.modules);
 const addModule = () => {
        setModules([...modules, {_id: uuidv4(), name:moduleName, course: cid, lessons:[] } ]);
        setModuleName("");
    };

    const deleteModule = (moduleId: string) => {
        setModules(modules.filter((m) => m._id !== moduleId));
    };

    const editModule = (moduleId: string) => {
        setModules(modules.map((m) => (m._id === moduleId ? {...m, editing: true} : m)));
    };

    const updateModule = (module: any) => {
        setModules(modules.map((m) => (m._id === module._id ? module : m)));
    };
*/

/*
  Week 1 - Course Introduction, Sylllabus, Agenda
                            <span className="wd-title">LEARNING OBJECTIVES</span>
                    

                          

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
 */