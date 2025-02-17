export default function Styles(){
    const colorBlack = {color:"black"};
    const padding10px = {padding:"10px"};
    
    const bgBlue = {"backgroundColor": "lightBlue",
                    "color": "black",
                    "padding": "10px"
    };

    const bgRed = {"backgroundColor": "lightcoral",
                    "color": "black",
                    "padding": "10px"
    };
    return(
        <div id="wd-styles">
            <h2>Styles</h2>
            <div style={{"backgroundColor": "lightyellow",
                        "color": "color", padding:"10px"}}>
            Yellow Background</div>
            <div style={bgRed}> Red background</div>
            <div style={bgBlue}> Blue background</div>
        </div>
    );
}