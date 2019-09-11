import React, { useRef, useState, useEffect } from "react";

import "./styles.css";
import Tooltip from "./Tooltip";

const copyToClipboard = (value, setShow) => {
  const selBox = document.createElement("textarea");

  selBox.style.position = "fixed";
  selBox.style.left = "0";
  selBox.style.top = "0";
  selBox.style.opacity = "0";
  selBox.style.width = "1px";
  selBox.style.height = "1px";
  selBox.value = value;
  document.body.appendChild(selBox);
  selBox.focus();
  selBox.select();
  document.execCommand("copy");
  document.body.removeChild(selBox);
  setShow(true);
};

const dottedAndCopy = ({ text = "", width = 100 }) => {
  const wrapperRef = useRef(null);
  const dataRef = useRef(null);
  const [isDoted, setIsDoted] = useState(false);

  useEffect(() => {
    if (dataRef.current) {
      console.log("dataRef", dataRef.current.offsetWidth);
      console.log(width < dataRef.current.offsetWidth);
      setIsDoted(width < dataRef.current.offsetWidth);
    }
  }, [width, dataRef]);

  return (
    <>
      <Tooltip text="Copied!">
        {setShow => (
          <div
            style={{ width, maxWidth: width }}
            className="wrapper"
            ref={wrapperRef}
          >
            <div className={`wrapperDot ${isDoted && "wrapperDotShow"}`}>
              <div
                className="data"
                title={text}
                ref={dataRef}
                onDoubleClick={() => {
                  copyToClipboard(text, setShow);
                }}
              >
                {text}
              </div>
            </div>
          </div>
        )}
      </Tooltip>
    </>
  );
};

export default dottedAndCopy;
