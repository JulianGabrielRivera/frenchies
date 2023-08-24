import { useState, useEffect } from "react";

export const ProgressBar = ({ pup }) => {
  const [filled, setFilled] = useState(0);
  const [pupName, setPupName] = useState("");

  useEffect(() => {
    // setPupName(pup.name)
    if (pup[0].name === "Zeus") {
      console.log("true");
      setFilled((prevFilled) => prevFilled + 40);
    }
  }, [pup]);

  return (
    <div className="flex flex-col mt-5 w-11/12">
      <div
        style={{
          width: `${filled}%`,
          backgroundColor: "green",
          height: "100%",
          transition: "width 1.5s",
        }}
      >
        {/* <p>Energy</p> */}
        <span
          style={{
            color: "white",
            display: "flex",
            justifyContent: "center",
            fontSize: "12px",
          }}
          className="border-2 gap-3"
        >
          <p className="w-3/5">Energy</p>
          {filled}%
        </span>
      </div>
      <br />
      <div
        style={{
          width: `${filled}%`,
          backgroundColor: "green",
          height: "100%",
          transition: "width 1.5s",
        }}
      >
        {/* <p>Energy</p> */}
        <span
          style={{
            color: "white",
            display: "flex",
            justifyContent: "center",
            fontSize: "12px",
          }}
          className="border-2 gap-3"
        >
          <p className="w-3/5">Size</p>
          {filled}%
        </span>
      </div>
      <br />
      <div
        style={{
          width: `${filled}%`,
          backgroundColor: "green",
          height: "100%",
          transition: "width 1.5s",
        }}
      >
        {/* <p>Energy</p> */}
        <span
          style={{
            color: "white",
            display: "flex",
            justifyContent: "center",
            fontSize: "12px",
          }}
          className="border-2 gap-3"
        >
          <p className="w-3/5">Trainable</p>
          {filled}%
        </span>
      </div>
    </div>
  );
};
