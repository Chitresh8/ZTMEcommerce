import React, { useState, useEffect } from "react";

export const ProgressBarParent = () => {
  const [progress, setProgress] = useState(0);

  useEffect(()=>{
      if(progress<100){
          const interval=setInterval(()=>{
              setProgress((prev)=>prev+5);
          },1000);

          return ()=>clearInterval(interval);
      }
      },[progress]);

  return (
    <>
      <div>
        <div
          className="progress-bar-container"
          style={{
            width: "100%",
            height: "30px",
            backgroundColor: "#e0e0e0",
            borderRadius: "5px",
            overflow: "hidden",
          }}
        >
          <div
            className="progress-bar"
            style={{
              width: `${progress}%`,
              height: "100%",
              backgroundColor: " #76c7c0",
              transition: "width 0.5s ease",
            }}
          ></div>
        </div>
      </div>
    </>
  );
};
