import {FaUserCircle} from "react-icons/fa";
export default function PeopleTable(){
    return(
        <div id ="wd-people-table">
            {/*table-striped gives table row alternating bg color*/}
            <table className="table table-striped">
                <thead>
                    <tr><th>Name</th><th>Login</th><th>Section</th><th>Role</th><th>Last Activity</th><th>Total Activity</th></tr>
                </thead>

                <tbody>
                    <tr><td className="wd-full-name text-nowrap">
                        <FaUserCircle className="me-2 fs-1 text-secondary" />
                        <span className="wd-first-name">Tony</span>{" "}
                        <span className="wd-last-name">Stark</span>
                        </td>
                        <td className="wd-login-id">0012345615</td>
                        <td className="wd-section">S101</td>
                        <td className="wd-role">STUDENT</td>
                        <td className="wd-last-activity">2020-10-01</td>
                        <td className="wd-total-activity">10:21:32</td>
                    </tr>
                     {/* Add at least 3 more users such as Bruce Wayne, Steve Rogers, and Natasha Romanoff */}
                     <tr><td className="wd-full-name text-nowrap">
                        <FaUserCircle className="me-2 fs-1 text-secondary" />
                        <span className="wd-first-name">Bruce</span>{" "}
                        <span className="wd-last-name">Wayne</span>
                        </td>
                        <td className="wd-login-id">001234562</td>
                        <td className="wd-sectiom">S101</td>
                        <td className="wd-role">STUDENT</td>
                        <td className="wd-last-activity">2020-11-02</td>
                        <td className="wd-total-activity">15:32:43</td>
                    </tr>

                    <tr><td className="wd-full-name text-nowrap">
                        <FaUserCircle className="me-2 fs-1 text-secondary"/>
                        <span className="wd-first-name">Steve</span>
                        <span className="ed-last-name">Rogers</span>
                        <span className="wd-login-id"></span>
                        </td>
                        <td className="wd-login-id">001234563</td>
                        <td className="wd-section">S101</td>
                        <td className="wd-role">STUDENT</td>
                        <td className="wd-last-activity">2020-10-02</td>
                        <td className="wd-total-activity">23:32:43</td>
                    </tr>

                    <tr><td className="wd-full-name text-nowrap">
                        <FaUserCircle className="me-2 fs-1 text-secondary"/>
                        <span className="wd-first-name">Natasha</span>
                        <span className="ed-last-name">Romanoff</span>
                        <span className="wd-login-id"></span>
                        </td>
                        <td className="wd-login-id">001234564</td>
                        <td className="wd-section">S101</td>
                        <td className="wd-role">TA</td>
                        <td className="wd-last-activity">2020-11-05</td>
                        <td className="wd-total-activity">13:23:43</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}