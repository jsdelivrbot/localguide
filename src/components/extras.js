// import _ from 'lodash';
// import React, { Component } from 'react';
// import { connect } from 'react-redux';
// import * as actions from '../actions';
// import PostItem from './post_item';

// class App extends Component {
//   state = {
//   "users": {
//       "name": "",
//       "tours": []
//   },
//   "tours": {
//       "title": "",
//       "desc": "",
//       "media": [],
//       "locations": []
//   }
// };



//   componentWillMount() {
//     this.props.fetchPosts();
//   }

//   handleTitleChange(e) {
//     this.setState({ title: e.target.value });
//   }
//   handleDescrChange(e) {
//     this.setState({ descr: e.target.value });
//   }


//   handleFormSubmit(event) {
//     event.preventDefault();

//     this.props.createPost(this.state.tours)
//   }

//   renderPosts() {
//     return _.map(this.props.tours, (tour, key) => {
//       return <PostItem key={key} tour={tour} id={key} />
//     });
//   }

//   render() {
//     return (
//       <div>
//         <h4>Create a Tour</h4>
//         <form onSubmit={this.handleFormSubmit.bind(this)} className="form-inline">
//           <div className="form-group">
//             <input
//               className="form-control"
//               placeholder="Add a post"
//               value={this.state.title}
//               onChange={this.handleTitleChange.bind(this)} />
//             <input
//               className="form-control"
//               placeholder="Add a Description"
//               value={this.state.descr}
//               onChange={this.handleDescrChange.bind(this)} />
//             <button action="submit" className="btn btn-primary">Create Post</button>
//           </div>
//         </form>
//         <ul className="list-group">
//           {this.renderPosts()}
//         </ul>
//       </div>
//     );
//   }
// }

// function mapStateToProps(state) {
//   return { posts: state.posts };
// }


// export default connect(mapStateToProps, actions)(App)
