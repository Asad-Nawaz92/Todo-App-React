import { useState } from "react";

function App() {
  const [inputData, setInputData] = useState("");
  const [items, setItems] = useState([]);

  const addItem = () => {
    setItems([...items, inputData]);
  }

  const deleteAll = () => {
    setItems([])
  }

  return (
    <div>
      <input
        value={inputData}
        onChange={(e) => setInputData(e.target.value)}
        type="text"
        placeholder="Enter your todo"
      />
      <button onClick={addItem} >Add Item</button>
      <button onClick={deleteAll} >Delete All</button>

      <div>
        {
          items.map((element, index)=>{
            return (
              <h1>{element}</h1>
            )
          })
        }
      </div>

    </div>

  );
}

export default App;
