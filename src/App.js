import React, { useState } from "react";
import "./App.css";
import Swal from "sweetalert2";
import Header from "./components/Header";
import Input from "./components/Input";
import ItemList from "./components/ItemList";

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
    } else {
      setItems([...items, inputData]);
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
      <Header />
      <Input
        inputData={inputData}
        setInputData={setInputData}
        addItem={addItem}
        editIndex={editIndex}
        deleteAll={deleteAll}
      />
      <ItemList items={items} updateItem={updateItem} deleteItem={deleteItem} />
    </div>
  );
}

export default App;
