import React, {useState, useEffect} from 'react'

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

import axios from 'axios';

function App() {
  let [count, setCount] = useState(0);

  let test = count

  const prices = {
    "Rose": 100,
    "Finger Heart": 1000
  }

  if(test >= 1000000000) {
    test = 'You win!'
  }

  function randomInteger(min, max) {
    let rand = min - 0.5 + Math.random() * (max - min + 1);
    return Math.round(rand);
  }


  useEffect(() => {
        setInterval(async() => {
          let fetch = await axios.get('http://localhost:5000/gifts')
          for(var i = 0; i < fetch.data.length; i++) {
            console.log(fetch.data[i].extendedGiftInfo.name)
            if(fetch.data[i].extendedGiftInfo.name != ('Rose' || 'Finger Heart')) return;
            setCount((prevCount) => prevCount + prices[`${fetch.data[i].extendedGiftInfo.name}`]);
          }
        }, 1000);
  }, []);


  return (
    <div className="container">
      <br/>
      <br/>
      <div className="text">Road to 1000000000 clicks</div>
      <div className="text">Дорога до 1000000000 кликов</div>
      <div className="count">{test}</div>
      <div className="button__content">
        <button className='button__content-btn' onClick={() => setCount(count + 100)}>
          <img className="button__contnet-img" src={photo}/>
          <div className="button__content-text">+ 100</div>
        </button>
        <button className='button__content-btn' onClick={() => setCount(count + 1000)}>
          <img className="button__contnet-img" src={photo3}/>
          <div className="button__content-text">+ 1000</div>
        </button>
        <button className='button__content-btn' onClick={() => setCount(count + 10000)}>
          <img className="button__contnet-img" src={photo5}/>
          <div className="button__content-text">+ 10000</div>
        </button>
        <button className='button__content-btn' onClick={() => setCount(count + 100000)}>
          <img className="button__contnet-img" src={photo7}/>
          <div className="button__content-text">+ 100000</div>
        </button>
        <button className='button__content-btn' onClick={() => setCount(count + 1000000)}>
          <img className="button__contnet-img" src={photo9}/>
          <div className="button__content-text">+ 1000000</div>
        </button>
      </div> 
      <div className="button__content">
        <button className='button__content-btn' onClick={() => setCount(count - 100)}>
        <img className="button__contnet-img" src={photo2}/>
          <div className="button__content-text">- 100</div>
        </button>
        <button className='button__content-btn' onClick={() => setCount(count - 1000)}>
          <img className="button__contnet-img" src={photo4}/>
          <div className="button__content-text">- 1000</div>
        </button>
        <button className='button__content-btn' onClick={() => setCount(count - 10000)}>
          <img className="button__contnet-img" src={photo6}/>
          <div className="button__content-text">- 10000</div>
        </button>
        <button className='button__content-btn' onClick={() => setCount(count - 100000)}>
          <img className="button__contnet-img" src={photo8}/>
          <div className="button__content-text">- 100000</div>
        </button>
        <button className='button__content-btn' onClick={() => setCount(count - 1000000)}>
          <img className="button__contnet-img" src={photo13}/>
          <div className="button__content-text">- 1000000</div>
        </button>
      </div> 


      <div className='button__random'>
        <button className='button__random-btn' onClick={() => setCount(count + randomInteger(1, 10000000))}>
          <img className="button__contnet-img" src={photo11}/>
          <div className="button__content-text">+ СЛУЧАЙНОЕ ЧИСЛО</div>
        </button>
        <button className='button__random-btn' onClick={() => setCount(count - randomInteger(1, 10000000))}>
          <img className="button__contnet-img" src={photo10}/>
          <div className="button__content-text">- СЛУЧАЙНОЕ ЧИСЛО</div>
        </button>
        <button className='button__random-btn' onClick={() => setCount(0)}>
          <img className="button__contnet-img" src={photo12}/>
          <div className="button__content-text">ОБНУЛИТЬ СЧЁТЧИК</div>
        </button>
      </div>

      <div className="button_plus-minus">
        <button className="button_plus-minus--btn" onClick={() => setCount(count + 1)}>+</button>
        <button className="button_plus-minus--btn" onClick={() => setCount(count - 1)}>-</button>
      </div>
      <div className="text">Подписка за подарок!</div>
    </div>
  );
}

export default App;
