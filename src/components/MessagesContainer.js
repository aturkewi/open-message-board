import React from 'react';

import Messages from './Messages';
import NewMessage from './NewMessage'

// const baseUrl = 'https://open-message-board-api.herokuapp.com'
const baseUrl = 'http://localhost:3001'

class MessagesContainer extends React.Component{
  constructor(props){
    super(props);
    
    this.getMessages = this.getMessages.bind(this);
    this.createNewMessage = this.createNewMessage.bind(this);
    
    this.state = {
      messages: []
    }
  }
  
  componentWillMount(){
    this.getMessages();
  }
  
  componentWillUpdate(){
    this.getMessages();
  }
  
  getMessages(){
    const { channelSlug } = this.props.routeParams
    fetch(`${baseUrl}/message_boards/${channelSlug}/messages`)
      .then(res => res.json())
      .then(json => this.setState({messages: json}, ()=>console.log(this.state)));
  }
  
  createNewMessage(ev){
    ev.preventDefault()
    const target = ev.target
    const data = new FormData(target)
    const { channelSlug } = this.props.routeParams

    fetch(`${baseUrl}/message_boards/${channelSlug}/messages`, {
      method: 'post',
      body: data
    })
    .then(res => res.json())
    .then(json => {
      this.setState(
        {messages: this.state.messages.concat(json.results)}
      )
    })
  }
  
  render(){
    return(
      <div>
        <h2>This is the message board for {this.props.routeParams.channelSlug}</h2>
        <div>
          <Messages messages={this.state.messages}/>
          <hr />
          <NewMessage onSubmit={this.createNewMessage}/>
        </div>
      </div>
    );
  }
}

module.exports = MessagesContainer;