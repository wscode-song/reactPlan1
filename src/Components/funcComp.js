import React from 'react';
import File1 from './funcCompDeep1/File1';
import File2 from './funcCompDeep1/File2';

// function component -> return 
const funcComp = () =>{
    console.log("Func Start funcComp");
    return (
        <div className="container">
            <h1>function Component</h1>
            <h2>ToDay : {getToday()}</h2>
            <File1 initNumber={1}></File1>
            <File2 getToday={getToday()}></File2>
        </div>
    );
};
export default funcComp;

function getToday(){
    console.log("Func Start getToday");
    //let day = new Date().getDate(); //Current Date
    //let month = new Date().getMonth() + 1; //Current Month
    //let year = new Date().getFullYear(); //Current Year
    //return year + "-" + month + "-" + day;
    return (new Date()).toString();
}



