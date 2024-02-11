import "./App.css";
import { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.css";

function App() {
  const [isRunning, setIsRunning] = useState(false);
  const [elapsedTime, setElapsedTime] = useState(0);

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
    setElapsedTime(0);
  };

  useEffect(() => {
    const ac = new AbortController();
    let IntervalId;

    if (isRunning) {
      IntervalId = setInterval(() => {
        setElapsedTime((prev) => prev + 1);
      }, 1000);
    } else {
      clearInterval(IntervalId);
    }
    return () => {
      clearInterval(IntervalId);
      ac.abort();
    };
  }, [isRunning]);

  return (
    <div className="App">
      <h4>Stopwatch</h4>
      <p>Time: {isRunning ? formatTime(elapsedTime) : "0:00"}</p>
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
