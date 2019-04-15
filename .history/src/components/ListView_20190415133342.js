import React, { Component } from "react";
import { Link } from 'react-router-dom';
import axios from 'axios';

class ListView extends Component {

   state = {
      posts: [],
      liked: false,
      disliked: false,
      bookmarked: false,
      loading: true
   }

   componentDidMount() {
      axios.get('http://localhost:3006/api/posts')
         .then(response => {
            console.log('response', response)
            if (response.hasOwnProperty('data')) {
               this.setState(state => {
                  return {
                     posts: response['data']['data'],
                     loading: false
                  }
               })
            }
         })
         .catch(error => {
            console.log('error', error);
         })
   }

   handleActions = (actionType, id) => {
      console.log('actionType', actionType);
      switch (actionType) {
         case 'liked':
            let posts = [...this.state.posts];
            posts = posts.map(post => {
               if(post.id === id) {
                  post.liked = !post.liked;
                  console.log('post', post);
               }
               return post;
            })
            this.setState((previousState) => {
               return { ...previousState, posts};
            })
            break;
         case 'disliked':
            this.setState((previousState) => {
               return { 'disliked': !previousState['disliked'], 'liked': false };
            })
            break;
         case 'bookmarked':
            this.setState((previousState) => {
               return { 'bookmarked': !previousState['bookmarked'] };
            })
            break;
         default: 
            break;
      }
   }

   render() {
      let posts;
      if (this.state.loading) {
         posts = <div>Loading...</div>
      } else {
         posts = this.state.posts.map((post, index) => {
            return (
               <div key={post.id} className={index % 2 === 0 ? 'item item--medium' : ' item item--large'}>
                  <div className={`postImage image${Math.floor(Math.random() * (6 - 1)) + 1}`}></div>
                  <Link to={{
                     pathname: `/posts/${post.id}`,
                     state: {
                        id: post.id
                     }
                  }}>
                     <div className="item__details">
                        <div className="postTitle">{post.title}</div>
                        <div>{post.body} </div>
                     </div>
                  </Link>
                  <div className="actions">
                     <i
                        className={this.state.liked ? 'fas fa-thumbs-up' : 'far fa-thumbs-up'}
                        onClick={() => this.handleActions('liked',post.id)} ></i>
                     <i
                        className={this.state.disliked ? 'fas fa-thumbs-down' : 'far fa-thumbs-down'}
                        onClick={() => this.handleActions('disliked',post.id)} ></i>
                     <i
                        className={this.state.bookmarked ? 'fas fa-bookmark' : 'far fa-bookmark'}
                        onClick={() => this.handleActions('bookmarked',post.id)}></i>
                  </div>
               </div>
            );
         });
      }
      console.log('posts', posts);
      return (
         <section className="section">
            <div className="grid">
               {posts}
            </div>
         </section>
      )
   }
}

export default ListView;