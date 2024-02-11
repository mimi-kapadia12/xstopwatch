import "./App.css";
import { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.css";

function App() {
  const [isRunning, setIsRunning] = useState(false);
  const [elaspedTime, setElaspedTime] = useState(0);
  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds < 10 ? "0" : ""}${remainingSeconds}`;
  };

  const toggleTime = () => {
    setIsRunning((prev) => !prev);
  };

  const reset = () => {
    setIsRunning(false);
    setElaspedTime(0);
  };

  useEffect(() => {
    let IntervalId;

    if (isRunning) {
      IntervalId = setInterval(() => {
        setElaspedTime((prev) => prev + 1);
      }, 1000);
    } else {
      clearInterval(IntervalId);
    }
    return () => clearInterval(IntervalId);
  }, [isRunning]);

  return (
    <div className="App">
      <h3>Stopwatch</h3>
      <p>Time : {formatTime(elaspedTime)}</p>
      <button onClick={toggleTime} className="btn btn-sm btn-primary m-1">
        {isRunning ? "Stop" : "Start"}
      </button>
      <button onClick={reset} className="btn btn-sm btn-primary m-1">
        Reset
      </button>
    </div>
  );
}

export default App;
