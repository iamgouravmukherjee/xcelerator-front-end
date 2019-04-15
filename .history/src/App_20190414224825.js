import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
import DetailedView from './components/DetailedView';
import ListView from './components/ListView';

class App extends Component {
   render() {
      return (
         <div className="App">
            <Router>
               <Route path="/detailed-view/:postId" component={DetailedView} ></Route>
               <Route path="" exact component={ListView}></Route>
            </Router>
         </div>
      );
   }
}

export default App;
