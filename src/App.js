import React, { useState } from "react";
import "./App.css";

function App() {
  const [inputData, setInputData] = useState("");
  const [items, setItems] = useState([]);

  const addItem = () => {
    if (inputData.trim() !== "") {
      setItems([...items, inputData]);
      setInputData("");
    }
  };

  const deleteAll = () => {
    setItems([]);
  };

  return (
    <div className="app-container">
      <h1 className="app-title">Todo App</h1>
      <div className="input-container">
        <input
          value={inputData}
          onChange={(e) => setInputData(e.target.value)}
          type="text"
          placeholder="Enter your todo"
          className="input-field"
        />
        <button onClick={addItem} className="add-button">
          Add Item
        </button>
        <button onClick={deleteAll} className="delete-button">
          Delete All
        </button>
      </div>
      <div className="items-container">
        {items.map((element, index) => (
          <div key={index} className="item">
            <h2>{element}</h2>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
