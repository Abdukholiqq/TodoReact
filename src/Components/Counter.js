import React, { useState } from "react";

 
function Counterr() {
  const [counter, setCounter] = useState(0);
  function inCreaseCounter() {
    setCounter(counter + 1);
  }

  function reset() {
    setCounter(0);
  }

  return (
    <div className="App text-primary card p-2 bg-success">
      <h1 className="bg-white rounded-2">{counter}</h1>
      <div   className="d-flex gap-1 mt-4">
        <button
          className="p-2 ms-1 bg-primary btn text-warning "
          onClick={inCreaseCounter}>
          Add
        </button>
        <button className="btn bg-info text-danger " onClick={reset}>
          Del 
        </button>
      </div>
    </div>
  );
}  
export default Counterr;