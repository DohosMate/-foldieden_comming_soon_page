import './App.css';
import Clock from './components/Clock';
import React, { useEffect, useState } from 'react';

function App() {
  const [timerDays, setTimerDays] = useState();
  const [timerHours, setTimerHours] = useState();
  const [timerMinutes, setTimerMinutes] = useState();
  const [timerSeconds, setTimerSeconds] = useState();

  let interval;

  const startTimer = () => {
    const countDownDate = new Date("Dec 31, 2023").getTime();
    interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = countDownDate - now;
      const days = Math.floor((distance / (24 * 60 * 60 * 1000)));
      const hours = Math.floor((distance % (24 * 60 * 60 * 1000)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (60 * 60 * 1000)) / (1000 * 60));
      const seconds = Math.floor((distance % (60 * 1000)) / 1000);

      if (distance < 0) {
        //Stop Timer
        clearInterval(interval.current);
      } else {
        //Update Timer
        setTimerDays(days);
        setTimerHours(hours);
        setTimerMinutes(minutes);
        setTimerSeconds(seconds);
      }
    })
  }

  useEffect(() => {
    startTimer();
  })

  return (
    <div className="App">
      <div className='welcome-container'>
        <p className="welcome">Üdvözlünk</p>
        <p className="welcome">a</p>
        <p className="welcome_foldi_eden">Földi Éden</p>
        <p className="welcome">Webáruházban!</p>
      </div>
      <Clock
        timerDays={timerDays}
        timerHours={timerHours}
        timerMinutes={timerMinutes}
        timerSeconds={timerSeconds}
      />
      <footer>
        <p>Created By: 3BM Corporation</p>
      </footer>
    </div>
    
  );
}

export default App;
