import {useSelector} from "react-redux";
//import {Navigate} from "react-router-dom";

export default function FacultyRoute({children}: {children: any}){
    const {currentUser} = useSelector((state: any) => state.accountReducer);
    
    if (currentUser && currentUser.role === "FACULTY") {
        return children;
    }
    else{
        //hide the content here
        return null;
    }
}