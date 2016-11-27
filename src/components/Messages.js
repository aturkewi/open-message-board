import React from 'react';

const Messages = props =>(
  <div>
    {props.messages.map(message =>(
      <div>
        {message.user_name} | {message.content}
      </div>
    ))}
  </div>
);

module.exports = Messages;