import React, { useState } from "react";

function Timerr() {
  const [coun, setCounter] = useState(571);
  function inCreaseCounter() {
    setCounter(coun - 1);
  }
  //  if orqali vaqtni to'xtatish
  // if (coun != 0) {
  //   setTimeout(() => {
  //     setCounter(coun - 1);
  //   }, 1000);
  // }

  // clearTimeOut orqali vaqtni to'xtatish
  const timer = setTimeout(() => {
    setCounter(coun - 1);
  }, 1000);

  if (coun === 0) {
    clearTimeout(timer);
  }
  return (
    <div className="App w-50">
      <h1>Timer</h1>
      <h1 className="text-success ">
        {coun === 0 ? "OLG'A !!!  Yengmaguningcha Yengilma! " : coun}{" "}
      </h1>
    </div>
  );
}
export default Timerr;