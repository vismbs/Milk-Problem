import "./App.css";
import { useState } from "react";

const calculateDays = () => {
  return Math.floor(Math.random() * 10000);
};

function App() {
  const [returnDay, setReturnDay] = useState(0);
  return (
    <div>
      <header className="flex justify-center items-center bg-black h-screen">
        <div className="text-center text-white flex flex-col items-center">
          <p className="text-3xl font-mono">WHEN WILL YOUR DAD RETURN</p>
          <p className="py-4 px-8 my-4 rounded-2xl bg-gray-700 w-fit">
            {returnDay} Days
          </p>
          <button
            className="font-mono"
            onClick={() => setReturnDay(calculateDays())}
          >
            Calculate
          </button>
        </div>
      </header>
    </div>
  );
}

export default App;
