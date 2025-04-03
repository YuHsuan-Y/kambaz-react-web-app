import {useSelector, useDispatch} from "react-redux";
//import {useParams} from "react-router-dom";

export default function StudentRoute({
  children, courseId,
}: {
  children: React.ReactNode;
  courseId: string;
}) {
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const { enrollments } = useSelector((state: any) => state.enrollments);
  const dispatch = useDispatch();


  if (!currentUser || currentUser.role !== "STUDENT" || !courseId) {
    return null;
  }

  const isEnrolled = enrollments.some(
    (e: { user: string; course: string }) =>
      e.user === currentUser._id && e.course === courseId
  );


  return (
    <div>
      {isEnrolled ? (

        <button
          className="btn btn-danger float-end"
          onClick={() =>
            dispatch(unenroll({ userId: currentUser._id, courseId }))
          }
        >
          Unenroll
        </button>
      ) : (

        <button
          className="btn btn-success float-end"
          onClick={() =>
            dispatch(enroll({ userId: currentUser._id, courseId }))
          }
        >
          Enroll
        </button>
      )}
      {children}
    </div>
  );
}

/*
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
*/

function enroll({ userId, courseId }: { userId: string; courseId: string }) {
  return {
    type: "ENROLL_COURSE",
    payload: { userId, courseId },
  };
}

function unenroll({ userId, courseId }: { userId: string; courseId: string }) {
  return {
    type: "UNENROLL",
    payload: { userId, courseId },
  };
}