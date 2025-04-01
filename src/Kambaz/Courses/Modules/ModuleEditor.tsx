export default function ModuleEditor({dialogTitle, moduleName, setModuleName, addModule}:
    {dialogTitle: string; moduleName: string; setModuleName:(name:string) => void; addModule: () => void;}){
        return(
            <div 
                id="wd-add-module-dialog" 
                className="modal fade" 
                data-bs-backdrop="static" 
                data-bs-keyboard="false"
                role="dialog"
                aria-labelledby="moduleDialogTitle"
                aria-modal="true"
            >
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="moduleDialogTitle">
                                {dialogTitle}
                            </h1>
                            <button 
                                type="button" 
                                className="btn-close" 
                                data-bs-dismiss="modal"
                                aria-label="Close"
                            ></button>
                        </div>

                        <div className="modal-body">
                            <input 
                                className="form-control" 
                                defaultValue={moduleName} 
                                placeholder="Module Name"
                                onChange={(e) => setModuleName(e.target.value)}
                                aria-label="Module Name"
                            />
                        </div>

                        <div className="modal-footer">
                            <button 
                                type="button" 
                                className="btn btn-secondary" 
                                data-bs-dismiss="modal"
                            >
                                Cancel
                            </button>
                            <button 
                                onClick={addModule} 
                                type="button" 
                                data-bs-dismiss="modal" 
                                className="btn btn-danger"
                            >
                                Add Module
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        );
}