import { useState, useEffect } from "react";
import { FaPlay, FaStop, FaRedo } from "react-icons/fa";

export default function App() {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let timer;
    if (isRunning) {
      timer = setInterval(() => setTime((prev) => prev + 10), 10);
    } else {
      clearInterval(timer);
    }
    return () => clearInterval(timer);
  }, [isRunning]);

  const formatTime = (ms) => {
    const minutes = String(Math.floor(ms / 60000)).padStart(2, "0");
    const seconds = String(Math.floor((ms % 60000) / 1000)).padStart(2, "0");
    const centiseconds = String(Math.floor((ms % 1000) / 10)).padStart(2, "0");
    return `${minutes}:${seconds}:${centiseconds}`;
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-gray-900 to-black text-white">
      <div className="bg-zinc-300 bg-opacity-20 backdrop-blur-lg md:p-12 p-4 rounded-3xl shadow-2xl border border-gray-300/30 text-center md:w-[500px] w-[95%] relative">
        <div className="absolute top-2 right-2 text-gray-400 text-sm">⏱️</div>
        <h1 className="text-4xl font-bold mb-6 tracking-widest text-black">Stopwatch</h1>
        <div className="text-4xl font-mono font-semibold bg-black bg-opacity-60 p-6 rounded-2xl shadow-inner mb-8 border border-gray-500 relative">
          {formatTime(time)}
          <div className="absolute top-2 right-3 text-xs text-gray-400">Live</div>
        </div>
        <div className="flex justify-center space-x-6">
          <button
            onClick={() => setIsRunning(true)}
            className="md:text-xl text-sm rounded-lg bg-green-500 hover:bg-green-600 active:scale-95 
            transition-all font-bold shadow-lg flex items-center md:space-x-2 md:p-4 md:px-6 p-2 space-x-1"
          >
            <FaPlay /> <span>Start</span>
          </button>
          <button
            onClick={() => setIsRunning(false)}
            className=" md:text-xl text-sm rounded-lg bg-red-500 hover:bg-red-600 active:scale-95 transition-all  font-bold shadow-lg flex items-center md:space-x-2 md:p-4 md:px-6 p-2 space-x-1"
          >
            <FaStop /> <span>Stop</span>
          </button>
          <button
            onClick={() => { setTime(0); setIsRunning(false); }}
            className=" md:text-xl text-sm rounded-lg bg-blue-500 hover:bg-blue-600 active:scale-95 
            transition-all font-bold shadow-lg flex items-center md:space-x-2 md:p-4 md:px-6 p-2 space-x-1"
          >
            <FaRedo /> <span>Reset</span>
          </button>
        </div>
      </div>
    </div>
  );
}