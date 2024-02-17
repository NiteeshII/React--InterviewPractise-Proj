import React, { useEffect, useRef, useState } from "react";

const Stepper = ({ stepsConfig = [] }) => {
  const stepRef = useRef([]);
  const [currentstep, setCurrentstep] = useState(1);
  const [IsComplete, setIsComplete] = useState(false);

  const [margin, setMargin] = useState({
    marginLeft: 0,
    marginRight: 0,
  });

  const calculateprogressBar = () => {
    return ((currentstep - 1) / (stepsConfig.length - 1)) * 100;
  };

  useEffect(() => {
    setMargin({
      marginLeft: stepRef.current[0]?.offsetWidth / 2,
      marginRight: stepRef.current[stepsConfig.length - 1]?.offsetWidth / 2,
    });
  }, [stepRef, stepsConfig.length]);

  console.log(currentstep, IsComplete);
  const handleonNextClick = () => {
    setCurrentstep((prev) => {
      console.log(prev);
      if (prev === stepsConfig.length) {
        setIsComplete(true);
        return prev;
      } else {
        return prev + 1;
      }
    });
  };

  const ActiveComponent = stepsConfig[currentstep - 1]?.Component;
  console.log(calculateprogressBar());
  return (
    <div>
      <div className="stepper-container">
        <div className="stepper-box">
          {stepsConfig?.map((step, index) => {
            return (
              <div
                className={`step ${
                  currentstep > index + 1 || IsComplete ? "complete" : ""
                } ${currentstep === index + 1 ? "active" : ""}`}
                key={index}
                ref={(el) => (stepRef.current[index] = el)}
              >
                <div className="step-number">
                  {currentstep > index + 1 || IsComplete ? (
                    <span>&#10003;</span>
                  ) : (
                    index + 1
                  )}
                </div>
                <div className="step-name">{step.name}</div>
              </div>
            );
          })}
        </div>
        <div
          className="progress-bar"
          style={{
            marginLeft: margin.marginLeft,
            marginRight: margin.marginRight,
          }}
        >
          <div
            className="progress"
            style={{ width: `${calculateprogressBar()}%` }}
          ></div>
        </div>
      </div>

      <div className="button-Container">
        <ActiveComponent />
        {!IsComplete && (
          <button onClick={handleonNextClick}>
            {currentstep === stepsConfig.length ? "Finish" : "Next"}
          </button>
        )}
      </div>
    </div>
  );
};

export default Stepper;
