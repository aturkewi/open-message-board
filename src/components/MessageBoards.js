import React from 'react';
import { Link } from 'react-router'

import NewBoard from './NewBoard'

// const baseUrl = 'https://open-message-board-api.herokuapp.com'
const baseUrl = 'http://localhost:3001'

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
      .then(json => this.setState({messageBoards: json}, ()=>console.log(this.state)));
  }
  
  createNewBoard(ev){
    ev.preventDefault()
    const target = ev.target
    const data = new FormData(target)

    fetch(`${baseUrl}/message_boards`, {
      method: 'post',
      body: data
    })
    .then(res => res.json())
    .then(json => {
      this.setState(
        {messageBoards: this.state.messageBoards.concat(json.results)}
      )
    })
  }
  
  render(){
    return(
      <div>
        <h1>Message Boards</h1>
        <NewBoard onSubmit={this.createNewBoard}/>
        <ul>
          {this.state.messageBoards.map((mB => (
            <li key={mB.id}>
              <Link to={{ pathname: `/channels/${mB.slug}`}}> {mB.name} </Link>
            </li>
          )))}
        </ul>
      </div>
    )
  }
};

module.exports = MessageBoards;