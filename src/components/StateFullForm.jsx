import React, { useState } from "react";

const StateFullForm = () => {
  const [name, setName] = useState(null);
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name, email, password);
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
    // console.log(e.target.value)
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input 
        onChange={handleNameChange} 
        type="text" 
        name="name"
        placeholder="Name"
        required />

        <br />
        <input
          onChange={handleEmailChange}
          placeholder="Email"
          type="email"
          name="email"
          id=""
          required
        />
        <br />
        <input
          onChange={handlePasswordChange}
          placeholder="Password"
          type="text"
          name="number"
          id=""
          required
        />
        <br />
        <button>submit</button>
      </form>
    </div>
  );
};

export default StateFullForm;
