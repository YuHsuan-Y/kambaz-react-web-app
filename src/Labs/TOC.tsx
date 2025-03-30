//import {Link} from "react-router-dom";
import {useLocation} from "react-router";
//<Link to="/Labs">Labs</Link></li>
//<li><Link to="/Labs/Lab1">Lab 1</Link></li>
//<li><Link to="/Labs/Lab2">Lab 2</Link></li>
//<li><Link to="/Labs/Lab3">Lab 3</Link></li>
//<li><Link to="/Kambaz">Kambaz</Link></li>
//<li><a href="https://github.com/YuHsuan-Y/kambaz-react-web-app/tree/main" id="wd-github"> Github </a></li>
            
export default function TOC(){
    const {pathname} = useLocation();
    return(
        <ul className="nav nav-pills" id="wd-toc">
            <li className="nav-item"><a id="wd-a" href="#/Labs" className="nav-link">Labs</a></li>

            <li className="nav-item"><a id="wd-a1" href="#/Labs/Lab1"
                className={`nav-link ${pathname.includes("Lab1") ? "active" : ""}`}>Lab 1</a></li>

            <li className="nav-item"><a id="wd-a2" href="#/Labs/Lab2"
                className={`nav-link ${pathname.includes("Lab2") ? "active" : ""}`}>Lab 2</a></li>

            <li className="nav-item"><a id="wd-a3" href="#/Labs/Lab3"
                className={`nav-link ${pathname.includes("Lab3") ? "active" : ""}`}>Lab 3</a></li>

            <li className="nav-item"><a id="wd-a4" href="#/Labs/Lab4"
                className={`nav-link ${pathname.includes("Lab4") ? "active" : ""}`}>Lab 4</a> </li>

            <li className="nav-item"><a id="wd-k" href="#/Kambaz" 
                className={`nav-link' ${pathname.includes("#/Kambaz") ? "active" : "" }`}>Kambaz</a></li>

            <li className="nav-item"><a id="wd-github" href="https://github.com/YuHsuan-Y/kambaz-react-web-app/tree/main" target="_blank"
                className="nav-link">My GitHub</a></li>
        </ul>
    );
}