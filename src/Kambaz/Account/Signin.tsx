import { Link } from "react-router-dom";
import "../styles.css";

export default function Signin() {
  return (
    <div id="wd-signin-screen">
      <h1>Sign in</h1>
      <input id="wd-username"
          placeholder="username" 
          className="form-control mb-2" />
      <input id="wd-password"
          placeholder="password" type="password" 
          className="form-control mb-2" />
      <Link  id="wd-signin-btn"
          to="/Kambaz/Account/Profile" 
          className="btn btn-primary w-100">
          Sign in </Link>
      <Link id="wd-signup-link" to="/Kambaz/Account/Signup"  >Sign up</Link>
</div>
);}