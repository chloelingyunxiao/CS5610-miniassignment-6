import React, { useState } from "react";
import { Box } from "./components/Box";
import "./App.css";
import { BoxesContext } from "./contextAndHooks/BoxesContext";

function App() {
  const [boxesState, setBoxesState] = useState([false, false, false, false]);

  // update status of all boxes
  const handleToggle = (index, isTurnOn) => {
    const newBoxesState = [...boxesState];
    newBoxesState[index] = isTurnOn;
    setBoxesState(newBoxesState);
  };

  const totalCount = boxesState.filter((state) => state).length;

  const context = { boxesState, handleToggle };

  return (
    <BoxesContext.Provider value={context}>
      <div className="window">
        <div>
          <b>Count: </b>
          {totalCount}
        </div>
        <div className="boxes-container">
          {boxesState.map((_, idx) => (
            <Box key={idx} index={idx}></Box>
          ))}
        </div>
      </div>
    </BoxesContext.Provider>
  );
}

export default App;
