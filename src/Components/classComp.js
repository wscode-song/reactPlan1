import React, { Fragment } from 'react';

//class component -> render function use -> return
class classComp extends React.Component{
    render(){
        return(
            <Fragment>
                <div class="container">
                    <p>클래스형 컴포넌트</p>
                </div>
            </Fragment>
        );
    }
}

export default classComp;