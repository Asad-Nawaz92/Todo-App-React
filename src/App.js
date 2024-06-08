import React, { useState } from "react";
import "./App.css";

function App() {
  const [inputData, setInputData] = useState("");
  const [items, setItems] = useState([]);
  const [editIndex, setEditIndex] = useState(null);

  const addItem = () => {
    if (inputData.trim() !== "") {
      if (editIndex !== null) {
        const updatedItems = items.map((item, index) =>
          index === editIndex ? inputData : item
        );
        setItems(updatedItems);
        setEditIndex(null);
      } else {
        setItems([...items, inputData]);
      }
      setInputData("");
    }
  };

  const deleteItem = (index) => {
    const updatedItems = items.filter((_, i) => i !== index);
    setItems(updatedItems);
  };

  const updateItem = (index) => {
    setInputData(items[index]);
    setEditIndex(index);
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
          {editIndex !== null ? "Update Item" : "Add Item"}
        </button>
        <button onClick={deleteAll} className="delete-button">
          Delete All
        </button>
      </div>
      <div className="items-container">
        {items.map((element, index) => (
          <div key={index} className="item">
            <h2>{element}</h2>
            <button onClick={() => updateItem(index)} className="update-button">
              Update
            </button>
            <button onClick={() => deleteItem(index)} className="delete-button">
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
