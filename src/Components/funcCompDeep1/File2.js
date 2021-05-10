import React,{ useState } from 'react';

// function component -> return
// props in initNumber
function File2(props){
    console.log("Func Start File2");
    const obj = useState(props.getToday);
    let setState = obj[1];
    return (
        <div>
            <h2>ToDay : {obj[0]}</h2>
            <input 
                type = "button"
                value="날자 변경 이벤트"
                onClick={function(){
                    setState((new Date()).toString());
                }}
            />
            <p>1111</p>

        </div>
    );
};

export default File2;