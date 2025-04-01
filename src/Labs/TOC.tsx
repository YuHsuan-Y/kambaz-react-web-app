import { useLocation, useNavigate } from "react-router-dom";
//import {Link} from "react-router-dom";
//<Link to="/Labs">Labs</Link></li>
//<li><Link to="/Labs/Lab1">Lab 1</Link></li>
//<li><Link to="/Labs/Lab2">Lab 2</Link></li>
//<li><Link to="/Labs/Lab3">Lab 3</Link></li>
//<li><Link to="/Kambaz">Kambaz</Link></li>
//<li><a href="https://github.com/YuHsuan-Y/kambaz-react-web-app/tree/main" id="wd-github"> Github </a></li>
            
export default function TOC(){
    const {pathname} = useLocation();
    const navigate = useNavigate();
    return(
        <ul className="nav nav-pills" id="wd-toc">
            <li className="nav-item">
                <a 
                    id="wd-a" 
                    href="#/Labs" 
                    className={`nav-link ${pathname === "/Labs" ? "active" : ""}`}
                    onClick={(e) => {
                        e.preventDefault();
                        navigate("/Labs");
                    }}
                >
                    Labs
                </a>
            </li>

            <li className="nav-item">
                <a 
                    id="wd-a1" 
                    href="#/Labs/Lab1"
                    className={`nav-link ${pathname.includes("Lab1") ? "active" : ""}`}
                    onClick={(e) => {
                        e.preventDefault();
                        navigate("/Labs/Lab1");
                    }}
                >
                    Lab 1
                </a>
            </li>

            <li className="nav-item">
                <a 
                    id="wd-a2" 
                    href="#/Labs/Lab2"
                    className={`nav-link ${pathname.includes("Lab2") ? "active" : ""}`}
                    onClick={(e) => {
                        e.preventDefault();
                        navigate("/Labs/Lab2");
                    }}
                >
                    Lab 2
                </a>
            </li>

            <li className="nav-item">
                <a 
                    id="wd-a3" 
                    href="#/Labs/Lab3"
                    className={`nav-link ${pathname.includes("Lab3") ? "active" : ""}`}
                    onClick={(e) => {
                        e.preventDefault();
                        navigate("/Labs/Lab3");
                    }}
                >
                    Lab 3
                </a>
            </li>

            <li className="nav-item">
                <a 
                    id="wd-a4" 
                    href="#/Labs/Lab4"
                    className={`nav-link ${pathname.includes("Lab4") ? "active" : ""}`}
                    onClick={(e) => {
                        e.preventDefault();
                        navigate("/Labs/Lab4");
                    }}
                >
                    Lab 4
                </a>
            </li>

            <li className="nav-item">
                <a 
                    id="wd-a5" 
                    href="#/Labs/Lab5"
                    className={`nav-link ${pathname.includes("Lab5") ? "active" : ""}`}
                    onClick={(e) => {
                        e.preventDefault();
                        navigate("/Labs/Lab5");
                    }}
                >
                    Lab 5
                </a>
            </li>

            <li className="nav-item">
                <a 
                    id="wd-k" 
                    href="#/Kambaz" 
                    className={`nav-link ${pathname.includes("/Kambaz") ? "active" : ""}`}
                    onClick={(e) => {
                        e.preventDefault();
                        navigate("/Kambaz");
                    }}
                >
                    Kambaz
                </a>
            </li>

            <li className="nav-item">
                <a 
                    id="wd-github" 
                    href="https://github.com/YuHsuan-Y/kambaz-react-web-app/tree/main" 
                    target="_blank"
                    className="nav-link"
                >
                    My GitHub
                </a>
            </li>
        </ul>
    );
}