export default function Editor(){
    return(
        <div id="wd-course-assignment-editor">
            <label htmlFor="wd-name">Assignment Name</label><br/>
            <br/>
            <input id="wd-name" value="A1 - ENV + HTML" /> <br/><br/>
            
            <textarea id="wd-description" cols={45} rows={9}>
                The assignment is available online Submit a link to the landing page of
                your Web application running on Netlify. The landing page should include the following:
                Your full name and section Links to each of the lab assignments Link to the Kanbas
                application Links to all relevant source code repositories The Kanbas application 
                should include a link to navigate back to the landing page.
            </textarea>
            <br />
            <table>
                <tr>
                    <td align="right" valign="top">
                        <label htmlFor="wd-points">Points</label>
                    </td>
                    <td>
                        <input id="wd-points" defaultValue={100}/>
                    </td>
                </tr>
                <br/>

                <tr>
                    <td align="right" valign="top">
                        <label htmlFor="wd-group">Assignment Group</label>
                    </td>
                    <td>
                        <select id="wd-group" defaultValue="ASSIGNMENTS">
                            <option value="ASSIGNMENTS">ASSIGNMENTS</option>
                            <option value="PROJECTS">PROJECTS</option>
                            <option value="QUIZZES">QUIZZES</option>
                            <option value="EXAMS">EXAMS</option>
                            <option value="PARTICIPATION">PARTICIPATION</option>
                        </select>
                    </td>
                </tr>
                <br/>

                <tr>
                    <td>
                    <label htmlFor="wd-display-grade-as">Display Grade as</label>
                    </td>
                    <td>
                        <select defaultValue="Percentage" id="wd-display-grade-as">
                            <option value="PERCENTAGE">Percentage</option>
                            <option value="REALGRADE">Real Grade</option>
                            <option value="LETTERGRADE">Letter Grade</option>
                        </select><br/>
                    </td>
                </tr>
                <br/>

                <tr>
                    <td>
                        <label htmlFor="wd-submission-type"> Submission Type</label>
                    </td>
                    <td>
                        <select id="wd-submission-type" defaultValue="Online">
                            <option value="ONLINE">Online</option>
                            <option value="ONPAPER">On Paper</option>
                            <option value="EXTERNALTOOL">External Tool</option>
                            <option value="NOSUBMISSION">No Submission</option>
                        </select><br/>
                    </td>
                </tr>
                <br/>

                <tr>
                    <td>
                    <br/>
                    </td>

                    <td>
                        <label htmlFor="wd-online-entry-options">Online Entry Options</label><br/>
                        <input type= "checkbox" name="check-online-entry-options"  id="wd-text-entry"></input>
                        <label htmlFor="wd-text-entry">Text Entry</label><br/>

                        <input type="checkbox" name="check-online-entry-options" id="wd-website-url"></input>
                        <label htmlFor="wd-website-url">Website URL</label><br/>

                        <input type="checkbox" name="check-online-entry-options" id="wd-media-recordings"></input>
                        <label htmlFor="wd-media-recordings">Media Recordings</label><br/>

                        <input type="checkbox" name="check-online-entry-options" id="wd-student-annotaion"></input>
                        <label htmlFor="wd-student-annotation">Student Annotation</label><br/>

                        <input type="checkbox" name="check-online-entry-options" id="wd-file-upload"></input>
                        <label htmlFor="wd-file-upload">File Uploads</label>
                    </td><br/>
                </tr>
                <br/>
            </table>
            
            <table>
                <tr>
                    <td>
                    <br/>
                    </td>
                
                    <td>
                        <label htmlFor="wd-assign-to">Assign to</label>
                    </td>
                </tr>
                <tr>
                    <br/>
                    <td>
                        <input id="wd-assign-to" type="text" defaultValue="Everyone"/>
                    </td>
                </tr><br/>

                <tr>
                    <td>
                    <br/>
                    </td>
                    <td>
                        <label htmlFor="wd-due-date">Due</label><br/>
                    </td>
                </tr>
                <tr>
                    <br/>
                    <td>
                        <input type="date" id="wd-due-date" value="2024-05-13"/>
                    </td>
                </tr><br/>

                <tr>
                    <br/>
                    <td>
                        <label htmlFor="wd-available-from">Available From</label>
                    </td>
                 
                    <td>
                        <label htmlFor="wd-available-until">Until</label>
                    </td>
                    
                </tr>

                <tr>
                    <br/>
                    <td>
                        <input type="date" id="wd-available-from" value="2024-05-06"/>
                    </td>

                    <td>
                        <input type="date" id="wd-available-until" value="2024-05-20"/>
                    </td>
                </tr>

            </table>
            <hr/>

            <div align="right">
            <button>Cancel</button>
            <button>Save</button>
            </div>

        </div>
);}