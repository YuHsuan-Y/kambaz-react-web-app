import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import {enroll, unenroll} from "./Courses/enrollmentReducer";
import FacultyRoute from "./Account/FacultyRoute";
import StudentRoute from "./Account/StudentRoute";
import * as db from "./Database";

export default function Dashboard({
  courses,
  course,
  setCourse,
  addNewCourse,
  deleteCourse,
  updateCourse,
}: {
  courses: any[];
  course: any;
  setCourse: (course: any) => void;
  addNewCourse: () => void;
  deleteCourse: (course: any) => void;
  updateCourse: () => void;
}) {
  const dispatch = useDispatch();
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  //const { enrollments } = useSelector((state: any) => state.enrollments);
  const { enrollments } = db;
  
  const [showAllCourses, setShowAllCourses] = useState(false);

  const toggleCoursesView = () => setShowAllCourses(!showAllCourses);

  const isEnrolled = (courseId: string) =>
    enrollments.some((e: { user: string; course: string }) => e.user === currentUser._id && e.course === courseId);

  const handleEnroll = (courseId: string) => {
    if (isEnrolled(courseId)) {
      dispatch(unenroll({ userId: currentUser._id, courseId }));
    } else {
      dispatch(enroll({ userId: currentUser._id, courseId }));
    }
  };

  return (
    <div id="wd-dashboard">
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
      <input value={course.name} className="form-control mb-2" onChange={(e) => setCourse({ ...course, name: e.target.value })} />
      <textarea value={course.description} className="form-control" onChange={(e) => setCourse({ ...course, description: e.target.value })} />
      <hr />

      {currentUser.role === "STUDENT" && (
        <button className="btn btn-primary mb-3 float-end" onClick={toggleCoursesView}>
          {showAllCourses ? "Show Enrolled Courses" : "Show All Courses"}
        </button>
      )}

      <h2 id="wd-dashboard-published">Published Courses ({courses.length})</h2>
      <hr />

      <div id="wd-dashboard-courses" className="row">
        <div className="row row-cols-1 row-cols-md-5 g-4">
          {courses
            .filter((course) => showAllCourses || isEnrolled(course._id))
            .map((course) => (
              <div key={course._id} className="wd-dashboard-course col" style={{ width: "300px" }}>
                <div className="card rounded-3 overflow-hidden">
                  <Link
                    to={isEnrolled(course._id) ? `/Kambaz/Courses/${course._id}/Home` : "#"}
                    className="wd-dashboard-course-link text-decoration-none text-dark"
                  >
                    <img src="/images/reactjs.jpg" width="100%" height={160} />
                    <div className="card-body">
                      <h5 className="wd-dashboard-course-title card-title">{course.name}</h5>
                      <p className="wd-dashboard-course-title card-text overflow-y-hidden" style={{ maxHeight: 100 }}>
                        {course.description}
                      </p>

                      <StudentRoute courseId={course._id}>
                        {isEnrolled(course._id) ? (
                          <button className="btn btn-danger"
                            onClick={(e) => { e.preventDefault(); handleEnroll(course._id);
                            }}>
                            Unenroll
                          </button>
                        ) : (
                          <button
                            className="btn btn-success"
                            onClick={(e) => {e.preventDefault(); handleEnroll(course._id);
                            }}>
                            Enroll
                          </button>
                        )}
                      </StudentRoute>

                      {isEnrolled(course._id) && <button className="btn btn-primary">Go</button>}

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
                  </Link>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}