import { Link, useLocation } from "react-router-dom";
           
export default function TOC() {
    const { pathname } = useLocation();
    return (
        <ul className="nav nav-pills" id="wd-toc">
            <li className="nav-item">
                <Link id="wd-a" to="/Labs" className="nav-link">Labs</Link>
            </li>

            <li className="nav-item">
                <Link id="wd-a1" to="/Labs/Lab1"
                    className={`nav-link ${pathname.includes("Lab1") ? "active" : ""}`}>Lab 1</Link>
            </li>

            <li className="nav-item">
                <Link id="wd-a2" to="/Labs/Lab2"
                    className={`nav-link ${pathname.includes("Lab2") ? "active" : ""}`}>Lab 2</Link>
            </li>

            <li className="nav-item">
                <Link id="wd-a3" to="/Labs/Lab3"
                    className={`nav-link ${pathname.includes("Lab3") ? "active" : ""}`}>Lab 3</Link>
            </li>

            <li className="nav-item">
                <Link id="wd-a4" to="/Labs/Lab4"
                    className={`nav-link ${pathname.includes("Lab4") ? "active" : ""}`}>Lab 4</Link>
            </li>

            <li className="nav-item me-2">
                <Link id="wd-a5" to="/Labs/Lab5"
                    className={`nav-link ${pathname.includes("Lab5") ? "active" : ""}`}>Lab 5</Link>
            </li>

            <li className="nav-item">
                <Link id="wd-k" to="/Kambaz" 
                    className={`nav-link ${pathname.includes("/Kambaz") ? "active" : ""}`}>Kambaz</Link>
            </li>

            <li className="nav-item">
                <a id="wd-github" href="https://github.com/YuHsuan-Y/kambaz-react-web-app/tree/main" target="_blank"
                    className="nav-link">My GitHub</a>
            </li>

            <li className="nav-item">
                <a id="wd-github" href="https://dashboard.render.com/web/srv-cvl3uapr0fns73892rng" target="_blank"
                    className="nav-link">Render</a>
            </li>

            <li className="nav-item">
                <Link id="wd-k" to="/Labs/Husky" 
                    className={`nav-link ${pathname.includes("/Husky") ? "active" : ""}`}>Husky</Link>
            </li>
        </ul>
    );
}