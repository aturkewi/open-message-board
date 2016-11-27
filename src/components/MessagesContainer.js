import React from 'react';

import Messages from './Messages';
import NewMessage from './NewMessage'

class MessagesContainer extends React.Component{
  constructor(){
    super();
    
    this.state = {
      messages: []
    }
  }
  componentWillMount(){
    
  }
  render(){
    return(
      <div>
        <h2>This is the message board for {this.props.routeParams.channelSlug}</h2>
        
      </div>
    );
  }
}

module.exports = MessagesContainer;