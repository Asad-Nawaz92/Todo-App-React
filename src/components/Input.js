import React from "react";

const Input = ({ inputData, setInputData, addItem, editIndex, deleteAll }) => {
  return (
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
  );
};

export default Input;
