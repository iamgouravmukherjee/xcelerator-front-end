import React, { Component } from 'react';

class DetailedView extends Component {
   render() {
      return (
         <section className="section">
            <div className="grid">
               <div class="item item--full detailed">
                  <div class="postImage image1"></div>
                  <div class="item__details">
                     <div class="postTitle"> jujubes cheesecake</div>
                     <div>  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Enim maiores explicabo illo quos neque tenetur accusamus a, incidunt suscipit minima placeat accusantium, repudiandae eum id pariatur tempore minus nihil consequuntur!
                   </div>
                  </div>
               </div>
            </div>
         </section>
      )
   }
}

export default DetailedView;