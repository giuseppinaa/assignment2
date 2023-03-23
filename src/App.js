
import Cards from "./components/Cards";
import {useState} from 'react';

function App() {
  const [count, setCount] = useState(0);

  function increaseCount (){
    setCount(count+1);
  }
  
  function resetCount(){
    setCount(0);
  }

  return (
    <div className="App">
      <h1> Big Bang Theory Memory Game</h1>
      <button className = "restartButton">NEW GAME</button> 
      <Cards increaseCount={increaseCount} />
      <br></br>
      <h2 className="count"> {count}</h2> <br></br>

    </div>

  
  );
}

export default App;

/*<label className = "winner">YOU WON</label> 
<br></br>
<br></br>
<br></br>
<label className = "loser">YOU LOST</label>*/
