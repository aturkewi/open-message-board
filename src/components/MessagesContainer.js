import React from 'react';

class MessagesContainer extends React.Component{
  render(){
    return(
      <div>
        <h2>This is the message board for {this.props.routeParams.channelName}</h2>
      </div>
    );
  }
}

module.exports = MessagesContainer;