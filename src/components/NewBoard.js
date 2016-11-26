import React from 'react';

const NewBoard = props =>(
  <div>
    <h4>Create New Message Boards</h4>
    <form onSubmit={props.onSubmit}>
      <input type='text' name="message_board[name]"/>
      <input type='submit' value='Create' />
    </form>
    <hr />
  </div>
)

module.exports = NewBoard;