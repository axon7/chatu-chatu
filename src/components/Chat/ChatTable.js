import React from "react";
import uuid from "uuid";
export default function ChatTable(props) {
  console.log(props);
  return (
    <div>
      <ul>
        {props.messages.map(message => (
          <li key={uuid.v4()}>
            {message.name} : {message.message}
          </li>
        ))}
      </ul>
    </div>
  );
}
