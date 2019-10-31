import React, { useEffect, useState } from "react";

// Styles
import "./Timer.scss";

function Timer({ seconds, isFinished }) {
  const [count, setCount] = useState(+seconds);

  useEffect(() => {
    if (count > 0) {
      let seconds = setInterval(() => {
        setCount(count - 1);
      }, 1000);
      return () => clearInterval(seconds);
    } else {
      isFinished(count);
    }
  });

  return <small className="countdown">{count} saniye sonra yenilenecek.</small>;
}

export default Timer;
