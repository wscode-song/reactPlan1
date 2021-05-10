import React from 'react'; // import 로 useState 를 불러온다!
import { useParams } from "react-router-dom"; 

const Form1 = () =>{
    const userId = useParams();
    console.log(userId.userId);
    const name = 'test';
    // const userInfo = useParams();
    // function Welcome(){
    //     //this error!!
    //     // return <h1>Hello,{this.state.name}</h1>
    //     // reason : function in not use this, but you want this => .bind(this) need
    //     return <h1>Hello,{name}</h1>
    // };

    
    return (
        <div>
            {name}
        </div>
  
    );


};


export default Form1;