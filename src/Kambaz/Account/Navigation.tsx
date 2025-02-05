import { Link } from "react-router-dom";
export default function AccountNavigation() {
  return (
    <div id="wd-account-navigation" className="wd list-group fs-5 rounded-0">
      <Link to={`/Kambaz/Account/Signin`}  id="wd-account-signin-link"
        className="list-group-item active border border-0"> Signin  </Link> <br/>
      <Link to={`/Kambaz/Account/Signup`}  id="wd-account-signup-link"
        className="list-group-item border border-0 text-danger"> Signup  </Link> <br/>
      <Link to={`/Kambaz/Account/Profile`} id="wd-account-profile-link"
        className="list-group-item border border-0 text-danger"> Profile </Link> <br/>
</div>
);}