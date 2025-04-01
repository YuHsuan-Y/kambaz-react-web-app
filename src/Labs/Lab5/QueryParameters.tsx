import {useState} from "react";
const REMOTE_SERVER = import.meta.env.VITE_REMOTE_SERVER;

export default function QueryParameters(){
    const[a, setA] = useState("34");
    const[b, setB] = useState("23");
    return(
        <div id="wd-query-parameters">
            <h3>Query Parameters</h3>
            <input className="wd-form-control mb-2 me-2" defaultValue={a}
                type="number"
                onChange={(e) => setA(e.target.value)}/>

            <input className="wd-form-control mb-2" defaultValue={b}
                onChange={(e)=> setB(e.target.value)}/>
            <br/>
            <a id="wd-query-parameter-add me-2"
                href={`${REMOTE_SERVER}/lab5/calculator?operation=add&a=${a}&b=${b}`}>
                <li>Add {a} + {b}</li>
            </a>
            
            <a id="wd-query-parameter-subtract me-2"
                href={`${REMOTE_SERVER}/lab5/calculator?operation=subtract&a=${a}&b=${b}`}>
                <li>Subtract {a} - {b}</li>
            </a>

            <a id="wd-query-parameter-multiply me-2"
               href={`${REMOTE_SERVER}/lab5/calculator?operation=multiply&a={a}&b=${b}`}>
                <li>Multiply {a} * {b}</li>
            </a>
             
            <a id="wd-query-parameter-divide me-2"
                href={`${REMOTE_SERVER}/lab5/calculator?operation=divide&a={a}&b=${b}`}>
                <li>Divide {a} / {b}</li>
            </a>
            <hr/>
        </div>
    );
}