import { MdDoNotDisturbAlt } from "react-icons/md";
import { FaCheckCircle } from "react-icons/fa";
import { BiImport } from "react-icons/bi";
import { LiaFileImportSolid } from "react-icons/lia";
import { IoMdHome } from "react-icons/io";
import { FaChartSimple } from "react-icons/fa6";
import { TfiAnnouncement } from "react-icons/tfi";
import { GoBellFill } from "react-icons/go";

export default function CourseStatus(){
    return(
         /* 
            btn-lg: button large
            btn-secondary:  Gives it a secondary button color
            w-100: Sets the button's width to 100%
            me: margin end - add right margin
            fs: font size 
        */
        <div id="wd-course-status" style={{ width: "300px" }}>
            <h2>Course Status</h2>
            <div className="d-flex">

            <div className="w-50 pe-1">
                <button className="btn btn-lg btn-secondary w-100 text-nowrap">
                   
                <MdDoNotDisturbAlt className="me-2 fs-5" /> Unpublish </button>
            </div>

            <div className="w-50">
            <button className="btn btn-lg btn-success w-100">
                <FaCheckCircle className="me-2 fs-5" /> Publish </button>
            </div>
            </div>
            <br/>

        <div className="d-grid">
            <button className="btn btn-lg btn-secondary w-100 mt-1 text-start">
                <BiImport className="me-2 fs-5" /> Import Existing Content </button>

            <button className="btn btn-lg btn-secondary w-100 mt-1 text-start">
                <LiaFileImportSolid className="me-2 fs-5" /> Import from Commons </button>

        {/* Complete the rest of the buttons */}

            <button className="btn btn-lg btn-secondary w-100 mt-1 text-start">
                <IoMdHome className="me-2 fs-5" /> Choose Home Page </button>

            <button className="btn btn-lg btn-secondary w-100 mt-1 text-start">
                <FaChartSimple className="me-2 fs-5" /> View Course Stream </button>

            <button className="btn btn-lg btn-secondary w-100 mt-1 text-start">
                <TfiAnnouncement className="me-2 fs-5"/> New Announcement </button>

            <button className="btn btn-lg btn-secondary w-100 mt-1 text-start">
                <FaChartSimple className="me-2 fs-5" /> New Analytics </button>

            <button className="btn btn-lg btn-secondary w-100 mt-1 text-start">
                <GoBellFill className="me-2 fs-5" /> View Course Notifications </button>
        </div>
        </div>
        
        
        /*
        <div id="wd-course-status">
            <h2>Course Status</h2>
            <button>Unpublish</button>
            <button>Publish</button><br/>
            <p></p>
            <button>Import Existing Content</button><br/>
            <button>Import from Commons</button><br/>
            <button>Choose Home Page</button><br/>
            <button>View Course Stream</button><br/>
            <button>New Announcement</button><br/>
            <button>New Analytics</button><br/>
            <button>View Course Notifications</button>
        </div>
        */
    );
}