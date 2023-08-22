import React from "react";
import { useParams } from "react-router-dom";
import zeusImg from "../assets/images/zeus2.png";
import stormImg from "../assets/images/Storm.png";
import gaiaImg from "../assets/images/Gaia.png";
import { ScrollContext } from "../context/scrollDown.context.jsx";
import { useState, useRef, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { ProgressBar } from "../components/ProgressBar";
export const PuppyDetails = () => {
  const [differentImage, setDifferentImage] = useState("");
  const { scrollRef, navClick } = useContext(ScrollContext);
  const [defaultImg, setDefaultImage] = useState("");
  const [pup, setPup] = useState(null);

  const id = useParams();
  const puppyArray = [
    {
      name: "Zeus",
      type: "French Bulldog",
      howOld: "15 weeks",
      img: zeusImg,
      id: 0,
    },
    {
      name: "Gaia",
      type: "French Bulldog",
      howOld: "15 weeks",
      img: gaiaImg,
      id: 1,
    },
    {
      name: "Storm",
      type: "French Bulldog",
      howOld: "15 weeks",
      img: stormImg,
      id: 2,
    },
  ];
  const changeImage = (image) => {
    setDifferentImage(image);
  };

  useEffect(() => {
    const specificPuppy = puppyArray.filter((pup) => {
      return pup.id === +Object.values(id)[0];
    });
    console.log(specificPuppy);
    setPup(specificPuppy);
    setDefaultImage(specificPuppy[0].img);
    console.log(defaultImg);
  }, [id]);
  //   console.log(specificPuppy);
  return (
    <>
      <nav className="flex justify-between bg-customGreen h-12 list-none ">
        <div className="w-2/5 flex flex-col justify-center align-middle">
          <h2 className="flex  justify-center text-white">Frenchies</h2>
        </div>
        <div className="flex justify-around w-2/5 items-center ">
          <Link to="/ " className="no-underline text-white">
            Home
          </Link>
          <li className="no-underline text-white">Puppies</li>
          <Link to="/" className="no-underline text-white" onClick={navClick}>
            About
          </Link>
        </div>
      </nav>
      {
        <>
          <div className="flex flex-col justify-around mt-10 items-center   ">
            <div className="flex flex-col lg:flex-row text-white justify-between md:justify-around w-11/12 mt-8">
              <div className="flex flex-col-reverse md:flex-row justify-center gap-3 lg:visible">
                <div className="flex md:flex-col gap-2 lg:visible">
                  <img
                    src={zeusImg}
                    alt=""
                    width={80}
                    // height={100}
                    className="rounded-md  object-cover"
                    onClick={() => {
                      changeImage(zeusImg);
                    }}
                  />
                  <img
                    src={stormImg}
                    alt=""
                    width={80}
                    // height={80}
                    className="rounded-md  object-cover"
                    onClick={() => {
                      changeImage(stormImg);
                    }}
                  />
                  <img
                    src={gaiaImg}
                    alt=""
                    width={80}
                    className="rounded-md  object-cover"
                    onClick={() => {
                      changeImage(gaiaImg);
                    }}
                  />
                </div>
                <img
                  src={differentImage ? differentImage : defaultImg}
                  alt=""
                  className=" object-cover rounded-2xl h-450 w-95vw md:w-70vw lg:w-40vw"
                  //   style={{ height: "450px", width: "95vw" }}
                />
              </div>
              <section className="flex flex-col w-2/5 md:mt-10 lg:mt-0 gap-3 lg:mx-5">
                <p className=" text-4xl  sm:text-left  ">
                  {pup && pup[0].name}
                </p>
                <p className="">Male</p>
                <div className="flex flex-col gap-3 ">
                  <br></br>
                  <p>{pup && pup[0].type}</p>
                  <p>{pup && pup[0].howOld}</p>
                  <p>Vet Checked</p>
                  <p>Shots up to date</p>
                </div>
                <div className="flex flex-col w-2/3  justify-between rounded-xl">
                  {pup && <ProgressBar pup={pup} />}
                </div>
              </section>
            </div>

            <hr className="mt-10 ml-5 mr-5" />
          </div>

          <section className="flex flex-col justify-center items-center  ">
            <h1 className="text-2xl text-white w-11/12">About Zeus</h1>
            <p className="text-white mt-10 w-11/12">
              Meet Max, the epitome of tranquility and canine charm. Max is the
              embodiment of a good boy, his gentle disposition and serene
              demeanor winning the hearts of all who cross his path. With a
              penchant for leisure, he has mastered the art of embracing
              laziness with an endearing grace that's all his own. Whether
              lounging in a sun-dappled spot or curling up in a cozy corner,
              Max's adorable snoozing sessions are a testament to his mastery of
              relaxation. His undeniable cuteness, accentuated by those soulful
              eyes and a perpetually contented expression, effortlessly melts
              away stress and spreads a wave of warmth in his presence. Max, the
              serene and adorable furry companion, serves as a reminder of the
              beauty in simplicity and the joy of sharing life's tranquil
              moments with a beloved and endearing friend.
            </p>
          </section>

          <section className="mt-10 flex flex-col justify-center items-center">
            <h1 className="text-2xl text-white w-11/12">Contact Me</h1>
          </section>
        </>
      }
    </>
  );
};
