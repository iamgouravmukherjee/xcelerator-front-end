import React, { Component } from 'react';
import axios from 'axios';

class DetailedView extends Component {
   state = {
      post: [],
      loading: true
   }
   componentDidMount() {
      if (this.props.location.hasOwnProperty('state')) {
         axios.get('http://localhost:3006/api/posts/' + this.props.location.state.id)
            .then(response => {
               if (response.hasOwnProperty('data')) {
                  console.log('response', response['data']['data'][0]);
                  this.setState(state => {
                     return {
                        post: response['data']['data'],
                        loading: false
                     }
                  })
               }
            })
            .catch(error => {
               console.log('error', error);
            })
      }
   }
   render() {
      let post = null;
      if (this.state.loading) {
         post = <div>Loading...</div>
      } else {
         post = (
            <div className="item item--full detailed">
               <div className={`postImage image${Math.floor(Math.random() * (6 - 1)) + 1}`}></div>
               <div className="item__details">
                  <div className="postTitle"> {this.state.post[0]['title']}</div>
                  <div> 
                     <p>{this.state.post[0]['body']}</p>
                     <p>{this.state.post[0]['body']}</p>
                  </div>
               </div>
            </div>
         );
      }
      return (
         <section className="section">
            <div className="grid">
               {post}
            </div>
         </section>
      )
   }
}

export default DetailedView;