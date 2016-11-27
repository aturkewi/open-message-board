import React from 'react'
import { Route, IndexRoute } from 'react-router'

// Components
import App from './components/App'
import Home from './components/Home'
import MessageBoardContainer from './components/MessageBoardContainer'
import MessagesContainer from './components/MessagesContainer'

export default (
  <Route 
    path="/"
    // App really just sets initial state type of stuff
    component={App}>
    <IndexRoute
      component={Home} />
    <Route 
      path="/channels"
      component={MessageBoardContainer}>
      <Route 
        path="/channels/:channelSlug"
        component={MessagesContainer}/>
    </Route>
  </Route>
)