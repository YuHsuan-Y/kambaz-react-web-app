import { Row, Col, Card } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import { enroll, unenroll } from "./Courses/enrollmentReducer";
import * as courseClient from "./Courses/client";
//import * as moduleClient from "./Courses/Modules/client";
//import * as userClient from "./Account/client";
//import { findModulesForCourse } from "./Courses/client";
interface DashboardProps {
  courses: any[];
  course: any;
  setCourse: (course: any) => void;
  addNewCourse: () => void;
  deleteCourse: (course: any) => void;
  updateCourse: () => void;
  findModulesForCourse: (courseId: string) => void;
  enrolling: boolean;
  setEnrolling: (enrolling: boolean) => void;
  updateEnrollment: (courseId: string, enrolled:boolean) => void;
  setCourses: (courses: any[]) => void;
}

export default function Dashboard({
  courses,
  course,
  setCourse,
  addNewCourse,
  deleteCourse,
  updateCourse,
  findModulesForCourse,
  enrolling,
  setEnrolling,
  updateEnrollment,
  setCourses,
}: DashboardProps) {
  const dispatch = useDispatch();
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const [showAllCourses, setShowAllCourses] = useState(true);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const [enrolledCourses, setEnrolledCourses] = useState<any[]>([]);
  const [allCourses, setAllCourses] = useState<any[]>(courses);
  const navigate = useNavigate();
  
  const isAdmin = currentUser?.role === "ADMIN";
  const isFaculty = currentUser?.role === "FACULTY";
  const isStudent = currentUser?.role === "STUDENT";

  useEffect(() => {
    const loadCourses = async () => {
      if (!currentUser) return;
      
      setLoading(true);
      setError(null);
      try {
        const fetchedCourses = await courseClient.fetchAllCourses();
        setAllCourses(fetchedCourses);

        // If student, fetch their enrollments
        if (isStudent) {
          const enrollments = await courseClient.getEnrollments(currentUser._id);
          const enrolledCourseIds = enrollments.map((e: any) => e.course);
          const userCourses = fetchedCourses.filter((course: any) => 
            enrolledCourseIds.includes(course._id)
          );
          setEnrolledCourses(userCourses);
        } else if (isFaculty) {
          // For faculty, show all courses they teach
          const facultyCourses = fetchedCourses.filter((course: any) => 
            course.instructor === currentUser._id
          );
          setEnrolledCourses(facultyCourses);
        }
      } catch (error) {
        console.error("Error fetching courses:", error);
        setError("Failed to load courses. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    loadCourses();
  }, [currentUser, isStudent, isFaculty]);

  const handleCourseSelect = async (selectedCourse: any) => {
    try {
      const fetchedCourse = await courseClient.fetchCourse(selectedCourse._id);
      if (fetchedCourse) {
        setCourse(fetchedCourse);

        const updatedCourses = courses.map((c) => 
          c._id === fetchedCourse._id ? fetchedCourse : c
        );
        setCourses(updatedCourses);

        await courseClient.updateCourse(fetchedCourse);
      }
    } catch (error) {
      console.error("Error fetching course details:", error);
      setError("Failed to load course details. Please try again later.");
    }
  };

  if (!currentUser) return null;

  const isEnrolled = (courseId: string) => {
    return enrolledCourses.some(course => course._id === courseId);
  };

  const handleEnrollToggle = async (courseId: string) => {
    if (!currentUser) return;
    
    setLoading(true);
    setError(null);
    try {
      if (isEnrolled(courseId)) {
        await courseClient.unenrollFromCourse(currentUser._id, courseId);
        dispatch(unenroll({ userId: currentUser._id, courseId }));
        setEnrolledCourses(enrolledCourses.filter(course => course._id !== courseId));
      } else {
        await courseClient.enrollInCourse(currentUser._id, courseId);
        dispatch(enroll({ userId: currentUser._id, courseId }));
        const courseToEnroll = allCourses.find(c => c._id === courseId);
        if (courseToEnroll) {
          setEnrolledCourses((enrolledCourses) => [...enrolledCourses, courseToEnroll]);
        }
      }
    } catch (error) {
      console.error("Error toggling enrollment:", error);
      setError("Failed to update enrollment. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  const displayedCourses = showAllCourses ? allCourses : enrolledCourses;

  return (
    <div id="wd-dashboard" className="container-fluid p-3">
      <h1 id="wd-dashboard-title">Dashboard {currentUser.role}
        
      <button onClick={()=> setEnrolling(!enrolling)} className="float-end btn btn-primary" >
      {enrolling ? "My Courses" : "All Courses"}
      </button>
      
      </h1>
      <hr />
      {error && (
        <div className="alert alert-danger" role="alert">
          {error}
        </div>
      )}

      {isAdmin || isFaculty && (
        <div>
          <h5>
            {course._id !== "1234" ? "Edit Course" : "New Course"}
            <button className="btn btn-primary float-end" onClick={addNewCourse}>
              Add
            </button>
            <button className="btn btn-warning float-end me-2" onClick={updateCourse}>
              Save
            </button>
          </h5>
          <br />
          <input value={course?.name || ''} 
            className="form-control mb-2" 
            onChange={(e) => setCourse({ ...course, name: e.target.value })} />

          <textarea value={course?.description || ''} 
            className="form-control" 
            onChange={(e) => setCourse({ ...course, description: e.target.value })} />
          <hr />
        </div>
      )}
      
      
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h2 id="wd-dashboard-published">
          {showAllCourses ? "Published Courses" : "My Enrolled Courses"} ({displayedCourses.length})
        </h2>
        {isStudent && (
          <button className="btn btn-primary"
            onClick={() => setShowAllCourses(!showAllCourses)}>
            {showAllCourses ? "Show My Enrollments" : "Show All Courses"}
          </button>
        )}
      </div>
    
      <hr />

      <div id="wd-dashboard-courses" className="row">
        {displayedCourses.length === 0 ? (
          <div className="col-12 text-center">
            <p className="text-muted">
              {showAllCourses ? "No courses available." : "You are not enrolled in any courses."}
            </p>
          </div>
        ) : (
          <Row xs={1} md={5} className="g-4">
            {displayedCourses.map((course) => (
              <Col key={course._id} className="wd-dashboard-course" style={{ width: "300px" }}>
                <Card>
                  <Link 
                    className="wd-dashboard-course-link text-decoration-none text-dark"
                    to={isEnrolled(course._id) ? `/Kambaz/Courses/${course._id}/Home` : "#"}
                    onClick={(e) => !isEnrolled(course._id) && e.preventDefault()}
                  >
                    <Card.Img 
                      variant="top" width="100%" height={160} src="/images/reactjs.jpg"
                    />
                    <Card.Body>
                      <Card.Title 
                        className="wd-dashboard-course-title text-nowrap overflow-hidden">
                          {enrolling && (
                            <button onClick={(event) => {
                              event.preventDefault();
                              updateEnrollment(course._id, !course.enrolled);
                              //handleEnrollToggle(course._id);
                            }}
                            className={`btn ${ course.enrolled ?"btn-danger" : "btn-success" } float-end`} >
                            {/*course.enrolled ?"Unenroll" : "Enroll"*/}
                            {isEnrolled(course._id)? "Unenroll" : "Enroll"}
                            </button>
                          )}
                        {course.name}
                      </Card.Title>
                      <Card.Text 
                        className="wd-dashboard-course-description overflow-y-hidden" 
                        style={{ height: "75px" }}>
                        {course.description}
                      </Card.Text>
                    </Card.Body>
                  </Link>
                  
                  <Card.Body className="pt-0">
                    {isAdmin ||isFaculty && (
                      <div className="d-flex flex-column gap-2">
                        <div className="d-flex justify-content-between gap-2">
                          <button onClick={async (e) => {e.preventDefault();
                              try {
                                //await courseClient.findModulesForCourse(course._id);
                                await findModulesForCourse(course._id);
                                navigate(`/Kambaz/Courses/${course._id}/modules`);
                              } catch (error) {
                                console.error("Error fetching modules:", error);
                                setError("Failed to load modules. Please try again later.");
                              }
                            }}
                            className="btn btn-primary gap-2">
                            Go
                          </button>
                        
                          <button onClick={(e) => {e.preventDefault();
                              deleteCourse(course._id);
                            }}
                            className="btn btn-danger w-30">
                            Delete
                          </button>
                          <button onClick={(e) => {e.preventDefault();
                              handleCourseSelect(course);
                            }}
                            className="btn btn-warning w-30">
                            Edit
                          </button>
                        </div>
                        <Link 
                          to={`/Kambaz/Courses/${course._id}/Assignments`}
                          className="text-decoration-none text-dark text-center border border-secondary rounded p-2"
                        >
                          Assignments
                        </Link>
                      </div>
                    )}

                    {isStudent && isEnrolled(course._id) && (
                      <div className="d-flex flex-column gap-2">
                        <Link to={`/Kambaz/Courses/${course._id}/modules`}
                          className="btn btn-primary w-100">
                          Go
                        </Link>
                        <Link to={`/Kambaz/Courses/${course._id}/Assignments`}
                          className="text-decoration-none text-dark text-center border border-secondary rounded p-2">
                          Assignments
                        </Link>
                        <button 
                          onClick={() => handleEnrollToggle(course._id)}
                          className="btn btn-danger w-100"
                          disabled={loading}>
                          {loading ? 'Processing...' : 'Unenroll'}
                        </button>
                      </div>
                    )}

                    {isStudent && !isEnrolled(course._id) && (
                      <button
                        onClick={() => handleEnrollToggle(course._id)}
                        className="btn btn-success w-100"
                        disabled={loading}>
                        {loading ? "Processing..." : "Enroll"}
                      </button>
                    )}
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        )}
      </div>
    </div>
  );
}