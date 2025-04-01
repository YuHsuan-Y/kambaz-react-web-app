import { Row, Col, Card } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import { enroll, unenroll } from "./Courses/enrollmentReducer";
import * as courseClient from "./Courses/client";
//import * as userClient from "./Account/client";

interface DashboardProps {
  courses: any[];
  course: any;
  setCourse: (course: any) => void;
  addNewCourse: () => void;
  deleteCourse: (course: any) => void;
  updateCourse: () => void;
  findModulesForCourse: (courseId: string) => void;
}

export default function Dashboard({
  courses,
  course,
  setCourse,
  addNewCourse,
  deleteCourse,
  updateCourse,
}: DashboardProps) {
  const dispatch = useDispatch();
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const [showAllCourses, setShowAllCourses] = useState(true);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [enrolledCourses, setEnrolledCourses] = useState<any[]>([]);
  const [allCourses, setAllCourses] = useState<any[]>(courses);
  const navigate = useNavigate();
  
  const isFaculty = currentUser?.role === "FACULTY";
  const isStudent = currentUser?.role === "STUDENT";

  useEffect(() => {
    const loadAllCourses = async () => {
      try {
        const fetchedCourses = await courseClient.fetchAllCourses();
        setAllCourses(fetchedCourses);
      } catch (error) {
        console.error("Error fetching all courses:", error);
        setError("Failed to load courses. Please try again later.");
      }
    };
    if (currentUser) {
      loadAllCourses();
    }
  }, [currentUser]);

  useEffect(() => {
    const fetchEnrolledCourses = async () => {
      if (currentUser && isStudent) {
        try {
          const enrollments = await courseClient.getEnrollments(currentUser._id);
          const enrolledCourseIds = enrollments.map((e: any) => e.course);
          const userCourses = allCourses.filter((course) => 
            enrolledCourseIds.includes(course._id)
          );
          setEnrolledCourses(userCourses);
        } catch (error) {
          console.error("Error fetching enrolled courses:", error);
          setError("Failed to load your enrolled courses. Please try again later.");
        }
      }
    };
    fetchEnrolledCourses();
  }, [currentUser, allCourses, isStudent]);

  // Handle course selection for editing
  const handleCourseSelect = async (selectedCourse: any) => {
    try {
      const fetchedCourse = await courseClient.fetchCourse(selectedCourse._id);
      if (fetchedCourse) {
        setCourse(fetchedCourse);
      }
    } catch (error) {
      console.error("Error fetching course details:", error);
      setError("Failed to load course details. Please try again later.");
    }
  };

  if (!currentUser) {
    return null;
  }

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
          setEnrolledCourses([...enrolledCourses, courseToEnroll]);
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
    <div id="wd-dashboard" className="container-fluid">
      <h1 id="wd-dashboard-title">Dashboard {currentUser.role}</h1>
      <hr />
      {error && (
        <div className="alert alert-danger" role="alert">
          {error}
        </div>
      )}
      {currentUser && currentUser.role === "FACULTY" && (
        <div>
          <h5>
            New Course
            <button className="btn btn-primary float-end" onClick={addNewCourse}>
              Add
            </button>
            <button className="btn btn-warning float-end me-2" onClick={updateCourse}>
              Save
            </button>
          </h5>
          <br />
          <input value={course.name} 
            className="form-control mb-2" 
            onChange={(e) => setCourse({ ...course, name: e.target.value })} />

          <textarea value={course.description} 
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
                      variant="top" 
                      width="100%" 
                      height={160}
                      src="/images/reactjs.jpg"
                    />
                    <Card.Body>
                      <Card.Title 
                        className="wd-dashboard-course-title text-nowrap overflow-hidden">
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
                    {/*FACULTY*/}
                    {isFaculty && (
                      <div className="d-flex flex-column gap-2">
                        <div className="d-flex justify-content-between gap-2">
                          <button onClick={async (e) => {
                              e.preventDefault();
                              try {
                                await courseClient.findModulesForCourse(course._id);
                                navigate(`/Kambaz/Courses/${course._id}/modules`);
                              } catch (error) {
                                console.error("Error fetching modules:", error);
                                setError("Failed to load modules. Please try again later.");
                              }
                            }}
                            className="btn btn-primary gap-2">
                            Go
                          </button>
                        
                          <button onClick={(e) => {
                              e.preventDefault();
                              deleteCourse(course._id);
                            }}
                            className="btn btn-danger w-30">
                            Delete
                          </button>
                          <button onClick={(e) => {
                              e.preventDefault();
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
                    {isStudent && (
                      <div className="d-flex flex-column gap-2">
                        {isEnrolled(course._id) && (
                          <>
                            <Link to={`/Kambaz/Courses/${course._id}/modules`}
                              className="btn btn-primary w-100">
                              Go
                            </Link>
                            <Link to={`/Kambaz/Courses/${course._id}/Assignments`}
                              className="text-decoration-none text-dark text-center border border-secondary rounded p-2">
                              Assignments
                            </Link>
                          </>
                        )}
                        <button 
                          onClick={() => handleEnrollToggle(course._id)}
                          className={`btn ${isEnrolled(course._id) ? 'btn-danger' : 'btn-success'} w-100`}
                          disabled={loading}>
                          {loading ? 'Processing...' : isEnrolled(course._id) ? 'Unenroll' : 'Enroll'}
                        </button>
                      </div>
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
/*
const { enrollments } = useSelector((state: any) => state.enrollments);
*/
