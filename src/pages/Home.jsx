import videoBg from "../assets/video/frenchie.mp4";
import frenchImg from "../assets/images/fbpup.jpg";
import womanImg from "../assets/images/woman.jpg";
import zeusImg from "../assets/images/Zeus.png";
import stormImg from "../assets/images/Storm.png";
import gaiaImg from "../assets/images/Gaia.png";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faSquareCaretDown } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { useState, useRef, useEFfect, useEffect, useContext } from "react";
import {
  motion,
  useInView,
  useAnimation,
  useScroll,
  useTransform,
  animate,
} from "framer-motion";
import { ScrollContext } from "../context/scrollDown.context.jsx";

library.add(faSquareCaretDown);

export const Home = () => {
  const [navToggle, setNavToggle] = useState(false);
  const ref = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);
  const ref4 = useRef(null);

  const { scrollRef, navClick } = useContext(ScrollContext);

  const handlePuppiesClick = () => {
    ref2.current?.scrollIntoView({ behavior: "smooth" });
  };
  const handleAboutClick = () => {
    ref3.current?.scrollIntoView({ behavior: "smooth" });
  };
  const puppyArray = [
    {
      name: "Zeus",
      type: "French Bulldog",
      howOld: "15 weeks",
      img: zeusImg,
    },
    {
      name: "Gaia",
      type: "French Bulldog",
      howOld: "15 weeks",
      img: gaiaImg,
    },
    {
      name: "Storm",
      type: "French Bulldog",
      howOld: "15 weeks",
      img: stormImg,
    },
  ];
  // when bottom of viewport crosses top of target for offset
  // second index is when ends

  const fadeInAnimationVariants = {
    initial: {
      opacity: 0,
      y: 100,
    },
    animate: (index) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.2 * index,
      },
    }),
  };

  const isInView = useInView(ref);
  const isInView2 = useInView(ref4);

  const mainControls = useAnimation();
  const mainControls2 = useAnimation();
  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
      mainControls2.start("visible");
    }
    if (isInView2) {
      mainControls2.start("visible");
    }
  }, [isInView, isInView2]);
  return (
    <>
      <div className="h-screen w-full ">
        <div className="relative">
          <video src={videoBg} autoPlay loop muted className="relative" />
          <h1 className="absolute bottom-0 right-4 text-white font-bold text-xl">
            Frenchies
          </h1>
          <FontAwesomeIcon
            icon="fa-regular fa-square-caret-down"
            className="absolute top-2 left-3 h-6 w-6"
            onClick={() => {
              setNavToggle(!navToggle);
            }}
          />
        </div>

        {navToggle && (
          <nav className="absolute top-10 left-3.5 flex flex-col bg-transparent">
            <Link to="" onClick={handlePuppiesClick}>
              Puppies
            </Link>
            <Link to="" onClick={handleAboutClick}>
              About
            </Link>
          </nav>
        )}
        <div className="md:flex md:flex-row-reverse mt-20">
          <div className="flex-1">
            <h2 className="mx-3 text-2xl text-white mt-6">
              Find a frenchie...
            </h2>
            <p className="text-white p-3 leading-8">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum
            </p>
          </div>
          <motion.div
            ref={ref4}
            variants={{
              hidden: { opacity: 0, y: 0 },
              visible: { opacity: 1, y: 0 },
            }}
            initial="hidden"
            animate={mainControls2}
            transition={{ ease: "easeOut", duration: 3 }}
            className="flex-1"
          >
            <img
              src={frenchImg}
              alt=""
              className="p-3 mt-4 md:w-full md:h-96 lg:h-90 lg:w-full  object-cover rounded-2xl "
            />
          </motion.div>
        </div>

        {/* <div className="mx-3 mt-6">
          <hr /> */}
        {/* <button className="bg-customGreen flex justify-center h-12 items-center text-white w-full">
            See my pups
          </button> */}
        {/* </div> */}
        <div className="md:flex md:flex-row md:justify-between mt-20">
          <div className="flex-1">
            <h2 ref={scrollRef} className="mx-3 text-2xl text-white mt-8">
              About me...
            </h2>
            <p className="mx-3 text-white mt-4 leading-8 ">
              Hi everyone! I am a hobby Frenchie breeder. I absolutely love my
              frenchies they are my children so I don’t believe in forced
              breeding. It’s totally up to my females whether they choose to
              mate or not. All of our babies get plenty of love and attention in
              our home. We have 7 children but 5 still at home. Our frenchies
              are super spoiled! Our babies are vet checked & given the shots
              needed to go to their FUREVER home! I do have both parents at my
              home available for viewing as well. If your in need of a perfect
              companion then look no further!❤️🐾
            </p>
          </div>

          <motion.div
            ref={ref}
            variants={{
              hidden: { opacity: 0, y: 0 },
              visible: { opacity: 1, y: 0 },
            }}
            initial="hidden"
            animate={mainControls}
            transition={{ ease: "easeOut", duration: 3 }}
            className="flex-1"
          >
            <img
              src={womanImg}
              alt=""
              className="p-3 mt-4 md:w-full md:h-96 lg:h-90 lg:w-full  object-cover rounded-2xl "
            />
          </motion.div>
        </div>
        {/* <div className="mx-3 mt-6">
          <hr />
        </div> */}
        <div className="mt-20">
          <h2 className="mx-3 text-2xl text-white mt-8">My puppies...</h2>
          <section
            className=" grid grid-cols-3 grid-rows-2 gap-4 m-3  sm:grid-rows-3 sm:grid-cols-4 md:grid-rows-2 md:grid-cols-4 lg:grid-cols-6 lg:grid-rows-1 xl:grid-rows-1"
            ref={ref2}
          >
            {puppyArray.map((pup, index) => {
              return (
                <>
                  <Link to={`/puppy-details/${index}`}>
                    <motion.article
                      className="bg-customGreen"
                      key={index}
                      variants={fadeInAnimationVariants}
                      initial="initial"
                      whileInView="animate"
                      custom={index}
                    >
                      <img
                        src={pup.img}
                        className="h-36 w-80 sm:h-40 md:h-60 lg:h-44 xl:h-60 object-cover"
                      />
                      <h1 className="text-white">{pup.name}</h1>
                      <p className="text-sm text-white">French Bulldog</p>
                      <p>15 weeks</p>
                    </motion.article>
                  </Link>
                </>
              );
            })}
          </section>
        </div>
      </div>
    </>
  );
};
