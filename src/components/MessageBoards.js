import React from 'react';
import { Link } from 'react-router'

// import Messages from './Messages';
import NewBoard from './NewBoard'

const baseUrl = 'https://open-message-board-api.herokuapp.com'

class MessageBoards extends React.Component{
  constructor(){
    super();
    
    this.createNewBoard = this.createNewBoard.bind(this);
    
    this.state={
      messageBoards: []
    }
  }
  
  componentWillMount(){
    fetch(`${baseUrl}/message_boards`)
      .then(res => res.json())
      .then(json => this.setState({messageBoards: json}));
  }
  
  createNewBoard(ev){
    ev.preventDefault()
    const newName = ev.target.elements[0].value;
    const data = new FormData();
    const payLoad = {name: newName}
    data.append( "message_board", JSON.stringify( payLoad ) );

    fetch(`${baseUrl}/message_boards`, {
      method: 'post',
      body: data
    })
    .then(res => res.json())
    .then(json => console.log(json))
  }
  
  render(){
    return(
      <div>
        <h1>Message Boards</h1>
        <NewBoard onSubmit={this.createNewBoard}/>
        <ul>
          {this.state.messageBoards.map((mB => (
            <li key={mB.id}>
              <Link to={{ pathname: `/channels/${mB.name}` }}>{mB.name}</Link>
            </li>
          )))}
        </ul>
      </div>
    )
  }
};

module.exports = MessageBoards;