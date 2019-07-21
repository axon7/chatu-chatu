import React, { useState } from "react";

export default function ChatName(props) {
  const [name, setName] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    props.handleSubmitName(name);
  };

  return (
    <div>
      <h1>Enter your name:</h1>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          value={name}
          placeholder='Your username'
          onChange={e => setName(e.target.value)}
        />
        <button type='submit'>Join chat</button>
      </form>
    </div>
  );
}
