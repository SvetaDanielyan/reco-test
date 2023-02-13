import React, { useState } from "react";

const Popup = () => {
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
          <h3>Create new process</h3>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              value={name}
              onChange={(event) => setName(event.target.value)}
              placeholder="Process Name (mandatory)"
              style={{ width: "200px" }}
            />
            <br />
            <input
              type="text"
              value={description}
              onChange={(event) => setDescription(event.target.value)}
              placeholder="Process Description (Optional)"
              style={{ width: "200px", height: "150px", marginTop: "10px" }}
            />
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
