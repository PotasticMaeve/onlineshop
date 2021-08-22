import React, { useState, useEffect } from "react";
import Banner from "../images/banner.png";

const colors = ["#FFADAD", "#A0C4FF", "#94D2BD", "#E76F51"];
const Slide = () => {
  const [index, setIndex] = useState(0);
  const delay = 5000;

  useEffect(() => {
    setTimeout(
      () =>
        setIndex((prevIndex) =>
          prevIndex === colors.length - 1 ? 0 : prevIndex + 1
        ),
      delay
    );
    return () => {};
  }, [index]);
  return (
    <div className="slide-wrap">
      <div
        className="slider"
        style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
      >
        {colors.map((backgroundColor, idx) => (
          <div key={idx} className="slide" style={{ backgroundColor }}>
            <img
              src={Banner}
              alt="Banner"
              style={{ width: "930px", height: "400px", margin: "-4rem 1px" }}
            />
          </div>
        ))}
      </div>
      <div className="slide-dots">
        {colors.map((_, idx) => (
          <div
            key={idx}
            className={`dot${index === idx ? " active" : ""} `}
            onClick={() => {
              setIndex(idx);
            }}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Slide;
