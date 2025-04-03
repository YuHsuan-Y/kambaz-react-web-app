import { FaUserCircle } from "react-icons/fa";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

interface User {
    _id: string;
    username: string;
    loginId: string;
    section: string;
    role: string;
    lastActivity: string;
    totalActivity: string;
}

interface Enrollment {
    user: string;
    course: string;
}

export default function PeopleTable() {
    const { cid } = useParams();
    const { users, enrollments } = useSelector((state: any) => state.peopleReducer);
    
    return (
        <div id="wd-people-table">
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Login</th>
                        <th>Section</th>
                        <th>Role</th>
                        <th>Last Activity</th>
                        <th>Total Activity</th>
                    </tr>
                </thead>

                <tbody>
                    {users.filter((user: User) => 
                        enrollments.some((enrollment: Enrollment) => 
                            enrollment.user === user._id && 
                            enrollment.course === cid)
                    )
                    .map((user: User) => (
                        <tr key={user._id}>
                            <td className="wd-full-name text-nowrap">
                                <FaUserCircle className="me-2 fs-1 text-secondary" />
                                <span className="wd-first-name">{user.username}</span>
                            </td>
                            <td className="wd-login-id">{user.loginId}</td>
                            <td className="wd-section">{user.section}</td>
                            <td className="wd-role">{user.role}</td>
                            <td className="wd-last-activity">{user.lastActivity}</td>
                            <td className="wd-total-activity">{user.totalActivity}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}