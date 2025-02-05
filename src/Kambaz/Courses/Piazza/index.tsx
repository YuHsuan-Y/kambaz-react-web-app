export default function Piazza(){
    return(
        <div id="wd-piazza" className="text-nowrap">
               <h1 className="mb-3">Piazza</h1>
            <div className="d-flex justify-content-between align-items-center mb-3">
                <div className="input-group w-50">
                    <span className="input-group-text">
                     
                    </span>
                    <input type="text" placeholder="Search..." id="wd-search-assignment" className="form-control w-50"/>
                </div>
            </div>
        </div>
    );
}