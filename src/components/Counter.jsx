import React, { useEffect, useState } from "react";

function Counter() {
const [count, setCount] = useState(0);

  useEffect(()=>{
    console.log("component mounted")
  },[]);



  function Increment() {
    if (count < 20) setCount(count +1);
  };

  function Decrement() {
    if (count > 0) setCount(count - 1);
  };

 function Multipli(){
    if (count < 20) setCount(count +1);
  };



  function reset () {
    setCount(0);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-200">
      {/* Box */}
      <div className="text-center space-y-6 bg-white p-10 rounded-2xl shadow-lg">
        
        <h1 className="text-6xl font-bold">{count}</h1>

        <div className="flex gap-4 justify-center">
          <button
            onClick={increment}
            className="px-4 py-2 bg-green-500 text-white rounded"
          >
            Increment
          </button>

          <button
            onClick={decrement}
            className="px-4 py-2 bg-red-500 text-white rounded"
          >
            Decrement
          </button>

          <button
            onClick={reset}
            className="px-4 py-2 bg-blue-500 text-white rounded"
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
}

export default Counter;