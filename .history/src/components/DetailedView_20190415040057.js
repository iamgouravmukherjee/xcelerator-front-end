import React, { Component } from 'react';
import axios from 'axios';

class DetailedView extends Component {
   state = {
      post: [],
      loading: true
   }
   componentDidMount()  {
      // axios.get('http://localhost:3006/api/posts')
      // .then(response => {
      //    console.log('response', response)
      //    if (response.hasOwnProperty('data')) {
      //       this.setState(state => {
      //          return {
      //             posts: response['data']['data'],
      //             loading: false
      //          }
      //       })
      //    }
      // })
      // .catch(error => {
      //    console.log('error', error);
      // })
      console.log(this.props);
   }
   render() {
      return (
         <section className="section">
            <div className="grid">
               <div className="item item--full detailed">
                  <div className="postImage image1"></div>
                  <div className="item__details">
                     <div className="postTitle"> jujubes cheesecake</div>
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