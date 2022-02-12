import React, {useState} from 'react'

function App() {
  const [count, setCount] = useState(0);

  function randomInteger(min, max) {
    let rand = min - 0.5 + Math.random() * (max - min + 1);
    return Math.round(rand);
  }

  return (
    <div className="App">
      <center><h1>Road to 100000000 clicks<br />
      Идём до 10000000 кликов</h1></center>
      <center>{count} click/кликов</center> 
      <center><button onClick={() => setCount(count + 1)}>+</button></center>
      <center><button onClick={() => setCount(count - 1)}>-</button></center>
      <center><button onClick={() => setCount(count + 100)}>+ 100</button></center>
      <center><button onClick={() => setCount(count - 100)}>- 100</button></center>
      <center><button onClick={() => setCount(count + 1000)}>+ 1000</button></center>
      <center><button onClick={() => setCount(count - 1000)}>- 1000</button></center>
      <center><button onClick={() => setCount(count + 10000)}>+ 10000</button></center>
      <center><button onClick={() => setCount(count - 10000)}>- 10000</button></center>
      <center><button onClick={() => setCount(count + 100000)}>+ 100000</button></center>
      <center><button onClick={() => setCount(count - 100000)}>- 100000</button></center>
      <center><button onClick={() => setCount(count + 1000000)}>+ 1000000</button></center>
      <center><button onClick={() => setCount(count - 1000000)}>- 1000000</button></center>
      <center><button onClick={() => setCount(count + randomInteger(1, 100000000))}>+ СЛУЧАЙНОЕ ЧИСЛО</button></center>
      <center><button onClick={() => setCount(count - randomInteger(1, 100000000))}>- СЛУЧАЙНОЕ ЧИСЛО</button></center>
      <center><button onClick={() => setCount(0)}>ОБНУЛИТЬ СЧЁТЧИК</button></center>
    </div>
  );
}

export default App;
