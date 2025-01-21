import { Link } from "react-router-dom";
export default function Dashboard() {
  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
      <h2 id="wd-dashboard-published">Published Courses (12)</h2> <hr />
      <div id="wd-dashboard-courses">
        
        <div className="wd-dashboard-course">
          <Link to="/Kambaz/Courses/1234/Home"
                className="wd-dashboard-course-link" >
            <img src="/images/reactjs.jpg" width={200} />
            <div>
              <h5> CS1234 React JS </h5>
              <p className="wd-dashboard-course-title">
                Full Stack software developer  </p>
              <button> Go </button><br/>
            </div>
          </Link>
        </div>

      <div>
        <Link to="/Kambaz/Courses/1234/Home"
            className="wd-dashboard-course-link">
          <img src="/images/reactjs.jpg" width={200} />
          <div>
              <h5> CS4550 12631 Web Development </h5>
              <p className="wd-dashboard-CS4550">
                CS4550.125631.202410
              </p>
              <button> Go </button><br/>
          </div>
        </Link>
      </div>

      <div>
        <Link to="/Kambaz/Courses/1234/Home"
          className="wd-dashboard-course-link">
            <img src="/images/reactjs.jpg" width={200} />
            <div>
              <h5> CS5002 12130 Discrete Math </h5>
              <p className="wd-dashboard-CS5002">
                CS5002.12130.202410
              </p>
              <button> Go </button><br/>
            </div>
        </Link>
      </div>

      <div>
        <Link to="/Kambaz/Courses/1234/Home"
          className="wd-dashboard-course-link">
          <img src="/images/reactjs.jpg" width={200} />
          <div>
            <h5> CS5800 50294 Algorithm </h5>
            <p className="wd-dashboard-CS5800">
              CS5800.50294.202450
            </p>
            <button> Go </button><br/>
          </div>
        </Link>
      </div>

      <div>
        <Link to="/Kambaz/Courses/1234/Home"
          className="wd-dashboard-course-link">
            <img src="/images/reactjs.jpg" width={200}/>
          <div>
            <h5> CS5004 39596 Object-Oriented Design </h5>
            <p className="wd-dashboard-CS5004">
              CS5004.39596.202430
            </p>
            <button> Go </button><br/>
          </div>
        </Link>
      </div>
      
      <div>
        <Link to="/Kambaz/Courses/1234/Home"
          className="wd-dashboard-courses-link">
            <img src="/images/reactjs.jpg" width={200}/>
          <div>
            <h5> CS5005 39599 Recitation for CS </h5>
            <p className="wd-dashboard-CS5005">
              CS5005.39599.202430
            </p>
            <button> Go </button><br/>
          </div>
        </Link>
      </div>

      <div>
        <Link to="/Kambaz/Courses/1234/Home"
          className="wd-dashboard-courses-link">
            <img src="/images/reactjs.jpg" width={200} />
          <div>
            <h5> CS5001 12121 Python </h5>
            <p className="wd-dashboard-CS5001">
              CS5001.12121.202409
            </p>
            <button> Go </button><br/>
          </div>
        </Link>
      </div>

      </div>
    </div>
);}