import React, {useState} from 'react'
import photo from './assets/1.png';
import photo2 from './assets/2.png';
import photo3 from './assets/3.png';
import photo4 from './assets/4.png';
import photo5 from './assets/5.png';
import photo6 from './assets/6.png';
import photo7 from './assets/7.png';
import photo8 from './assets/8.png';
import photo9 from './assets/9.png';
import photo10 from './assets/10.png';
import photo11 from './assets/11.png';
import photo12 from './assets/12.png';
import photo13 from './assets/13.png';

function App() {
  const [count, setCount] = useState(0);

  function randomInteger(min, max) {
    let rand = min - 0.5 + Math.random() * (max - min + 1);
    return Math.round(rand);
  }

  return (
    <div className="container">
      <div class="text">Road to 1000000000 clicks</div>
      <div class="text">Дорога до 1000000000 кликов</div>
      <div class="count">{count}</div>
      <div className="button__content">
        <button className='button__content-btn' onClick={() => setCount(count + 100)}>
          <img class="button__contnet-img" src={photo}/>
          <div class="button__content-text">+ 100</div>
        </button>
        <button className='button__content-btn' onClick={() => setCount(count + 1000)}>
          <img class="button__contnet-img" src={photo3}/>
          <div class="button__content-text">+ 1000</div>
        </button>
        <button className='button__content-btn' onClick={() => setCount(count + 10000)}>
          <img class="button__contnet-img" src={photo5}/>
          <div class="button__content-text">+ 10000</div>
        </button>
        <button className='button__content-btn' onClick={() => setCount(count + 100000)}>
          <img class="button__contnet-img" src={photo7}/>
          <div class="button__content-text">+ 100000</div>
        </button>
        <button className='button__content-btn' onClick={() => setCount(count + 1000000)}>
          <img class="button__contnet-img" src={photo9}/>
          <div class="button__content-text">+ 1000000</div>
        </button>
      </div> 
      <div className="button__content">
        <button className='button__content-btn' onClick={() => setCount(count - 100)}>
        <img class="button__contnet-img" src={photo2}/>
          <div class="button__content-text">- 100</div>
        </button>
        <button className='button__content-btn' onClick={() => setCount(count - 1000)}>
          <img class="button__contnet-img" src={photo4}/>
          <div class="button__content-text">- 1000</div>
        </button>
        <button className='button__content-btn' onClick={() => setCount(count - 10000)}>
          <img class="button__contnet-img" src={photo6}/>
          <div class="button__content-text">- 10000</div>
        </button>
        <button className='button__content-btn' onClick={() => setCount(count - 100000)}>
          <img class="button__contnet-img" src={photo8}/>
          <div class="button__content-text">- 100000</div>
        </button>
        <button className='button__content-btn' onClick={() => setCount(count - 1000000)}>
          <img class="button__contnet-img" src={photo13}/>
          <div class="button__content-text">- 1000000</div>
        </button>
      </div> 


      <div className='button__random'>
        <button className='button__random-btn' onClick={() => setCount(count + randomInteger(1, 10000000))}>
          <img class="button__contnet-img" src={photo11}/>
          <div class="button__content-text">+ СЛУЧАЙНОЕ ЧИСЛО</div>
        </button>
        <button className='button__random-btn' onClick={() => setCount(count - randomInteger(1, 10000000))}>
          <img class="button__contnet-img" src={photo10}/>
          <div class="button__content-text">- СЛУЧАЙНОЕ ЧИСЛО</div>
        </button>
        <button className='button__random-btn' onClick={() => setCount(0)}>
          <img class="button__contnet-img" src={photo12}/>
          <div class="button__content-text">ОБНУЛИТЬ СЧЁТЧИК</div>
        </button>
      </div>

      <div className="button_plus-minus">
        <button className="button_plus-minus--btn" onClick={() => setCount(count + 1)}>+</button>
        <button className="button_plus-minus--btn" onClick={() => setCount(count - 1)}>-</button>
      </div>
    </div>
  );
}

export default App;
