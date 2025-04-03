import {useSelector} from "react-redux";
import {Navigate, useLocation} from "react-router-dom";

export default function ProtectedRoute({children}: {children:any}) {
    const{currentUser} = useSelector((state: any) => state.accountReducer);
    const location = useLocation();

    if(currentUser) {
        return children;
    } else {
        return <Navigate to="/Kambaz/Account/Signin" state={{ from: location }} replace />;
    }
}