import React, { useState, useEffect } from "react";

export default ({ children, text, showTime = 1000 }) => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (show) {
      setTimeout(() => setShow(false), showTime);
    }
  }, [show, showTime]);

  return (
    <div class="tooltip">
      {children(setShow)}
      {show && <span className="tooltiptext">{text}</span>}
    </div>
  );
};
