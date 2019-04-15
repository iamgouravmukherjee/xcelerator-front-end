import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Navbar extends Component {
   render() {
      return (
         <div className="header z-depth-1">
           <Link to="/">
               <img src="https://thumbs.dreamstime.com/t/circle-abstract-logo-28546917.jpg" className="logo" />
            </Link>
          
         </div>
      )
   }
}

export default Navbar;