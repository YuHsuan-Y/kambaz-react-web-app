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
  const [loading, setLoading] = useState(false);
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
  

  const validateForm = () => {
    if (!credentials.username.trim()) {
      setError("Username is required");
      return false;
    }
    if (!credentials.password.trim()) {
      setError("Password is required");
      return false;
    }
    return true;
  };

  const signin = async () => {
    try {
      if (!validateForm()) {
        return;
      }

      setError("");
      setLoading(true);
      const user = await client.signin(credentials);
      
      if (!user) {
        setError("Invalid username or password");
        return;
      }

      dispatch(setCurrentUser(user));
      navigate("/Kambaz/Dashboard");
    } catch (err: any) {
      const errorMessage = err.response?.data?.message || "Failed to sign in. Please try again.";
      setError(errorMessage);
      console.error("Signin error:", err);
    } finally {
      setLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      signin();
    }
  };

  return (
    <div id="wd-signin-screen" className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <h1 className="text-center mb-5">Sign in</h1>
          {error && (
            <div className="alert alert-danger" role="alert">
              {error}
            </div>
          )}
          <div className="mb-3">
            <input
              value={credentials.username}
              onChange={(e) => setCredentials({ ...credentials, username: e.target.value })}
              onKeyPress={handleKeyPress}
              id="wd-username"
              placeholder="Username"
              className="form-control"
              disabled={loading}
            />
          </div>
          <div className="mb-3">
            <input
              value={credentials.password}
              onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
              onKeyPress={handleKeyPress}
              id="wd-password"
              placeholder="Password"
              type="password"
              className="form-control"
              disabled={loading}
            />
          </div>
          <button
            onClick={signin}
            disabled={loading}
            id="wd-signin-btn"
            className="btn btn-primary w-100 mb-3"
          >
            {loading ? (
              <>
                <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                Signing in...
              </>
            ) : (
              "Sign in"
            )}
          </button>
          <div className="text-center">
            <Link id="wd-signup-link" to="/Kambaz/Account/Signup" className="text-decoration-none">
              Sign up
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}