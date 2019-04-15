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
               <Route path="" exact component={ListView}></Route>
               <Route path="/detailed-view/:postId"  exact component={DetailedView} ></Route>
            </Router>
         </div>
      );
   }
}

export default App;
