import { useLocation, Link, Routes, Route } from "react-router";

function Def() {
    const { pathname } = useLocation();  // __4__ = useLocation
    return (
      <div>
        output =
        {pathname.includes("s") && <span>p</span>} 
        {pathname.includes("w") && <span>y</span>}  
      </div>
    );
  }
  
  export default function Midterm() {
    return (
      <div>
        <Link to="q/y">x</Link>          
        <Link to="q/s">r</Link>         
        <Routes>
          <Route path="q/:a" element={<Def />} />  
        </Routes>
      </div>
    );
  }