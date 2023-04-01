import React, { useState } from "react";


function App() {
  const [isMousedOver, setMouseOver] = useState(false)
  const [heading, setHeading] = useState("");

  const [contact, setContact] = useState({
    fName: "",
    lName: "",
    email: ""
  });

  function handleClick(event) {
    setHeading(contact.fName + ' ' + contact.lName)
    event.preventDefault();
  }

  function handleMouseOver() {
    setMouseOver(true)
  }

  function handleMouseOut() {
    setMouseOver(false)
  }

  function updateContact(event) {
    const { value: inputText, name: inputType } = event.target;
    setContact((prevValue) => {
      return {
        ...prevValue,
        [inputType]: inputText
      }
    });
  }

  return (
    <div className="container">
      <h1>
        Hello {heading}
      </h1>
      <p>{contact.email}</p>
      <form onSubmit={handleClick}>
        <input
          name="fName"
          value={contact.fName}
          placeholder="First Name"
          onChange={updateContact}
        />
        <input
          name="lName"
          value={contact.lName}
          placeholder="Last Name"
          onChange={updateContact}
        />
        <input
          name="email"
          value = {contact.email}
          placeholder="Email"
          onChange={updateContact}
        />
        <button
          style={{backgroundColor: isMousedOver ? "black" : "white"}}
          type="submit"
          onMouseOver={handleMouseOver}
          onMouseOut={handleMouseOut}
        >
          Submit
        </button>
      </form>
  </div>
  )
}

export default App