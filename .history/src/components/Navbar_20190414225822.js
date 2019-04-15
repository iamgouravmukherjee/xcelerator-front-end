import React, { Component } from 'react';

class Navbar extends Component {
   render() {
      return (
         <div className="header z-depth-1">
            <a href="/">
               <img src="https://thumbs.dreamstime.com/t/circle-abstract-logo-28546917.jpg" className="logo" />
            </a>
         </div>
      )
   }
}

export default Navbar;