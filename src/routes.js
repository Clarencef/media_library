import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './container/App';
import HomePage from './components/HomePage';
import MediaGalleryPage from './container/MediaGalleryPage';
import ComponentDemoPage from './container/ComponentDemoPage';

export default (
  <Route path="/" component={App}> 
    <IndexRoute component={HomePage} />
    <Route path="library" component={MediaGalleryPage} />
    <Route path="components" component={ComponentDemoPage} />
  </Route>
);