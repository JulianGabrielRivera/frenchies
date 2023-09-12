import React, { useEffect } from "react";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
export const OtherDogs = ({ puppyArray }) => {
  const [pup, setPup] = useState(null);
  const [pupArray, setPupArray] = useState(null);
  console.log(puppyArray);

  const dogLeftSwitch = (id) => {
    let newDogID = id - 1;
    if (newDogID < 0) {
      return;
    }
    console.log(newDogID);
    console.log(puppyArray);
    const myNewPup = puppyArray.filter((pup) => pup.id === newDogID);
    console.log(myNewPup);
    setPup(myNewPup[0]);
  };

  const dogRightSwitch = (id) => {
    console.log(id);
    let newDogID = id + 1;

    if (newDogID >= puppyArray.length) {
      return;
    }
    console.log(puppyArray);
    const myNewPup = puppyArray.filter((pup) => pup.id === newDogID);
    console.log(myNewPup);
    setPup(myNewPup[0]);
  };

  useEffect(() => {
    setPup(puppyArray[0]);
    setPupArray(puppyArray);
    console.log(pup);
  }, []);

  const dogRightSwitchArray = (pupArray) => {
    const copyOfArray = [...pupArray];
    for (let i = 0; i < copyOfArray.length - 1; i++) {
      [copyOfArray[i], copyOfArray[i + 1]] = [
        copyOfArray[i + 1],
        copyOfArray[i],
      ];
      console.log(pupArray[i]);
    }
    console.log(pupArray);
    setPupArray(copyOfArray);
    console.log("hi");
  };
  return (
    <>
      <section className="flex mt-10 justify-center sm:hidden ">
        <article className="w-11/12 h-22  text-white ">
          {pup && (
            <>
              <div className="relative ">
                <img src={pup.img} className="rounded-2xl w-full h-full" />
                <FontAwesomeIcon
                  onClick={() => {
                    dogLeftSwitch(pup.id);
                  }}
                  icon={faChevronLeft}
                  className=" absolute top-[50%]  translate-y-[-50%]  text-3xl rounded-full p-2"
                />
                <FontAwesomeIcon
                  onClick={() => {
                    dogRightSwitch(pup.id);
                  }}
                  icon={faChevronRight}
                  className=" absolute top-[50%]  translate-y-[-50%] right-0 text-3xl rounded-full p-2"
                />
              </div>

              <h2>{pup.name}</h2>
              <p>{pup.type}</p>
              <p>{pup.howOld}</p>
            </>
          )}
          {/* {puppyArray.map((pup) => {
          return (
            <>
              <img src={pup.img} className="rounded-md"></img>
              <h2>{pup.name}</h2>
              <p>{pup.type}</p>
              <p>{pup.howOld}</p>
            </>
          );
        })} */}
        </article>
      </section>

      <section className="text-white hidden sm:visible sm:flex gap-6 mt-10 mx-5 relative">
        {/* {pup && (
            <>
              <div className="relative">
                <img src={pup.img} className="rounded-md sm:hidden" />
                <FontAwesomeIcon
                  onClick={() => {
                    dogLeftSwitch(pup.id);
                  }}
                  icon={faChevronLeft}
                  className=" absolute top-[50%]  translate-y-[-50%]  text-3xl rounded-full p-2"
                />
                <FontAwesomeIcon
                  onClick={() => {
                    dogRightSwitch(pup.id);
                  }}
                  icon={faChevronRight}
                  className=" absolute top-[50%]  translate-y-[-50%] right-0 text-3xl rounded-full p-2"
                />
              </div>

              <h2>{pup.name}</h2>
              <p>{pup.type}</p>
              <p>{pup.howOld}</p>
            </>
          )} */}
        <FontAwesomeIcon
          onClick={() => {
            dogLeftSwitch(pup.id);
          }}
          icon={faChevronLeft}
          className=" absolute top-[42%] z-10 left-0 text-white  translate-y-[-50%] translate-x-8  text-3xl rounded-full p-2"
        />
        <FontAwesomeIcon
          onClick={() => {
            dogRightSwitchArray(pupArray);
          }}
          icon={faChevronRight}
          className=" absolute top-[42%] z-10  sm:visible translate-y-[-50%] -translate-x-8 right-0 text-3xl rounded-full p-2"
        />
        {/* height: 200px; width: 60%; padding: 10px; object-fit: cover; */}
        {pupArray &&
          pupArray.map((pup) => {
            return (
              <>
                <article className="flex-1 relative ">
                  <img
                    id="carouselImage"
                    src={pup.img}
                    className="rounded-md h-80 sm:h-40 md:h-80   w-full    object-cover  "
                  ></img>
                  <h2 className="absolute top-2 left-2 font-bold">
                    {pup.name}
                  </h2>
                  <p className="absolute top-64 sm:top-24 md:top-64 left-2 font-bold">
                    {pup.howOld}
                  </p>

                  <p className="absolute top-72 sm:top-32 md:top-72 left-2 font-bold">
                    {pup.type}
                  </p>
                </article>
              </>
            );
          })}
        <div className="rounded-md right-0 h-80 sm:h-40 md:h-80  bg-customGreen  w-36 md:w-44 lg:w-72 xl:w-96 absolute"></div>
        <div className="rounded-md left-0 h-80 sm:h-40  md:h-80 bg-customGreen w-36 md:w-44 lg:w-72 xl:w-96 absolute"></div>
      </section>
    </>
  );
};
