import "../styles.css";

import {useState} from "react";
import {Link, useNavigate} from "react-router-dom";
import * as client from "./client";
import {useDispatch} from "react-redux";
import { setCurrentUser } from "./reducer";

export default function Signup() {
        const[user, setUser] = useState<any>({});
        const navigate = useNavigate();
        const dispatch = useDispatch();
        const signup = async()=>{
                const currentUser = await client.signup(user);
                dispatch(setCurrentUser(currentUser));
                navigate("/Kambaz/Account/Profile");
        };
    return (
        <div id="wd-signup-screen">
            <h1>Sign up</h1>
            <input value={user.username} onChange={(e) => setUser({...user, username: e.target.value})}
                   id="wd-username" placeholder="username" className="form-control mb-2" />
            
            <input value={user.password} onChange={(e) => setUser({...user, password: e.target.value})}
                  id="wd-password" placeholder="password" type="password" className="form-control mb-2" />
            {/*
            <input id="wd-password-verify" placeholder="verify password" type="password" className="form-control mb-2" />
            */}

            <button onClick={signup} className="wd-signup-btn btn btn-primary mb-2 w-100">Sign up</button><br/>
            <Link id="wd-signin-link" to="/Kambaz/Account/Signin">Sign in</Link>
            
        </div>
    );
}
/*
   <Link id="wd-signup-btn" to="/Kambaz/Account/Profile" className="btn btn-primary w-100">
                    Sign up</Link>
*/
