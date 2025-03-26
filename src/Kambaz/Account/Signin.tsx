import { Link, useNavigate } from "react-router-dom";
import "../styles.css";

import {useState} from "react";
import {setCurrentUser} from "./reducer";
import {useDispatch} from "react-redux";
//import * as db from "../Database";

import * as client from "./client";

export default function Signin() {
  const [credentials, setCredentials] = useState({
    username: "",
    password: ""
  });
  const [error, setError] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  /*
  const signin = () => {
    const user = db.users.find(
      (u:any) => u.username === credentials.username && u.password === credentials.password);
    if(!user) return;
    dispatch(setCurrentUser(user));
    navigate("/Kambaz/Dashboard");
  };
  */
  const signin = async () => {
    try {
      setError("");
      const user = await client.signin(credentials);
      if (!user) {
        setError("Invalid username or password");
        return;
      }
      dispatch(setCurrentUser(user));
      navigate("/Kambaz/Dashboard");
    } catch (err) {
      setError("Failed to sign in. Please try again.");
    }
  };

  return (
    <div id="wd-signin-screen">
      <h1>Sign in</h1>
      {error && <div className="alert alert-danger">{error}</div>}
      <input 
        value={credentials.username} 
        onChange={(e) => setCredentials({...credentials, username: e.target.value})}
        id="wd-username"
        placeholder="username" 
        className="form-control mb-2" 
      />

      <input 
        value={credentials.password}
        onChange={(e) => setCredentials({...credentials, password: e.target.value})} 
        id="wd-password"
        placeholder="password" 
        type="password" 
        className="form-control mb-2" 
      />

      <button 
        onClick={signin}  
        id="wd-signin-btn" 
        className="btn btn-primary w-100"
      >
        Sign in
      </button>
          
      <Link id="wd-signup-link" to="/Kambaz/Account/Signup">
        Sign up
      </Link>
    </div>
  );
}