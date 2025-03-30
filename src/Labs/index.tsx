import Lab1 from "./Lab1";
import {Route, Routes, Navigate} from "react-router";
import TOC from "./TOC";
import Lab2 from "./Lab2";
import Lab3 from "./Lab3";
import Lab4 from "./Lab4";
import store from "./store";
import {Provider} from "react-redux";

export default function Labs(){
    return (
        <Provider store = {store}>
            
        <div className = "container-fluid" id="wd-labs">
            <h1>Labs</h1>
            <h4>First Name: Yu-Hsuan</h4>
            <h4>Last Name: Yang</h4>
            <TOC />
            <Routes>
                <Route path="/" element={<Navigate to="Lab1" />} />
                <Route path="Lab1" element={<Lab1 />} />
                <Route path="Lab2" element={<Lab2 />} />
                <Route path="Lab3/*" element={<Lab3 />} />
                <Route path="Lab4/*" element={<Lab4 />} />
            </Routes>
        </div>
        </Provider>
);}

            /*
            <ul className="nav nav-pills">
                <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="#">Lab 1</a>
                </li>

                <li className="nav-item">
                    <a className="nav-link" href="#">Lab 2</a>
                </li>


            </ul>
            */