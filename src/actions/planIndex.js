import _ from 'lodash';
import {
  FETCH_POSTS,
  DELETE_POST,
  CREATE_POST,
} from './types';
import * as firebase from 'firebase';


// Initialize Firebase
  var config = {
    apiKey: "AIzaSyBZkUnC5m1mxIXbQ7WxKBMB8pbSmuv5dMw",
    authDomain: "localguide-2d198.firebaseapp.com",
    databaseURL: "https://localguide-2d198.firebaseio.com",
    projectId: "localguide-2d198",
    storageBucket: "localguide-2d198.appspot.com",
    messagingSenderId: "59476475358"
  };
// firebase.initializeApp(config);

// const db = new firebase.database();
// const ref = db.ref().child("data");


const Posts = new Firebase('https://localguide-2d198.firebaseio.com/TripPlan');

export function fetchPosts() {
  return dispatch => {
    Posts.on('value', snapshot => {
      dispatch({
        type: FETCH_POSTS,
        payload: snapshot.val()
      });
    });
  };
}

export function createPost(post) {
  return dispatch => Posts.push(post);

}

export function deletePost(key) {
  return dispatch => Posts.child(key).remove();
}
// export function updatePost(key) {
//   return dispatch => Posts.child(key).update();
// }

// export function getPosts(post) {
//   return dispatch => Posts.once("value", function (snapshot){
//           const posts = [];
//           snapshot.forEach(function(data){
//             const post = {
//               id: data.val().id,
//               text: data.val().text
//             }
//             posts.push(post);
//             that.setState({posts: posts});
//           });
//         });

// }








