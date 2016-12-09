import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from 'container/App';
import HomePage from 'components/HomePage';
import MediaGalleryPage from 'container/MediaGalleryPage';
import ComponentDemoPage from 'container/ComponentDemoPage';
import javascript30 from 'container/javascript30/javascript30';

export default (
  <Route path="/" component={App}> 
    <IndexRoute component={HomePage} />
    <Route path="library" component={MediaGalleryPage} />
    <Route path="components" component={ComponentDemoPage} />
    <Route path="javascript30" component={javascript30} />
  </Route>
);