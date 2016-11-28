import React from 'react';

const Messages = props =>(
  <div>
    {props.messages.map(message =>(
      <div key={message.id}>
        {message.user_name} | {message.content}
      </div>
    ))}
  </div>
);

module.exports = Messages;