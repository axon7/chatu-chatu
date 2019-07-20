import React, { useState } from "react";

export default function LoginForm() {
  const [name, setName] = useState("");

  return (
    <div>
      <h1>Enter your name:</h1>
      <form>
        <input
          type='text'
          value={name}
          placeholder='Your chat name'
          onChange={e => setName(e.target.value)}
        />
      </form>
    </div>
  );
}
