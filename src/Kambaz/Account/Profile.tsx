//class->id/className? p21
import { Link } from "react-router-dom";
import "../styles.css";

export default function Profile() {
  return (
    <div id="wd-profile-screen">
      <h1>Profile</h1>
      <input id="wd-username" defaultValue="alice" 
          placeholder="username" 
          className="form-control mb-2"/>
      <input id="wd-password" defaultValue="123" 
            placeholder="password" type="password"
            className="form-control mb-2" />
      <input id="wd-firstname" defaultValue="Alice" 
          placeholder="First Name" 
          className="form-control mb-2" />
      <input id="wd-lastname" defaultValue="Wonderland" 
          placeholder="Last Name" 
          className="form-control mb-2" />
      <input id="wd-dob" defaultValue="2000-01-01" 
            type="date" 
            className="form-control mb-2" />
      <input id="wd-email" defaultValue="alice@wonderland" 
            type="email" 
            className="form-control mb-2" />

      <select id="wd-role" defaultValue="FACULTY" className="form-control mb-2">
        <option value="USER">User</option>       <option value="ADMIN">Admin</option>
        <option value="FACULTY">Faculty</option> <option value="STUDENT">Student</option>
      </select>
      <br/>
      <Link id="wd-signout-btn" to="/Kambaz/Account/Signin" 
            className="btn btn-primary w-100">Signout</Link>
    </div>
);}