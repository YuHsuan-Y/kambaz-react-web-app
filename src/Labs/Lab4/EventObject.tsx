import { useState } from "react";
export default function EventObject() {
  //We declare a piece of state called event, initialized to null.
  //event will hold whatever data we pass to setEvent. Right now, event is null by default, 
  //but we’ll update it in our click handler.
  
  const [event, setEvent] = useState(null);
  //handleClick: event handler function
  //e: event object
  //e.view: view property
  //replace the target property to avoid circular references
  //stores the event object in variable event
  
  const handleClick = (e: any) => {
    e.target = e.target.outerHTML;
    delete e.view;
    setEvent(e);
  }; 

  return (
    <div>
      <h2>Event Object</h2>
      <button onClick={(e) => handleClick(e)}
        className="btn btn-primary"
        id="wd-display-event-obj-click">
        Display Event Object
      </button>
      <pre>{JSON.stringify(event, null, 2)}</pre>
      <hr/>
</div>
);}