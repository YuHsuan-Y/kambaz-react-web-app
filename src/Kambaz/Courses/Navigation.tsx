import { Link, useLocation, useParams } from "react-router-dom";
import "../styles.css";

//import { Nav } from "react-bootstrap";

export default function CourseNavigation() {
  const {pathname} = useLocation();
  const {cid} = useParams();

  const links = [
    {label:"Modules", path:`/Kambaz/Courses/${cid}/Modules`},
    {label:"Piazza", path:`/Kambaz/Courses/${cid}/Piazza`},
    {label:"Zoom", path:`/Kambaz/Courses/${cid}/Zoom`},
    {label:"Assignments", path:`/Kambaz/Courses/${cid}/Assignments`},
    {label:"Quizzes", path:`/Kambaz/Courses/${cid}/Quizzes`},
    {label:"People", path:`/Kambaz/Courses/${cid}/People`}
  ];
  return (
    <div id="wd-courses-navigation"
        className = "wd-list-group fs-5 rounded-0">

      <Link to = {`/Kambaz/Courses/${cid}/Home`}
        className={`list-group-item active border border-0
          ${pathname.includes("Home") ? "bg-white text-danger" : "text-danger"}`}>
        Home
      </Link>

      {links.map((link) => (
          <Link key={link.path} to ={link.path} 
              className={`list-group-item text-danger border border-0`}>
            <br/>
            {link.label}
          </Link>
      ))}
    </div>
    /*
    <div id="wd-courses-navigation" className="wd-list-group fs-5 rounded-0">
      
    <Link to="/Kambaz/Courses/1234/Home" id="wd-course-home-link"
        className="list-group-item active border border-0"> Home </Link>

      <Link to="/Kambaz/Courses/1234/Modules" id="wd-course-modules-link"
        className="list-group-item text-danger border border-0"> Modules </Link>

      <Link to="/Kambaz/Courses/1234/Piazza" id="wd-course-piazza-link"
        className="list-group-item text-danger border border-0"> Piazza </Link>

      <Link to="/Kambaz/Courses/1234/Zoom" id="wd-course-zoom-link"
        className="list-group-item text-danger border border-0"> Zoom </Link>

      <Link to="/Kambaz/Courses/1234/Assignments" id="wd-course-quizzes-link"
        className="list-group-item text-danger border border-0"> Assignments </Link>

      <Link to="/Kambaz/Courses/1234/Quizzes" id="wd-course-assignments-link"
        className="list-group-item text-danger border border-0"> Quizzes </Link>

      <Link to="/Kambaz/Courses/1234/People" id="wd-course-people-link"
        className="list-group-item text-danger border border-0" > People </Link>
  </div>

*/
  );
}
