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

   handleActions = (actionType, id) => {
      axios.patch(`http://localhost:3006/api/posts/${id}`, { type: actionType })
         .then(response => {
            // console.log('response from server', response);
            let posts = [...this.state.post];
            // posts = posts.map(post => {
            switch (actionType) {
               case "liked":
                  posts[0]['liked'] = !posts[0]['liked'];
                  posts[0]['disliked'] = false;
                  break;
               case "disliked":
                  posts[0]['disliked'] = !posts[0]['disliked'];
                  posts[0]['liked'] = false;
                  break;
               case "bookmarked":
                  posts[0]['bookmarked'] = !posts[0]['bookmarked'];
                  break;
               default:
                  break;
            }
            // })
            this.setState((previousState) => {
               return { ...previousState, post:  posts };
            })
         })
         .catch(error => {
            console.log('error occuring while liking', error);
         })
   }


   render() {
      let post = null;
      if (this.state.loading) {
         post = <div>Loading...</div>
      } else {
         post = (
            <div className="item item--full detailed">
               <div style={{ backgroundImage: `url(${JSON.stringify(this.state.post[0]['imageUrl'])})` }} className={`postImage`}></div>
               <div className="item__details">
                  <div className="postTitle"> {this.state.post[0]['title']}</div>
                  <div>
                     <p>{this.state.post[0]['body']}</p>
                     <p>{this.state.post[0]['body']}</p>
                  </div>
                  <div className="actions">
                     <i
                        className={this.state.post[0]['liked'] ? 'fas fa-thumbs-up' : 'far fa-thumbs-up'}
                        onClick={() => this.handleActions('liked', this.state.post[0]['id'])} >
                     </i>
                     <i
                        className={this.state.post[0]['disliked'] ? 'fas fa-thumbs-down' : 'far fa-thumbs-down'}
                        onClick={() => this.handleActions('disliked', this.state.post[0]['id'])} >
                     </i>
                     <i
                        className={this.state.post[0]['bookmarked'] ? 'fas fa-bookmark' : 'far fa-bookmark'}
                        onClick={() => this.handleActions('bookmarked', this.state.post[0]['id'])} >
                     </i>
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