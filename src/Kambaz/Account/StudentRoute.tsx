import {useSelector, useDispatch} from "react-redux";
import {useParams} from "react-router-dom";
import {enroll, unenroll} from "../Courses/enrollmentReducer";
//import accountReducer from "./reducer";
//import enrollmentReducer from "../Courses/enrollmentReducer";

export default function StudentRoute({children}: {children: React.ReactNode}){
    const { currentUser } = useSelector((state: {accountReducer: {currentUser: any}}) => state.accountReducer);
    const { enrollments } = useSelector((state: {enrollments: {enrollments: any[]}}) => state.enrollments);
    const {courseId} = useParams<{ courseId: string }>();
    const dispatch = useDispatch();

    if (!courseId) {
        return null;
    }
    const isEnrolled = enrollments.some((e: { user: string; course: string }) => e.user === currentUser._id && e.course === courseId);

    if (currentUser && currentUser.role === "STUDENT") {
        return (
            <div>
                {isEnrolled ? (
                    //Red unenroll button for students enrolled in course 
                    <button className="btn btn-danger"
                            onClick={() => dispatch(unenroll({ userId: currentUser._id, courseId }))}>
                        Unenroll
                    </button>
                ) : 
                (
                    //Green enroll button for students unenroll in course
                    <button className="btn btn-success"
                        onClick={() => dispatch(enroll({ userId: currentUser._id, courseId }))}>
                        Enroll
                    </button>  
                )}
                {children}
            </div>
        );
    }

    return null;
}