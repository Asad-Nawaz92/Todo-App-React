import React from "react";
import Item from "./Item";

const ItemList = ({ items, updateItem, deleteItem }) => {
  return (
    <div className="items-container">
      {items.map((element, index) => (
        <Item
          key={index}
          element={element}
          index={index}
          updateItem={updateItem}
          deleteItem={deleteItem}
        />
      ))}
    </div>
  );
};

export default ItemList;
