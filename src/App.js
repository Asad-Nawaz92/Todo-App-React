import React, { useState } from "react";
import "./App.css";
import Swal from "sweetalert2";

function App() {
  const [inputData, setInputData] = useState("");
  const [items, setItems] = useState([]);
  const [editIndex, setEditIndex] = useState(null);

  const addItem = () => {
    if (inputData.trim() === "") {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Please enter a todo!",
      });
      return;
    }

    if (editIndex !== null) {
      const updatedItems = items.map((item, index) =>
        index === editIndex ? inputData : item
      );
      setItems(updatedItems);
      setEditIndex(null);
      Swal.fire({
        icon: "success",
        title: "Success!",
        text: "Todo updated successfully!",
      });
    } else {
      setItems([...items, inputData]);
      Swal.fire({
        icon: "success",
        title: "Success!",
        text: "Todo added successfully!",
      });
    }
    setInputData("");
  };

  const deleteItem = (index) => {
    const updatedItems = items.filter((_, i) => i !== index);
    setItems(updatedItems);
    Swal.fire({
      icon: "success",
      title: "Deleted!",
      text: "Todo deleted successfully!",
    });
  };

  const updateItem = (index) => {
    setInputData(items[index]);
    setEditIndex(index);
  };

  const deleteAll = () => {
    if (items.length === 0) {
      Swal.fire({
        icon: "info",
        title: "No Todos",
        text: "There are no todos to delete!",
      });
      return;
    }
    Swal.fire({
      icon: "warning",
      title: "Are you sure?",
      text: "This action will delete all todos!",
      showCancelButton: true,
      confirmButtonColor: "#dc3545",
      confirmButtonText: "Yes, delete all!",
      cancelButtonText: "Cancel",
    }).then((result) => {
      if (result.isConfirmed) {
        setItems([]);
        Swal.fire({
          icon: "success",
          title: "Deleted!",
          text: "All todos deleted successfully!",
        });
      }
    });
  };

  return (
    <div className="app-container">
      <h1 className="app-title">To-Do App</h1>
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
