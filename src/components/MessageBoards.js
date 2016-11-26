import React from 'react';

class MessageBoards extends React.Component{
  constructor(){
    super();
    
    this.state={
      messageBoards: []
    }
  }
  componentWillMount(){
    fetch('https://open-message-board-api.herokuapp.com/message_boards')
      .then(res => res.json())
      .then(json => this.setState({messageBoards: json}));
  }
  render(){
    return(
      <div>
        <h1>Message Boards</h1>
        <ul>
          {this.state.messageBoards.map((mB => (
            <li key={mB.id}>{mB.name}</li>
          )))}
        </ul>
      </div>
    )
  }
};

module.exports = MessageBoards;