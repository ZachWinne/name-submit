import React, { useState } from "react";


function App() {
  const [isMousedOver, setMouseOver] = useState(false)
  const [heading, setHeading] = useState("");
  const [fullName, setFullName] = useState({
    fName: "",
    lName: ""
  });

  function handleClick(event) {
    setHeading(fullName.fName + ' ' + fullName.lName)
    event.preventDefault();
  }

  function handleMouseOver() {
    setMouseOver(true)
  }

  function handleMouseOut() {
    setMouseOver(false)
  }

  function updateName(event) {
    // const newName = event.target.value;
    // const nameType = event.target.name;

    //destructuring event.target
    const { value: newName, name: nameType } = event.target;

    setFullName((prevName) => {
      if (nameType === "fName") {
        return {
          fName: newName,
          lName: prevName.lName
        };
      } else if (nameType === "lName") {
        return {
          fName: prevName.fName,
          lName: newName
        };
      }
    });
  }

  return (
    <div className="container">
      <h1>
        Hello {heading}
      </h1>
    <form onSubmit={handleClick}>
    <input
          name="fName"
          //value={fullName.fName}
          placeholder="First Name"
          onChange={updateName}
        />
        <input
          name="lName"
          //value={fullName.lName}
          placeholder="Last Name"
          onChange={updateName}
        />
      <button
        style={{backgroundColor: isMousedOver ? "black" : "white"}}
        type="submit"
        onMouseOver={() => {
          handleMouseOver()
        }}
        onMouseOut={() => {
          handleMouseOut()
        }}
      >
        Submit
      </button>
    </form>
  </div>
  )
}

export default App