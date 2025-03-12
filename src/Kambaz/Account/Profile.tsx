//class->id/className? p21
import {useNavigate } from "react-router-dom";
import "../styles.css";

import {useState, useEffect} from "react";
import {useSelector, useDispatch} from "react-redux";
import {setCurrentUser} from "./reducer";

export default function Profile() {
  const [profile, setProfile] = useState<any>({});
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {currentUser} = useSelector((state: any) => state.accountReducer);
  const fetchProfile = () => {
    if(! currentUser) return navigate("/Kambaz/Account/Signin");
    setProfile(currentUser);
  };
  const signout = () => {
    dispatch(setCurrentUser(null));
    navigate("/Kambaz/Account/Signin");
  };
  useEffect(() => {fetchProfile(); }, []);

  return (
    <div id="wd-profile-screen">
      <h1>Profile</h1>
      {profile && (
        <div>
          <input defaultValue={profile.username} 
              id="wd-username" className="form-control mb-2"
              onChange={(e) => setProfile({...profile, username: e.target.value})}/>
              
          <input defaultValue={profile.password} 
                id="wd-password" className="form-control mb-2"
                onChange={(e) => setProfile({...profile, password: e.target.value})}/>

          <input defaultValue = {profile.firstName}
              id="wd-firstname" className="form-control mb-2"
              onChange={(e) => setProfile({...profile, firstName: e.target.value})}/>

          <input  defaultValue={profile.lastName}
              id="wd-lastname" className="form-control mb-2"
              onChange={(e) => setProfile({...profile, lastName: e.target.value})}/>

          <input defaultValue={profile.dob}
              id="wd-dob" className="form-control mb-2" 
              onChange={(e) => setProfile({...profile, dob:e.target.value})} type="date"/>

          <input defaultValue={profile.email}
                id="wd-email" className="form-control mb-2" 
                onChange={(e) => setProfile ({...profile, email:e.target.value })} type="email" />

          <select onChange={(e) => setProfile({...profile, role:e.target.value})}
              id="wd-role" className="form-control mb-2">
            <option value="USER">User</option>       <option value="ADMIN">Admin</option>
            <option value="FACULTY">Faculty</option> <option value="STUDENT">Student</option>
          </select>
          <br/>

          <button onClick={signout} className="btn btn-primary w-100" id="wd-signout-btn">Signout</button>

        </div>
      )}
    </div>
);}