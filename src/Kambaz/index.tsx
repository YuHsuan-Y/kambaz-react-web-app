import { Navigate, Routes, Route } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Account from "./Account";
import Dashboard from "./Dashboard";
import KambazNavigation from "./Navigation";
import Courses from "./Courses";
import "./styles.css";
import Labs from "../Labs";

import {useState, useEffect} from "react";
import {useSelector} from "react-redux";

import * as courseClient from "./Courses/client";
import ProtectedRoute from "./Account/ProtectedRoute";
//import Session from "./Account/Session";
//import FacultyRoute from "./Account/FacultyRoute";
import * as userClient from "./Account/client";


export default function Kambaz() {
  const navigate = useNavigate();
  const [error, setError] = useState<string | null>(null);

  /*
  const initialCourseState = {
    _id: "1234",
    name: "",
    number: "New Number",
    startDate: "2023-09-10",
    endDate: "2023-12-15",
    description: "",
    img: "reactjs.jpg",
  };
  */
  const [courses, setCourses] = useState<any[]>([]);
  const [course, setCourse] = useState<any> ({
    _id: "1234", 
    name:"New Course", 
    number:"New Number",
    startDate: "2023-09-10", 
    endDate:"2023-12-15",
    image:"/images/react.js.jpg", 
    description:"New Description"
  });

  const {currentUser} = useSelector((state: any) => state.accountReducer);
  const [enrolling, setEnrolling] = useState<boolean>(false);

    const findCoursesForUser = async () => {
      try {
        const courses = await userClient.findCoursesForUser(currentUser._id);
        setCourses(courses);
      } catch (error) {
        console.error(error);
      }
    };

    const updateEnrollment = async (courseId: string, enrolled: boolean)=> {
      if (enrolled) {
        await userClient.enrollIntoCourse(currentUser._id, courseId);
      } 
      else {
        await userClient.unenrollFromCourse(currentUser._id, courseId);
      }
      setCourses(
        courses.map((course)=> {
          if (course._id === courseId) {
            return { ...course, enrolled: enrolled };
          } 
          else {
            return course;
          }
        })
      );
    };

    const fetchCourses = async() => {
      if (!currentUser) return;
      try {
        const allCourses = await courseClient.fetchAllCourses();
        const enrolledCourses = await userClient.findCoursesForUser(currentUser._id);
        
        const courses = allCourses.map((course:any) => {
          if(enrolledCourses.find((c:any) => c._id === course._id)) {
            return {...course, enrolled: true};
          } else {
            return course;
          }
        });
        
        setCourses(courses);
      } catch(error) {
        console.error(error);
      }
    };

    const updateCourse = async() => {
      try {
        const updatedCourse = await courseClient.updateCourse(course);
        setCourses(courses.map((c) => {
          if(c._id === course._id) {
            setCourses([...courses, updatedCourse]);
          } else {
            return c;
          }
        }));
 
      } catch (error) {
        console.error("Error updating course:", error);
      }
    };
  
    const addNewCourse = async()=> {
      try {
        //const newCourse = await userClient.createCourse(course);
        const newCourse = await courseClient.createCourse(course);
        setCourses([...courses, newCourse]);
        // Reset course state after successful creation
        setCourse({
          _id: "1234", 
          name:"New Course", 
          number:"New Number",
          startDate: "2023-09-10", 
          endDate:"2023-12-15",
          image:"/images/react.js.jpg", 
          description:"New Description"
        });
      } catch (error) {
        console.error("Error creating course:", error);
      }
    };
    
    useEffect(() => {
      if(enrolling) {
        fetchCourses();
      }
      else if (currentUser) {
        findCoursesForUser();
      }
    }, [enrolling]);
  
    const deleteCourse = async (courseId: string) => {
      try {
        const status = await courseClient.deleteCourse(courseId);
        if (status === 200 || status === 204) {
          setCourses(courses.filter((course) => course._id !== courseId));
        } else {
          console.error("Failed to delete course");
        }
      } catch (error) {
        console.error("Error deleting course:", error);
      }
    };

    const findModulesForCourse = async (courseId: string) => {
      try {
        await courseClient.findModulesForCourse(courseId);
        // Store modules in state if needed
        // Navigate to the modules page for this course using React Router
        navigate(`/Kambaz/Courses/${courseId}/Modules`);
      } catch (error) {
        console.error("Error fetching modules:", error);
        setError("Failed to load modules. Please try again later.");
      }
    };

    useEffect(() => {
      if (currentUser) {
        fetchCourses();
      }
    }, []);

  return (
    <div id="wd-kambaz">
          <KambazNavigation />
          <div className="wd-main-content-offset p-3">
            {error && (
              <div className="alert alert-danger" role="alert">
                {error}
              </div>
            )}
            <Routes>
              <Route path="/" element={<Navigate to="Account" />} />
              <Route path="/Account/*" element={<Account />} />
              <Route path="/Dashboard" element={
                <ProtectedRoute>
                  <Dashboard
                    courses={courses}
                    course={course}
                    setCourse={setCourse}
                    addNewCourse={addNewCourse}
                    deleteCourse={deleteCourse}
                    updateCourse={updateCourse}
                    findModulesForCourse={findModulesForCourse}
                    enrolling={enrolling}
                    setEnrolling={setEnrolling}
                    updateEnrollment={updateEnrollment}
                    setCourses={setCourses}
                  />
                </ProtectedRoute>
              }/>
              <Route path="Courses/:cid/*" element={<ProtectedRoute><Courses courses = {courses}/></ProtectedRoute>} />
              <Route path="/Calendar" element={<h1>Calendar</h1>}/>
              <Route path="/Inbox" element={<h1>Inbox</h1>} />
              <Route path="/Labs" element={<Labs />} />
            </Routes>
          </div>
    </div> 
);}
