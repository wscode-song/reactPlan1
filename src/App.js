import React from 'react';
import './index.css';
import './App.css';
import Form1 from './Components/form1'
import funcComp from './Components/funcComp.js'
import classComp from './Components/classComp.js'

import {
  Route,
  Switch,
  NavLink,
  HashRouter as Router, 
} from "react-router-dom";

function Home(){
  return (
    <div>
        <h2>Home</h2>
        home....
    </div>
  )
}

function App() {
  return (
    // <Form1></Form1>
    <Router>
      <div>
        <h1>Navigator</h1>

        {/* chapter start */}
        <ul>
          <li><NavLink exact to="/">Home</NavLink></li>
          <li><NavLink to="/topics/3">Form1</NavLink></li>
          <li><NavLink to="/funcComp">funcComp</NavLink></li>
          <li><NavLink to="/classComp">classComp</NavLink></li>
        </ul>
        {/* chapter end */}

        {/* content start */}
        <Switch>
          <Route exact path="/"><Home></Home></Route>
          <Route path="/topics/:userId" component={Form1}></Route>
          <Route path="/funcComp" component={funcComp}></Route>
          <Route path="/classComp" component={classComp}></Route>
          <Route path="/"><h1>Not found</h1></Route>
        </Switch>
        {/* content end */}

      </div>
    </Router>
  );
}

export default App;
