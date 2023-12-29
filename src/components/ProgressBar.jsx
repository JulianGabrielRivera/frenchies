import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBoltLightning } from "@fortawesome/free-solid-svg-icons";
import { faBone } from "@fortawesome/free-solid-svg-icons";
import { faPaw } from "@fortawesome/free-solid-svg-icons";

export const ProgressBar = ({ pup }) => {
  const [filled, setFilled] = useState(0);
  const [pupName, setPupName] = useState("");

  useEffect(() => {
    setFilled(0);
    // setPupName(pup.name)
    // if (pup[0].name === "Zeus") {
    //   console.log("true");
    setFilled((prevFilled) => prevFilled + 40);
    // }
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
        className="relative rounded-md"
      >
        <FontAwesomeIcon
          icon={faBoltLightning}
          className="absolute top-0.5 left-1"
        />
        {/* <p>Energy</p> */}
        <span
          style={{
            color: "white",
            display: "flex",
            justifyContent: "center",
            fontSize: "12px",
          }}
          className="border-2 gap-3 rounded-md"
        >
          <p className="w-2/5">Energy</p>
          {filled}%
        </span>
      </div>
      <br />
      <div
        className="relative rounded-md "
        style={{
          width: `${filled}%`,
          backgroundColor: "green",
          height: "100%",
          transition: "width 1.5s",
        }}
      >
        {/* <p>Energy</p> */}
        <FontAwesomeIcon icon={faBone} className="absolute top-0.5 left-1" />
        <span
          style={{
            color: "white",
            display: "flex",
            justifyContent: "center",
            fontSize: "12px",
          }}
          className="border-2 gap-3 rounded-md"
        >
          <p className="w-2/6">Size</p>
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
        className="relative rounded-md "
      >
        {/* <p>Energy</p> */}
        <FontAwesomeIcon icon={faPaw} className="absolute top-0.5 left-1" />

        <span
          style={{
            color: "white",
            display: "flex",
            justifyContent: "center",
            fontSize: "12px",
          }}
          className="border-2 gap-3 rounded-md"
        >
          <p className="w-2/5">Trainable</p>
          {filled}%
        </span>
      </div>
    </div>
  );
};
