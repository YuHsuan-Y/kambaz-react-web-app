import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import {enroll, unenroll} from "./Courses/enrollmentReducer";
import FacultyRoute from "./Account/FacultyRoute";
import StudentRoute from "./Account/StudentRoute";

interface DashboardProps {
  courses: any[];
  course: any;
  setCourse: (course: any) => void;
  addNewCourse: () => void;
  deleteCourse: (courseId: any) => void;
  updateCourse: () => void;
}

export default function Dashboard({
  courses, course, setCourse, addNewCourse,deleteCourse, updateCourse,
}: DashboardProps) {
  const dispatch = useDispatch();
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const enrollments = useSelector((state: any) => state.enrollmentReducer);
  
  const [showAllCourses, setShowAllCourses] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const toggleCoursesView = () => setShowAllCourses(!showAllCourses);

  const isEnrolled = (courseId: string) => {
    if (!currentUser?._id) return false;
    return enrollments.some((e: { user: string; course: string }) => 
      e.user === currentUser._id && 
      e.course === courseId);
  }
    
  const handleEnroll = async (courseId: string) => {
    if (!currentUser?._id) return;
    
    try {
      setIsLoading(true);
      if (isEnrolled(courseId)) {
        dispatch(unenroll({ userId: currentUser._id, courseId }));
      } else {
        dispatch(enroll({ userId: currentUser._id, courseId }));
      }
    } catch (error) {
      console.error('Failed to update enrollment:', error);
    } finally {
      setIsLoading(false);
    }
  };

  if (!currentUser) {
    return <div className="alert alert-info">Please sign in to view the dashboard.</div>;
  }

  const filteredCourses = courses.filter((course) => 
    showAllCourses || isEnrolled(course._id)
  );

  return (
    <div id="wd-dashboard" className="container-fluid">
      <h1 id="wd-dashboard-title">Dashboard</h1>
      <hr />

      <h5>
        New Course
        <FacultyRoute>
          <button className="btn btn-primary float-end" onClick={addNewCourse}>
            Add
          </button>
          <button className="btn btn-warning float-end me-2" onClick={updateCourse}>
            Update
          </button>
        </FacultyRoute>
      </h5>
      <br />
      <input 
        value={course.name} 
        className="form-control mb-2" 
        onChange={(e) => setCourse({ ...course, name: e.target.value })} 
      />
      <textarea 
        value={course.description} 
        className="form-control" 
        onChange={(e) => setCourse({ ...course, description: e.target.value })} 
      />
      <hr />

      {currentUser.role === "STUDENT" && (
        <button 
          className="btn btn-primary mb-3 float-end" 
          onClick={toggleCoursesView}
        >
          {showAllCourses ? "Show Enrolled Courses" : "Show All Courses"}
        </button>
      )}

      <h2 id="wd-dashboard-published">
        Published Courses ({filteredCourses.length})
      </h2>
      <hr />

      <div id="wd-dashboard-courses" className="row">
        <div className="row row-cols-1 row-cols-md-5 g-4">
          {filteredCourses.map((course) => (
            <div key={course._id} className="wd-dashboard-course col" style={{ width: "300px" }}>
              <div className="card rounded-3 overflow-hidden h-100">
                <Link to={isEnrolled(course._id) ? `/Kambaz/Courses/${course._id}/Home` : "#"}
                  className="wd-dashboard-course-link text-decoration-none text-dark">
                  <img 
                    src={course.image || "/images/reactjs.jpg"} 
                    width="100%" 
                    height={160} 
                    alt={course.name}
                    className="card-img-top"
                  />
                  <div className="card-body d-flex flex-column">
                    <h5 className="wd-dashboard-course-title card-title">{course.name}</h5>
                    <p className="wd-dashboard-course-title card-text overflow-y-hidden flex-grow-1" style={{ maxHeight: 100 }}>
                      {course.description}
                    </p>

                    <div className="mt-auto">
                      <StudentRoute courseId={course._id}>
                        {isEnrolled(course._id) ? (
                          <button 
                            className="btn btn-danger"
                            onClick={(e) => { e.preventDefault(); handleEnroll(course._id); }}
                            disabled={isLoading}
                          >
                            Unenroll
                          </button>
                        ) : (
                          <button
                            className="btn btn-success"
                            onClick={(e) => {e.preventDefault(); handleEnroll(course._id); }}
                            disabled={isLoading}
                          >
                            Enroll
                          </button>
                        )}
                      </StudentRoute>

                      {isEnrolled(course._id) && (
                        <Link to={`/Kambaz/Courses/${course._id}/Home`} className="btn btn-primary ms-2">
                          Go
                        </Link>
                      )}

                      <FacultyRoute>
                        <button 
                          onClick={(e) => {
                            e.preventDefault();
                            deleteCourse(course._id);
                          }}
                          className="btn btn-danger float-end"
                        >
                          Delete
                        </button>

                        <button 
                          onClick={(e) => {
                            e.preventDefault();
                            setCourse(course);
                          }}
                          className="btn btn-warning me-2 float-end"
                        >
                          Edit
                        </button>
                      </FacultyRoute>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
