import { Routes, Route, Navigate } from "react-router-dom";
import Account from "./Account";
import Dashboard from "./Dashboard";
import KambazNavigation from "./Navigation";
import Courses from "./Courses";
import Labs from "../Labs";
import "./styles.css";

import {useState, useEffect} from "react";
import { useSelector } from "react-redux";

//import { v4 as uuidv4 } from 'uuid';

//import * as db from "./Database";
//import * as client from "./Courses/client";
import * as userClient from "./Account/client";
import * as courseClient from "./Courses/client";

import ProtectedRoute from "./Account/ProtectedRoute";
import Session from "./Account/Session";

//import FacultyRoute from "./Account/FacultyRoute";

export default function Kambaz() {
    const [courses, setCourses] = useState<any[]>([]);
    const {currentUser} = useSelector((state: any) => state.accountReducer);
    
    const fetchCourses = async() => {
      try {
        const courses = await userClient.findMyCourses();
        setCourses(courses);
      } catch(error: any) {
        console.error('Failed to fetch courses:', error);
        if (error.response) {
          console.error('Server response:', error.response.data);
        }
      }
    };
    useEffect(() =>{
      fetchCourses();
    }, [currentUser]);

    const [course, setCourse] = useState<any> ({
      _id: "1234", name:"New Course", number:"New Number",
      startDate: "2023-09-10", endDate:"2023-12-15",
      image:"/images/react.js.jpg", description:"New Description"
    });
  
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
    };
  
    const addNewCourse = async()=> {
      const newCourse = await userClient.createCourse(course);
      //setCourses([...courses, { ...course, _id: uuidv4() }]);
      setCourses([...courses, newCourse]);
    };
  
    const deleteCourse = async (courseId: string) => {
      setCourses(courses.filter((course) => course._id !== courseId));
    };

  return (
    <Session>
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
                    setCourse = {setCourse}
                    addNewCourse = {addNewCourse}
                    deleteCourse = {deleteCourse}
                    updateCourse={updateCourse} 
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
    </Session>
);}
