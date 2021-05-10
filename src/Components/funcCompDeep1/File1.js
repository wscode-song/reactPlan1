import React,{ useState } from 'react';

// function component -> return
// props in initNumber
function File1(props){
    console.log("Func Start File1");
    const initState = useState(props.initNumber);
    let setState = initState[1];
    return (
        <div>
            <p>deep1</p>
            <p>initNumber = {initState[0]} </p>
            <input type="button" 
                value="random"
                onClick={function(){
                    setState(Math.random());
                }}/>
        </div>
    );
};

export default File1;