import React from 'react';
import MessageBoards from './MessageBoards';
import Messages from './Messages';

class MessageBoardContainer extends React.Component {
  render(){
    return(
      <div className='message-board-container'>
        <div className='row'>We are in the message board conteiner!</div>
        <div className='row'>
          <div className='col-sm-4'>
            <MessageBoards />
          </div>
          <div className='col-sm-8'>
            <Messages />
          </div>
        </div>
      </div>
    )
  }
}

module.exports = MessageBoardContainer;