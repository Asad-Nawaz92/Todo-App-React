import React from "react";

const Item = ({ element, index, updateItem, deleteItem }) => {
  return (
    <div className="item">
      <h2>{element}</h2>
      <button onClick={() => updateItem(index)} className="update-button">
        Update
      </button>
      <button onClick={() => deleteItem(index)} className="delete-button">
        Delete
      </button>
    </div>
  );
};

export default Item;
