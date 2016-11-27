import React from 'react';

const NewMessage = props =>(
  <div>
    <form onSubmit={props.onSubmit}>
      <input type='text' name="message[user_name]" />
      <input type='text' name="message[content]"/>
      <input type='submit' value='Create' />
    </form>
  </div>
)

module.exports = NewMessage;