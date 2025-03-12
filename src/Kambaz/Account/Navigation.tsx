import { Link, useLocation } from "react-router-dom";
import {useSelector} from "react-redux";

export default function AccountNavigation() {
  const{ currentUser} = useSelector((state: any) => state.axxountReducer);

  const links = currentUser? ["Profile"] : ["Signin", "Signup"];
  const {pathname} = useLocation();
  
  return (
    <div id="wd-account-navigation" className="wd list-group fs-5 rounded-0">
    {links.map((link) => {
      const isActive = pathname.includes(link.toLowerCase());
      return (
        <Link key={link} to={`/Kambaz/Account/${link}`}
          id={`wd-account-${link.toLowerCase()}-link`}
          className={`list-group-item border border-0 ${isActive ? "active" : "text-danger"}`}
        >
          {link}
        </Link>
      );
    })}
    </div>
);}