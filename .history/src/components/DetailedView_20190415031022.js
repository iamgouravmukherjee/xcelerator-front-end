import React, { Component } from 'react';

class DetailedView extends Component {
   render() {
      return (
         <section className="section">
            <div className="grid">
               <div className="item item--full">
                  <div>
                     <div className='postImage image1'></div>
                     <div className="item__details">
                        <div className="postTitle"> jujubes cheesecake</div>
                        <div>  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Enim maiores explicabo illo quos neque tenetur accusamus a, incidunt suscipit minima placeat accusantium, repudiandae eum id pariatur tempore minus nihil consequuntur! </div>
                     </div>
                  </div>
               </div>
            </div>
         </section>
      )
   }
}

export default DetailedView;