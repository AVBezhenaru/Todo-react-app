import React, { useState, useEffect } from 'react';

const Timer = (props) => {
  let { timer, id, updateItemTimer } = props;
  const [time, setTime] = useState(timer);
  const [isActive, setIsActive] = useState(false);

  const handleStart = () => {
    setIsActive(true);
  };

  const handleStop = () => {
    setIsActive(false);
    updateItemTimer(time, id);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      isActive && setTime((time) => time + 1);
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [isActive]);

  const m = Math.floor(time / 60)
    .toString()
    .padStart(2, '0');
  const s = (time - m * 60).toString().padStart(2, '0');

  return (
    <span className="description">
      <button className="icon icon-play" onClick={handleStart} />
      <button className="icon icon-pause" onClick={handleStop} />
      {m} : {s}
    </span>
  );
};

export default Timer;
