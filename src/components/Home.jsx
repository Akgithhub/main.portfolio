import React from "react";
import Navbar from "./Navbar";
import Typewriter from "typewriter-effect";
import { animate, motion } from "framer-motion";
import pic from "../assets/1.jpg";
import { Tooltip } from "@chakra-ui/react";
import { Tilt } from "react-tilt";

function Home() {
  const defaultOptions = {
    reverse: false, // reverse the tilt direction
    max: 35, // max tilt rotation (degrees)
    perspective: 1000, // Transform perspective, the lower the more extreme the tilt gets.
    scale: 1.1, // 2 = 200%, 1.5 = 150%, etc..
    speed: 1000, // Speed of the enter/exit transition
    transition: true, // Set a transition on enter/exit.
    axis: null, // What axis should be disabled. Can be X or Y.
    reset: true, // If the tilt effect has to be reset on exit.
    easing: "cubic-bezier(.03,.98,.52,.99)", // Easing on enter/exit.
  };
  const animations = {
    h1: {
      initial: {
        x: "-10%",
        opacity: 0,
      },
      whileInView: {
        x: 10,
        opacity: 1,
        transition: {
          duration: 2,
        },
      },
    },
  };

  const animations1 = {
    h1: {
      initial: {
        x: "10%",
        opacity: 0,
      },
      whileInView: {
        x: 10,
        opacity: 1,
        transition: {
          duration: 2,
        },
      },
    },
  };

  return (
    <>
      <Navbar />
      <div
        id="home"
        className="home bg-[#000111] w-full flex flex-col lg:flex-row justify-center items-center py-20 lg:p-[15vh]"
      >
        <motion.div className="home-l text-white max-w-xl px-4 md:px-0 md:mr-8">
          <motion.h1 {...animations.h1}>
            <>
              <h1 className="home-hello text-[20px] font-bold">Hello!</h1>
              <h1 className="hello-name text-3xl md:text-5xl flex gap-3 font-bold">
                I'm <span className="text-[#88ab8e]">Amaan Khan</span>
              </h1>
              <div className="text-2xl md:text-3xl font-bold">
                <h1 className="flex gap-3">
                  I'm a{" "}
                  <span className="text-[#88ab8e]">
                    <Typewriter
                      options={{
                        strings: [
                          "web developer",
                          "problem solver",
                          "tech enthusiast",
                        ],
                        autoStart: true,
                        loop: true,
                      }}
                    />
                  </span>
                </h1>
              </div>
              <div className="text-[#dcdcdc] pt-8 pb-4 md:pb-8 max-w-xl mg:w-[90vw]">
                <p className="leading-7 md:leading-8">
                  I am a dedicated and enthusiastic student currently in my
                  second year of BCA, specializing in Full Stack Web
                  Development. My journey into the world of technology began
                  with a fascination for the way websites and applications
                  seamlessly blend functionality with creativity.
                  <br />
                  <br />
                  In my pursuit of mastery in Full Stack Web Development. On the
                  front-end, proficient in HTML, CSS, and JavaScript, utilizing
                  frameworks such as React.js and Vue.js. On the back-end,
                  experience with Node.js, Express.js. Additionally, I am adept
                  at working with databases, including SQL and NoSQL databases
                  like MongoDB.
                </p>
              </div>
              <div className="flex gap-4 md:gap-8">
                <div className="hover:-translate-y-2 transition-all">
                  <a href="https://www.linkedin.com/in/web-devloper-amaan-khan">
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      strokeWidth="0"
                      viewBox="0 0 16 16"
                      height="3vh"
                      width="3vw"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"></path>
                    </svg>
                  </a>
                </div>
                <div className="hover:-translate-y-2 transition-all">
                  <a href="https://github.com/Akgithhub">
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      strokeWidth="0"
                      viewBox="0 0 16 16"
                      height="3vh"
                      width="3vw"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"></path>
                    </svg>
                  </a>
                </div>

                <Tooltip
                  label="Contact Me"
                  fontSize="sm"
                  bgColor={"#191919"}
                  fontWeight={"bold"}
                  borderRadius={"20px"}
                  color={"whitesmoke"}
                  padding={"5px"}
                  border={"2"}
                  borderColor={"white"}
                >
                  <a href="mailto:ak08118967@gmail.com">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-mails hover:-translate-y-2 transition-all"
                      style={{ height: "3vh", width: "3vw" }}
                    >
                      <rect
                        width="16"
                        height="13"
                        x="6"
                        y="4"
                        rx="2"
                        style={{ fill: "currentColor" }}
                      />
                      <path
                        d="m22 7-7.1 3.78c-.57.3-1.23.3-1.8 0L6 7"
                        style={{ stroke: "black" }}
                      />
                      <path
                        d="M2 8v11c0 1.1.9 2 2 2h14"
                        style={{ stroke: "black" }}
                      />
                    </svg>
                  </a>
                </Tooltip>
              </div>
              <div className="r-btn bg-white text-gray-700 text-lg md:text-xl mt-5 rounded-full text-center border-black border-2 font-semibold p-1 hover:bg-slate-600 hover:text-white">
                <a href="https://drive.google.com/file/d/1xG9gtGIqvbzAqR12y3_JG6Hd10trN06p/view?usp=sharing">
                  <button>Resume</button>
                </a>
              </div>
            </>
          </motion.h1>
        </motion.div>

        <motion.div className="home-r text-white mt-8 md:mt-0">
          <motion.h1 {...animations1.h1}>
            <>
              <Tilt options={defaultOptions}>
                <img
                  src={pic}
                  alt="My Image"
                  className="img-me rounded-full h-auto md:h-[50vh] w-full md:w-auto md:pt-[5vh] object-cover"
                />
              </Tilt>
            </>
          </motion.h1>
        </motion.div>
      </div>
      {/* <Myskills></Myskills>
      <Myexperience></Myexperience>
      <Contact></Contact>
      <Myproject></Myproject> */}
    </>
  );
}

export default Home;
