import { Link } from "react-router-dom";
import { LuNotebookPen } from "react-icons/lu";

export default function Dashboard() {
  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
      <h2 id="wd-dashboard-published">Published Courses (12)</h2> <hr />
      <div id="wd-dashboard-courses" className="row ms-4">
        <div className="row row-cols-1 row-cols-md-5 g-4">
        
        <div className="wd-dashboard-course col" style={{width:"300px"}}>
          <div className="card rounded-3 overflow-hidden">
            <Link className="wd-dashboard-course-link text-decoration-none text-dark"
                to="/Kambaz/Courses/1234/Home">
              
            <img src="/images/reactjs.jpg" width="100%" height={160} />
            <div className="card-body">

              <h5 className="wd-dashboard-course-title card-title"> CS1234 React JS </h5>
              <p className="wd-dashboard-course-title">
                Full Stack software developer  </p>
              
              <a href="#" className="btn"> <LuNotebookPen/> </a><br/>
            </div>
          </Link>
          </div>
        </div>

      <div className="wd-dashboard-course col" style={{width:"300px"}}>
        <div className="card rounded-3 overflow-hidden">
        <Link className="wd-dashboard-course-link text-decoration-none text-dark" 
          to="/Kambaz/Courses/1234/Home">
            
          <img src="/images/reactjs.jpg"  width="100%" height={160} />
          <div className="card-body">
              <h5 className="wd-dashboard-course-title card-title"> CS4550 12631 Web Development </h5>
              <p className="wd-dashboard-CS4550">
                CS4550.125631.202410
              </p>
              <a href="#" className="btn"> <LuNotebookPen/> </a><br/>
          </div>
        </Link>
        </div>
      </div>

      <div className="wd-dashboard-course col" style={{width:"300px"}}>
        <div className="card rounded-3 overflow-hidden">
        <Link className="wd-dashboard-course-link text-decoration-none text-dark"
         to="/Kambaz/Courses/1234/Home">
            <img src="/images/reactjs.jpg" width="100%" height={160} />
            <div className="card-body">
              <h5 className="wd-dashboard-course-title card-title"> CS5002 12130 Discrete Math </h5>
              <p className="wd-dashboard-CS5002">
                CS5002.12130.202410
              </p>
              <a href="#" className="btn"> <LuNotebookPen/> </a><br/>
            </div>
        </Link>
        </div>
      </div>

      <div className="wd-dashboard-course col" style={{width:"300px"}}>
      <div className="card rounded-3 overflow-hidden">
        <Link className="wd-dashboard-course-link text-decoration-none text-dark" 
          to="/Kambaz/Courses/1234/Home">
          <img src="/images/reactjs.jpg" width="100%" height={160} />
          <div className="card-body">
            <h5 className="wd-dashboard-course-title card-title"> CS5800 50294 Algorithm </h5>
            <p className="wd-dashboard-CS5800">
              CS5800.50294.202450
            </p>
            <a href="#" className="btn"> <LuNotebookPen/> </a><br/>
          </div>
        </Link>
        </div>
      </div>

      <div className="wd-dashboard-course col" style={{width:"300px"}}>
      <div className="card rounded-3 overflow-hidden">
        <Link className="wd-dashboard-course-link text-decoration-none text-dark" 
          to="/Kambaz/Courses/1234/Home">
            <img src="/images/reactjs.jpg" width="100%" height={160}/>
          <div className="card-body">
            <h5 className="wd-dashboard-course-title card-title"> CS5004 39596 Object-Oriented Design </h5>
            <p className="wd-dashboard-CS5004">
              CS5004.39596.202430
            </p>
            <a href="#" className="btn"> <LuNotebookPen/> </a><br/>
          </div>
        </Link>
        </div>
      </div>
      
      <div className="wd-dashboard-course col" style={{width:"300px"}}>
      <div className="card rounded-3 overflow-hidden">
        <Link className="wd-dashboard-course-link text-decoration-none text-dark" 
          to="/Kambaz/Courses/1234/Home">
            <img src="/images/reactjs.jpg" width="100%" height={160}/>
          <div className="card-body">
            <h5 className="wd-dashboard-course-title card-title"> CS5005 39599 Recitation for CS </h5>
            <p className="wd-dashboard-CS5005">
              CS5005.39599.202430
            </p>
            <a href="#" className="btn"> <LuNotebookPen/> </a><br/>
          </div>
        </Link>
        </div>
      </div>

      <div className="wd-dashboard-course col" style={{width:"300px"}}>
        <Link to="/Kambaz/Courses/1234/Home"
          className="wd-dashboard-courses-link">
            <img src="/images/reactjs.jpg" width="100%" height={160} />
          <div>
            <h5> CS5001 12121 Python </h5>
            <p className="wd-dashboard-CS5001">
              CS5001.12121.202409
            </p>
            <a href="#" className="btn"> <LuNotebookPen/> </a><br/>
          </div>
        </Link>
      </div>

      </div>
    </div>
    </div>
);}