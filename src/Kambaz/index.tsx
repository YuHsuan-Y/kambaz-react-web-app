import { Navigate, Routes, Route } from "react-router-dom";
import Account from "./Account";
import Dashboard from "./Dashboard";
import KambazNavigation from "./Navigation";
import Courses from "./Courses";
import "./styles.css";
import Labs from "../Labs";

import {useState, useEffect} from "react";
import {useSelector} from "react-redux";
import * as userClient from "./Account/client";
import * as courseClient from "./Courses/client";
import ProtectedRoute from "./Account/ProtectedRoute";
//import Session from "./Account/Session";
//import FacultyRoute from "./Account/FacultyRoute";
import { AxiosError } from "axios";

export default function Kambaz() {

  const initialCourseState = {
    _id: "1234",
    name: "",
    number: "New Number",
    startDate: "2023-09-10",
    endDate: "2023-12-15",
    description: "",
    img: "reactjs.jpg",
  };
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
    
    const fetchCourses = async() => {
      if (!currentUser) return;
      
      try {
        const courses = await userClient.findMyCourses(); 
        setCourses(courses);
      } catch(error) {
        console.error("Error fetching courses:", error);
        // If unauthorized, clear the courses
        if ((error as AxiosError)?.response?.status === 401) {
          setCourses([]);
        }
      }
    };

    const updateCourse = async() => {
      await courseClient.updateCourse(course);
      setCourses( courses.map((c) => {
          if(c._id === course._id){
            return course;
          }
          else{
            return c;
          }
        })
      );
      setCourse(initialCourseState);
    };
  
    const addNewCourse = async()=> {
      try {
        const newCourse = await userClient.createCourse(course);
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
  
    const deleteCourse = async (courseId: string) => {
      await courseClient.deleteCourse(courseId);
      setCourses(courses.filter((course) => course._id !== courseId));
    };

    const findModulesForCourse = async (courseId: string) => {
      try {
        await courseClient.findModulesForCourse(courseId);
        // Navigate to the modules page for this course
        window.location.href = `/Kambaz/Courses/${courseId}/Modules`;
      } catch (error) {
        console.error("Error fetching modules:", error);
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
