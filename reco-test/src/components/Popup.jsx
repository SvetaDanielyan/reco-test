import React, { useState } from "react";

const Popup = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Sending data to server:", name, description);
    setIsOpen(false);
  };

  return (
    <div>
      <button onClick={() => setIsOpen(!isOpen)}>Create New</button>
      {isOpen && (
        <div
          style={{
            position: "fixed",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            background: "white",
            padding: "20px",
            border: "1px solid #ddd",
          }}
        >
          <h3>{props.title}</h3>
          <form onSubmit={handleSubmit}>
            <label>
              Name:
              <input
                type="text"
                value={name}
                onChange={(event) => setName(event.target.value)}
              />
            </label>
            <br />
            <label>
              Description:
              <input
                type="text"
                value={description}
                onChange={(event) => setDescription(event.target.value)}
              />
            </label>
            <br />
            <button type="submit">Save</button>
            <button onClick={() => setIsOpen(!isOpen)}>Close</button>
          </form>
        </div>
      )}
    </div>
  );
};

export default Popup;
