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
      if (inputType === "fName") {
        return {
          fName: inputText,
          lName: prevValue.lName,
          email: prevValue.email
        };
      } else if (inputType === "lName") {
        return {
          fName: prevValue.fName,
          lName: inputText,
          email: prevValue.email
        };
      }
      if (inputType === "email") {
        return {
          fName: prevValue.fName,
          lName: prevValue.lName,
          email: inputText
        };
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
          //value={fullName.fName}
          placeholder="First Name"
          onChange={updateContact}
        />
        <input
          name="lName"
          //value={fullName.lName}
          placeholder="Last Name"
          onChange={updateContact}
        />
        <input
          // value = "email"
          name="email"
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