import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/app';
import PostsIndex from './components/posts_index';
import PostsNew from './components/posts_new.js';
import PostsShow from './components/posts_show.js';
import PlanApp from './components/planApp';


export default (
  <Route path="/" component={App} />
  	<Route path="/tripplan" component={PlanApp} />
    <IndexRoute component={PostsIndex} />
    <Route path="posts/new" component={PostsNew} />
    <Route path="posts/:id" component={PostsShow} />
    </Route>
);
