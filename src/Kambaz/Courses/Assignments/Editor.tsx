import * as db from "../../Database"; 
import {Link, useParams} from "react-router-dom";

import "./index.css";

export default function Editor(){
    const {cid} = useParams();
    const assignments = db.assignments;

    return(
        <div id="wd-course-assignment-editor">
            <label htmlFor="wd-name">Assignment Name</label><br/>
            <br/>
            {assignments.filter((assignment) => 
                assignment.course === cid)

            .map((assignment: any) => ( 

                <div key={assignment._id}> 
                    
                    <Link to = {`/Kambaz/Courses/${cid}/Assignments/${assignment._id}`}></Link>
                
                    <input  id="wd-name" value={assignment.title} className="form-control"/> <br/>
                    <div id="wd-description" className="form-control" contentEditable="true">
                        {assignment.description}
                    </div><br/>

                    <div className="d-flex align-items-center">  
                        <label htmlFor="wd-points" className="wd-grid-col-two-thirds-page">Points</label>
            
                        <input id="wd-points"  className="form-control" defaultValue={assignment.points} /> 
                    
                    </div>
                    <br/>


            <table>

            <label htmlFor="wd-assign-to">Assign</label>
            <div className="flex-container-assign wd-grid-col-third-page">
                    <label htmlFor="wd-assign-to" className="p-2 fw-bold">Assign to</label>
    
                    <input id="wd-assign-to" type="text" defaultValue="Everyone" className="form-control"/>
    
                    <label htmlFor="wd-due-date" className="p-2 fw-bold">Due</label><br/>
            
                    <input type="date" id="wd-due-date" value={assignment.dueDate} className="form-control"/>
        
                    <label htmlFor="wd-available-from" className="wd-grid-col-half-page p-2 fw-bold">Available From</label>
        
                    <label htmlFor="wd-available-until" className="p-2 fw-bold">Until</label>
        
                    <input type="date" id="wd-available-from" className="wd-grid-col-half-page form-control" value={assignment.availableFrom}/>
        
                    <input type="date" id="wd-available-until" value={assignment.availableTo} className="wd-grid-col-half-page form-control"/>
            </div>
            </table>
            <br/>
            <hr/>

            </div> 
            ))
            }
            
            <div style={{ bottom:0, textAlign: "right" }}>
                <hr/>
                <button>Cancel</button>
                <button style={{color:"white", backgroundColor:"red" }}>Save</button>
            </div>
            
        </div> 
);}

 
            {/*
        
            <input id="wd-name" value="A1" className="form-control"/> <br/>
  
            <div id="wd-description" className="form-control" contentEditable="true">
                <span>The assignment is </span>
                <span className="text-danger fw-bold">available online</span><br/>
                <p>Submit a link to the landing page of your Web application running on Netlify. </p>
                <p>The landing page should include the following:</p>
                <ul>
                    <li>Your full name and section</li> 
                    <li>Links to each of the lab assignments</li>
                    <li>Link to the Kanbas application</li>
                    <li>Links to all relevant source code repositories</li>
                </ul>
                <p>The Kanbas application should include a link to navigate back to the landing page.</p>
            </div>

            <br />
                
            <div className="d-flex align-items-center">  
                <label htmlFor="wd-points" className="wd-grid-col-two-thirds-page">Points</label>
        
                    <input id="wd-points"  className="form-control" defaultValue={100} /> 
                
            </div>
            <br/>

            <div className="wd-flex-row-container">  
                <label htmlFor="wd-group" className="wd-grid-col-two-thirds-page">Assignment Group</label>
            
                <select id="wd-group" defaultValue="ASSIGNMENTS" className="form-control">
                    <option value="ASSIGNMENTS">ASSIGNMENTS</option>
                    <option value="PROJECTS">PROJECTS</option>
                    <option value="QUIZZES">QUIZZES</option>
                    <option value="EXAMS">EXAMS</option>
                    <option value="PARTICIPATION">PARTICIPATION</option>
                </select>
            </div>
            <br/>

            <div className="wd-flex-row-container">  
            <label htmlFor="wd-group" className="wd-grid-col-two-thirds-page">Display Grade as</label>
    
                <select defaultValue="Percentage" id="wd-display-grade-as" className="form-control">
                    <option value="PERCENTAGE">Percentage</option>
                    <option value="REALGRADE">Real Grade</option>
                    <option value="LETTERGRADE">Letter Grade</option>
                </select>
            </div>
            <br/>

            <label htmlFor="wd-submission-type" className="wd-grid-col-two-thirds-page"> Submission Type </label>
            <div className="flex-container wd-grid-col-third-page">
                <div className="flex-container form-control dropdown">
                <span className="dropdown-toggle me-3" form-control data-bs-toggle="dropdown">
                    Online
                </span>

                <ul className="dropdown-menu">
                    <li><a className="dropdown-item" href="#">On Paper</a></li><br/>
                    <li><a className="dropdown-item" href="#">External Tool</a></li><br/>
                    <li><a className="dropdown-item" href="#">No Submission</a></li><br/>
                </ul>

            </div>
                <label htmlFor="wd-online-entry-options" className="me-3 fw-bold p-3">Online Entry Options</label><br/>

                <input type= "checkbox" name="check-online-entry-options"  id="wd-text-entry" className="me-1 p-3"></input>
                <label htmlFor="wd-text-entry"> Text Entry</label><br/>

                <input type="checkbox" name="check-online-entry-options" id="wd-website-url" className="me-1 p-3"></input>
                <label htmlFor="wd-website-url"> Website URL</label><br/>

                <input type="checkbox" name="check-online-entry-options" id="wd-media-recordings" className="me-1 p-3"></input>
                <label htmlFor="wd-media-recordings"> Media Recordings</label><br/>

                <input type="checkbox" name="check-online-entry-options" id="wd-student-annotaion" className="me-1 p-3"></input>
                <label htmlFor="wd-student-annotation"> Student Annotation</label><br/>

                <input type="checkbox" name="check-online-entry-options" id="wd-file-upload" className="me-1 p-3"></input>
                <label htmlFor="wd-file-upload"> File Uploads</label>
                
            </div>
   

            <table>
            <label htmlFor="wd-assign-to">Assign</label>
            <div className="flex-container-assign wd-grid-col-third-page">
                    <label htmlFor="wd-assign-to" className="p-2 fw-bold">Assign to</label>
    
                    <input id="wd-assign-to" type="text" defaultValue="Everyone" className="form-control"/>
    
                    <label htmlFor="wd-due-date" className="p-2 fw-bold">Due</label><br/>
            
                    <input type="date" id="wd-due-date" value="2024-05-13" className="form-control"/>
        
                    <label htmlFor="wd-available-from" className="wd-grid-col-half-page p-2 fw-bold">Available From</label>
        
                    <label htmlFor="wd-available-until" className="p-2 fw-bold">Until</label>
        
                    <input type="date" id="wd-available-from" className="wd-grid-col-half-page form-control" value="2024-05-06"/>
        
                    <input type="date" id="wd-available-until" value="2024-05-20" className="wd-grid-col-half-page form-control"/>
            </div>
            */}