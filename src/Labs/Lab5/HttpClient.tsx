import * as client from "./client";
import { useEffect, useState} from "react";
//const REMOTE_SERVER = import.meta.env.VITE_REMOTE_SERVER;

export default function HttpClient(){
    const [welcomeOnClick, setWelcomeOnClick] = useState("");
    const [welcomeOnLoad, setWelcomeOnLoad] = useState("");
    
    
    const fetchWelcomeOnClick = async () => {
        const message = await client.fetchWelcomeMessage();
        setWelcomeOnClick(message);
    };
    
    /*
    const fetchWelcomeOnClick = async()=>{
        const response  = await axios.get(`${REMOTE_SERVER}/lab5/welcome`);
        setWelcomeOnClick(response.data);
    };
    */
    const fetchWelcomeOnLoad = async()=>{
        const welcome = await client.fetchWelcomeMessage();
        setWelcomeOnLoad(welcome);
    };
    
    //useEffect invoke the fetchWelcomeOnLoad when the component or screen first loads
    useEffect(()=>{ 
        fetchWelcomeOnLoad();
    }, []);
    
    return(
        <div>
            <h3>HTTP Client </h3>
                <h4>Requesting on Click</h4>
                <button className="btn btn-primary me-2" onClick={fetchWelcomeOnClick}>
                    Fetch Welcome
                </button><br/>

                <h4>Requesting on Click</h4>
                Response from server: <b>{welcomeOnClick}</b>
                <hr/>

                <h4>Requesting on Load</h4>
                Response from server: <b>{welcomeOnLoad}</b>
                <hr/>
            
        </div>
    )
};