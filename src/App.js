import React from 'react';

import { Home, PlayNow, News, Guides } from './components';
import { Route } from 'react-router-dom';

const App = () => (
  <div>
    <Route exact path="/" component={ Home }/>
    <Route exact path="/news" component={ News }/>
    <Route path="/guides" component={ Guides }/>
    <Route path="/playnow" component={ PlayNow }/>
  </div>
);
export default App;