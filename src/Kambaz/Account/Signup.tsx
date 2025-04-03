import { Link } from "react-router-dom";
import "../styles.css";

export default function Signup() {
    return (
        <div id="wd-signup-screen">
            <h1>Sign up</h1>
            <input id="wd-username"
                    placeholder="username" 
                    className="form-control mb-2" />
            <input id="wd-password"
                    placeholder="password" type="password" 
                    className="form-control mb-2" />
            <input id="wd-password-verify" 
                    placeholder="verify password" type="password" 
                    className="form-control mb-2" />
            <Link id="wd-signup-btn" to="/Kambaz/Account/Profile" className="btn btn-primary w-100">
                    Sign up</Link>
            <Link id="wd-signin-link" to="/Kambaz/Account/Signin">Sign in</Link>
            
        </div>
    );
}
