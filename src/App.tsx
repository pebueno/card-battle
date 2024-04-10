import type { RootState } from "./app/store";
import { useSelector, useDispatch } from "react-redux";
import { selectMonster, resetSelectedMonster } from "./reducers/cardSlice";

import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const dispatch = useDispatch();
  const selectedMonsterId = useSelector(
    (state: RootState) => state.monster.selectedMonsterId
  );

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        {selectedMonsterId ? (
          <div>
            <p>Card ID: {selectedMonsterId}</p>
            <button onClick={() => dispatch(resetSelectedMonster())}>
              Reset Card
            </button>
          </div>
        ) : (
          <div>
            <p>No card selected</p>
            <button onClick={() => dispatch(selectMonster("monster-1"))}>
              Select Card 1
            </button>
            <button onClick={() => dispatch(selectMonster("monster-2"))}>
              Select Card 2
            </button>
          </div>
        )}

        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;