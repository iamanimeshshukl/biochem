import React, { useState, useEffect } from 'react';

function App() {
  // Set the target date (you can modify this to any future date)
  const targetDate = new Date('2025-03-29T00:00:00').getTime();

  // Initialize state to keep track of time remaining
  const [timeLeft, setTimeLeft] = useState(targetDate - Date.now());

  // Update the timer every second
  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(targetDate - Date.now());
    }, 1000);

    return () => clearInterval(interval); // Cleanup the interval
  }, [targetDate]);

  // Calculate days, hours, minutes, and seconds
  const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

  // Handle the countdown completion
  if (timeLeft <= 0) {
    return (
   <div></div>
    );
  }

  return (
    <div className=" text-white">
      <div className="p-10 text-center">
        <h1 className="text-3xl font-semibold mb-6">Hurry's Up !!!</h1>
        <div className="flex space-x-6 justify-center">
          <div className="text-center">
            <p className="text-5xl font-bold">{days}</p>
            <p className="text-lg">Days</p>
          </div>
          <div className="text-center">
            <p className="text-5xl font-bold">{hours}</p>
            <p className="text-lg">Hours</p>
          </div>
          <div className="text-center">
            <p className="text-5xl font-bold">{minutes}</p>
            <p className="text-lg">Minutes</p>
          </div>
          <div className="text-center">
            <p className="text-5xl font-bold">{seconds}</p>
            <p className="text-lg">Seconds</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
