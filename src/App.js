
import Cards from "./components/Cards";
import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  const [matched, setMatched] = useState(0);
  const totalPairs = 10;

  function increaseCount() {
    /*if (count > 5) {
      return <button className="loser">You lost!!!</button>;
    }*/
    setCount(count + 1);
  }

  function increaseMatched() {
    setMatched(matched + 1);
  }

  function handleRestart() {
    window.location.reload();
  }

  return (
    <div className="App">
      <h1> Big Bang Theory Memory Game</h1>
      <button className="restartButton" onClick={handleRestart}>  NEW GAME</button>
      <Cards increaseCount={increaseCount} increaseMatched={increaseMatched} />
      {matched === totalPairs && (<button className="winner"> WINNER WINNER CHICKEN DINNER! </button>) }
      <br />
      <h2 className="count"> {count}</h2>
      <br />
    </div>
  );
}

export default App;

/* {count === 5 && <button className="loser">YOU LOST AMIGO, LETS SEE HOW MANY MORE TRIES IT TAKES...</button>}*/ 
