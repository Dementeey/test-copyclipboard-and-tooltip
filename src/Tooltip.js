import React, { useState, useEffect } from "react";

export default ({ children, text, showTime = 1500 }) => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (show) {
      setTimeout(() => setShow(false), showTime);
    }
  }, [show, showTime]);

  return (
    <div class="tooltip" onMouseLeave={() => setShow(false)}>
      {children(setShow)}
      {show && <span class="tooltiptext">{text}</span>}
    </div>
  );
};
