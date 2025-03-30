/*pop up when you click  +Assignment buttons a new assignment editor*/
//import {Link} from "react-router-dom";

export default function AssignmentsEditor({ dialogTitle, assignmentName, setAssignmentName, addAssignment,
}:
    {dialogTitle: string; 
    assignmentName:{
        title: string;
        description: string;
        points: string;
        dueDate: string;
        availableFrom: string;
        availableTo: string;
     };
    setAssignmentName:(assignment:any) => void;
    addAssignment: () => void;

    }){
        return(
            <div id="wd-add-assignment-dialog" className="modal fade" data-bs-backdrop="static" data-bs-keyboard="false">
                <div className="modal-dialog">
                    <div className="modal-content">
                        
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="staticBackdropLabel">
                                {dialogTitle}
                            </h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
                        </div>
                        
                        <div className="modal-body">

                        <input className="form-control mb-2" 
                                value={assignmentName.title} placeholder="New Assignment"
                                onChange={(e) => setAssignmentName({...assignmentName, title: e.target.value})}/>

                        <textarea className="form-control mb-2" 
                                value={assignmentName.description} placeholder="New Assignment Description"
                                onChange={(e) => setAssignmentName({...assignmentName, description: e.target.value})}/>


                        <label htmlFor="wd-points" className="wd-grid-col-two-thirds-page">Points</label>
                        <input id="wd-points" className="form-control" value={assignmentName.points} placeholder="Assignement Points"
                                onChange={(e) => setAssignmentName({...assignmentName, points: e.target.value})}/>
                        </div>
                    
                        <div className="flex-container-assign wd-grid-col-third-page">
                            
                            <label htmlFor="wd-assign-to" className="p-2 fw-bold">Assign to</label>

                            <input id="wd-assign-to" type="text" defaultValue="Everyone" className="form-control"/>
                                <label htmlFor="wd-due-date" className="p-2 fw-bold">Due</label><br/>
                                <input id="wd-due-date" className="form-control" value={assignmentName.dueDate}
                                    type="date"
                                    onChange={(e) => setAssignmentName({...assignmentName, dueDate: e.target.value})}/>

                            <label htmlFor="wd-available-from" className="wd-grid-col-half-page p-2 fw-bold">Available From</label>
                            <label htmlFor="wd-available-until" className="p-2 fw-bold">Until</label>

                                <input type="date" id="wd-available-from" className="wd-grid-col-half-page form-control" value={assignmentName.availableFrom}
                                onChange={(e) => setAssignmentName({...assignmentName, availableFrom: e.target.value})}/>
                                
                                <input type="date" id="wd-available-until" value={assignmentName.availableTo} className="wd-grid-col-half-page form-control"
                                onChange={(e) => setAssignmentName({...assignmentName, availableTo: e.target.value})}/>
                        </div>

                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" 
                                data-bs-dismiss="modal">Cancel</button>
                            <button onClick={addAssignment} type="button" 
                                data-bs-dismiss="modal" className="btn btn-danger">Add Assignment</button>
                        </div>
                        
                       
                    </div>
                </div>
            </div>
        );
    
}