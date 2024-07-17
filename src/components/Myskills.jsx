import React from "react";
import { animate, motion } from "framer-motion";
import Typewriter from "typewriter-effect";

function Myskills() {
  const animationClientsCount = () => {
    animate(0, 100, {
      duration: 5, // Change duration to 2 seconds for slower animation
      onUpdate: (v) => (clientCount.current.textContent = v.toFixed()),
    });
  };

  const animationProjectsCount = () => {
    animate(0, 200, {
      duration: 5, // Change duration to 2 seconds for slower animation
      onUpdate: (v) => (projectCount.current.textContent = v.toFixed()),
    });
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
          duration: 2, // Increase duration to 5 seconds for slower animation
        },
      },
    },
    button: {
      initial: {
        y: "-10%",
        opacity: 0,
      },
      whileInView: {
        y: 10,
        opacity: 1,
        transition: {
          duration: 2, // Increase duration to 5 seconds for slower animation
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
          duration: 2, // Increase duration to 5 seconds for slower animation
        },
      },
    },
    button: {
      initial: {
        y: "10%",
        opacity: 0,
      },
      whileInView: {
        y: 10,
        opacity: 1,
        transition: {
          duration: 2, // Increase duration to 5 seconds for slower animation
        },
      },
    },
  };
  return (
    <>
      <div
        id="myskills"
        className="bg-[#000111] w-full flex flex-col gap-8 lg:flex-row justify-center items-center py-20 lg:p-[15vh] lg:gap-[7vw]"
      >
        <div className="cards text-white">
          <motion.h1 {...animations.h1}>
            {
              <>
                <div className="flex gap-6">
                  <div className="flex flex-col items-center justify-center bg-gray-900 h-40 w-32 rounded-lg border-2 border-white hover:scale-110 transition-all">
                    <h1>
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        stroke-width="0"
                        viewBox="0 0 512 512"
                        height="4vh"
                        width="4vw"
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-12 w-12 text-green-500"
                      >
                        <path d="M418.2 177.2c-5.4-1.8-10.8-3.5-16.2-5.1.9-3.7 1.7-7.4 2.5-11.1 12.3-59.6 4.2-107.5-23.1-123.3-26.3-15.1-69.2.6-112.6 38.4-4.3 3.7-8.5 7.6-12.5 11.5-2.7-2.6-5.5-5.2-8.3-7.7-45.5-40.4-91.1-57.4-118.4-41.5-26.2 15.2-34 60.3-23 116.7 1.1 5.6 2.3 11.1 3.7 16.7-6.4 1.8-12.7 3.8-18.6 5.9C38.3 196.2 0 225.4 0 255.6c0 31.2 40.8 62.5 96.3 81.5 4.5 1.5 9 3 13.6 4.3-1.5 6-2.8 11.9-4 18-10.5 55.5-2.3 99.5 23.9 114.6 27 15.6 72.4-.4 116.6-39.1 3.5-3.1 7-6.3 10.5-9.7 4.4 4.3 9 8.4 13.6 12.4 42.8 36.8 85.1 51.7 111.2 36.6 27-15.6 35.8-62.9 24.4-120.5-.9-4.4-1.9-8.9-3-13.5 3.2-.9 6.3-1.9 9.4-2.9 57.7-19.1 99.5-50 99.5-81.7 0-30.3-39.4-59.7-93.8-78.4zM282.9 92.3c37.2-32.4 71.9-45.1 87.7-36 16.9 9.7 23.4 48.9 12.8 100.4-.7 3.4-1.4 6.7-2.3 10-22.2-5-44.7-8.6-67.3-10.6-13-18.6-27.2-36.4-42.6-53.1 3.9-3.7 7.7-7.2 11.7-10.7zM167.2 307.5c5.1 8.7 10.3 17.4 15.8 25.9-15.6-1.7-31.1-4.2-46.4-7.5 4.4-14.4 9.9-29.3 16.3-44.5 4.6 8.8 9.3 17.5 14.3 26.1zm-30.3-120.3c14.4-3.2 29.7-5.8 45.6-7.8-5.3 8.3-10.5 16.8-15.4 25.4-4.9 8.5-9.7 17.2-14.2 26-6.3-14.9-11.6-29.5-16-43.6zm27.4 68.9c6.6-13.8 13.8-27.3 21.4-40.6s15.8-26.2 24.4-38.9c15-1.1 30.3-1.7 45.9-1.7s31 .6 45.9 1.7c8.5 12.6 16.6 25.5 24.3 38.7s14.9 26.7 21.7 40.4c-6.7 13.8-13.9 27.4-21.6 40.8-7.6 13.3-15.7 26.2-24.2 39-14.9 1.1-30.4 1.6-46.1 1.6s-30.9-.5-45.6-1.4c-8.7-12.7-16.9-25.7-24.6-39s-14.8-26.8-21.5-40.6zm180.6 51.2c5.1-8.8 9.9-17.7 14.6-26.7 6.4 14.5 12 29.2 16.9 44.3-15.5 3.5-31.2 6.2-47 8 5.4-8.4 10.5-17 15.5-25.6zm14.4-76.5c-4.7-8.8-9.5-17.6-14.5-26.2-4.9-8.5-10-16.9-15.3-25.2 16.1 2 31.5 4.7 45.9 8-4.6 14.8-10 29.2-16.1 43.4zM256.2 118.3c10.5 11.4 20.4 23.4 29.6 35.8-19.8-.9-39.7-.9-59.5 0 9.8-12.9 19.9-24.9 29.9-35.8zM140.2 57c16.8-9.8 54.1 4.2 93.4 39 2.5 2.2 5 4.6 7.6 7-15.5 16.7-29.8 34.5-42.9 53.1-22.6 2-45 5.5-67.2 10.4-1.3-5.1-2.4-10.3-3.5-15.5-9.4-48.4-3.2-84.9 12.6-94zm-24.5 263.6c-4.2-1.2-8.3-2.5-12.4-3.9-21.3-6.7-45.5-17.3-63-31.2-10.1-7-16.9-17.8-18.8-29.9 0-18.3 31.6-41.7 77.2-57.6 5.7-2 11.5-3.8 17.3-5.5 6.8 21.7 15 43 24.5 63.6-9.6 20.9-17.9 42.5-24.8 64.5zm116.6 98c-16.5 15.1-35.6 27.1-56.4 35.3-11.1 5.3-23.9 5.8-35.3 1.3-15.9-9.2-22.5-44.5-13.5-92 1.1-5.6 2.3-11.2 3.7-16.7 22.4 4.8 45 8.1 67.9 9.8 13.2 18.7 27.7 36.6 43.2 53.4-3.2 3.1-6.4 6.1-9.6 8.9zm24.5-24.3c-10.2-11-20.4-23.2-30.3-36.3 9.6.4 19.5.6 29.5.6 10.3 0 20.4-.2 30.4-.7-9.2 12.7-19.1 24.8-29.6 36.4zm130.7 30c-.9 12.2-6.9 23.6-16.5 31.3-15.9 9.2-49.8-2.8-86.4-34.2-4.2-3.6-8.4-7.5-12.7-11.5 15.3-16.9 29.4-34.8 42.2-53.6 22.9-1.9 45.7-5.4 68.2-10.5 1 4.1 1.9 8.2 2.7 12.2 4.9 21.6 5.7 44.1 2.5 66.3zm18.2-107.5c-2.8.9-5.6 1.8-8.5 2.6-7-21.8-15.6-43.1-25.5-63.8 9.6-20.4 17.7-41.4 24.5-62.9 5.2 1.5 10.2 3.1 15 4.7 46.6 16 79.3 39.8 79.3 58 0 19.6-34.9 44.9-84.8 61.4zm-149.7-15c25.3 0 45.8-20.5 45.8-45.8s-20.5-45.8-45.8-45.8c-25.3 0-45.8 20.5-45.8 45.8s20.5 45.8 45.8 45.8z"></path>
                      </svg>
                    </h1>
                    <h1 className="font-semibold text-[1.3rem]">React Js</h1>
                  </div>
                  <div className="flex flex-col items-center justify-center bg-gray-900 h-40 w-32 rounded-lg border-2 border-white hover:scale-110 transition-all">
                    <h1>
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        stroke-width="0"
                        viewBox="0 0 384 512"
                        height="4vh"
                        width="4vw"
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-12 w-12 text-green-500"
                      >
                        <path d="M0 32l34.9 395.8L191.5 480l157.6-52.2L384 32H0zm308.2 127.9H124.4l4.1 49.4h175.6l-13.6 148.4-97.9 27v.3h-1.1l-98.7-27.3-6-75.8h47.7L138 320l53.5 14.5 53.7-14.5 6-62.2H84.3L71.5 112.2h241.1l-4.4 47.7z"></path>
                      </svg>
                    </h1>
                    <h1 className="font-semibold text-[1.3rem]">HTML</h1>
                  </div>
                  <div className="flex flex-col items-center justify-center bg-gray-900 h-40 w-32 rounded-lg border-2 border-white hover:scale-110 transition-all">
                    <h1>
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        stroke-width="0"
                        viewBox="0 0 512 512"
                        height="4vh"
                        width="4vw"
                        xmlns="http://www.w3.org/2000/svg"
                        className="sh-12 w-12 text-green-500"
                      >
                        <path d="M480 32l-64 368-223.3 80L0 400l19.6-94.8h82l-8 40.6L210 390.2l134.1-44.4 18.8-97.1H29.5l16-82h333.7l10.5-52.7H56.3l16.3-82H480z"></path>
                      </svg>
                    </h1>
                    <h1 className="font-semibold text-[1.3rem]">CSS</h1>
                  </div>
                </div>
                <br />
                <div className="flex gap-6">
                  <div className="flex flex-col items-center justify-center bg-gray-900 h-40 w-32 rounded-lg border-2 border-white hover:scale-110 transition-all">
                    <h1>
                      <div color="blue" class="sc-iBdnpw gfwXEP">
                        <svg
                          stroke="currentColor"
                          fill="currentColor"
                          stroke-width="0"
                          role="img"
                          viewBox="0 0 24 24"
                          height="4vh"
                          width="4vw"
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-12 w-12 text-green-500"
                        >
                          <path d="M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z"></path>
                        </svg>
                      </div>
                    </h1>
                    <h1 className="font-semibold text-[1.3rem]">Java Script</h1>
                  </div>
                  <div className="flex flex-col items-center justify-center bg-gray-900 h-40 w-32 rounded-lg border-2 border-white hover:scale-110 transition-all">
                    <h1>
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        stroke-width="0"
                        viewBox="0 0 640 512"
                        height="4vh"
                        width="4vw"
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-12 w-12 text-green-500"
                      >
                        <path d="M316.3 452c-2.1 0-4.2-.6-6.1-1.6L291 439c-2.9-1.6-1.5-2.2-.5-2.5 3.8-1.3 4.6-1.6 8.7-4 .4-.2 1-.1 1.4.1l14.8 8.8c.5.3 1.3.3 1.8 0L375 408c.5-.3.9-.9.9-1.6v-66.7c0-.7-.3-1.3-.9-1.6l-57.8-33.3c-.5-.3-1.2-.3-1.8 0l-57.8 33.3c-.6.3-.9 1-.9 1.6v66.7c0 .6.4 1.2.9 1.5l15.8 9.1c8.6 4.3 13.9-.8 13.9-5.8v-65.9c0-.9.7-1.7 1.7-1.7h7.3c.9 0 1.7.7 1.7 1.7v65.9c0 11.5-6.2 18-17.1 18-3.3 0-6 0-13.3-3.6l-15.2-8.7c-3.7-2.2-6.1-6.2-6.1-10.5v-66.7c0-4.3 2.3-8.4 6.1-10.5l57.8-33.4c3.7-2.1 8.5-2.1 12.1 0l57.8 33.4c3.7 2.2 6.1 6.2 6.1 10.5v66.7c0 4.3-2.3 8.4-6.1 10.5l-57.8 33.4c-1.7 1.1-3.8 1.7-6 1.7zm46.7-65.8c0-12.5-8.4-15.8-26.2-18.2-18-2.4-19.8-3.6-19.8-7.8 0-3.5 1.5-8.1 14.8-8.1 11.9 0 16.3 2.6 18.1 10.6.2.8.8 1.3 1.6 1.3h7.5c.5 0 .9-.2 1.2-.5.3-.4.5-.8.4-1.3-1.2-13.8-10.3-20.2-28.8-20.2-16.5 0-26.3 7-26.3 18.6 0 12.7 9.8 16.1 25.6 17.7 18.9 1.9 20.4 4.6 20.4 8.3 0 6.5-5.2 9.2-17.4 9.2-15.3 0-18.7-3.8-19.8-11.4-.1-.8-.8-1.4-1.7-1.4h-7.5c-.9 0-1.7.7-1.7 1.7 0 9.7 5.3 21.3 30.6 21.3 18.5 0 29-7.2 29-19.8zm54.5-50.1c0 6.1-5 11.1-11.1 11.1s-11.1-5-11.1-11.1c0-6.3 5.2-11.1 11.1-11.1 6-.1 11.1 4.8 11.1 11.1zm-1.8 0c0-5.2-4.2-9.3-9.4-9.3-5.1 0-9.3 4.1-9.3 9.3 0 5.2 4.2 9.4 9.3 9.4 5.2-.1 9.4-4.3 9.4-9.4zm-4.5 6.2h-2.6c-.1-.6-.5-3.8-.5-3.9-.2-.7-.4-1.1-1.3-1.1h-2.2v5h-2.4v-12.5h4.3c1.5 0 4.4 0 4.4 3.3 0 2.3-1.5 2.8-2.4 3.1 1.7.1 1.8 1.2 2.1 2.8.1 1 .3 2.7.6 3.3zm-2.8-8.8c0-1.7-1.2-1.7-1.8-1.7h-2v3.5h1.9c1.6 0 1.9-1.1 1.9-1.8zM137.3 191c0-2.7-1.4-5.1-3.7-6.4l-61.3-35.3c-1-.6-2.2-.9-3.4-1h-.6c-1.2 0-2.3.4-3.4 1L3.7 184.6C1.4 185.9 0 188.4 0 191l.1 95c0 1.3.7 2.5 1.8 3.2 1.1.7 2.5.7 3.7 0L42 268.3c2.3-1.4 3.7-3.8 3.7-6.4v-44.4c0-2.6 1.4-5.1 3.7-6.4l15.5-8.9c1.2-.7 2.4-1 3.7-1 1.3 0 2.6.3 3.7 1l15.5 8.9c2.3 1.3 3.7 3.8 3.7 6.4v44.4c0 2.6 1.4 5.1 3.7 6.4l36.4 20.9c1.1.7 2.6.7 3.7 0 1.1-.6 1.8-1.9 1.8-3.2l.2-95zM472.5 87.3v176.4c0 2.6-1.4 5.1-3.7 6.4l-61.3 35.4c-2.3 1.3-5.1 1.3-7.4 0l-61.3-35.4c-2.3-1.3-3.7-3.8-3.7-6.4v-70.8c0-2.6 1.4-5.1 3.7-6.4l61.3-35.4c2.3-1.3 5.1-1.3 7.4 0l15.3 8.8c1.7 1 3.9-.3 3.9-2.2v-94c0-2.8 3-4.6 5.5-3.2l36.5 20.4c2.3 1.2 3.8 3.7 3.8 6.4zm-46 128.9c0-.7-.4-1.3-.9-1.6l-21-12.2c-.6-.3-1.3-.3-1.9 0l-21 12.2c-.6.3-.9.9-.9 1.6v24.3c0 .7.4 1.3.9 1.6l21 12.1c.6.3 1.3.3 1.8 0l21-12.1c.6-.3.9-.9.9-1.6v-24.3zm209.8-.7c2.3-1.3 3.7-3.8 3.7-6.4V192c0-2.6-1.4-5.1-3.7-6.4l-60.9-35.4c-2.3-1.3-5.1-1.3-7.4 0l-61.3 35.4c-2.3 1.3-3.7 3.8-3.7 6.4v70.8c0 2.7 1.4 5.1 3.7 6.4l60.9 34.7c2.2 1.3 5 1.3 7.3 0l36.8-20.5c2.5-1.4 2.5-5 0-6.4L550 241.6c-1.2-.7-1.9-1.9-1.9-3.2v-22.2c0-1.3.7-2.5 1.9-3.2l19.2-11.1c1.1-.7 2.6-.7 3.7 0l19.2 11.1c1.1.7 1.9 1.9 1.9 3.2v17.4c0 2.8 3.1 4.6 5.6 3.2l36.7-21.3zM559 219c-.4.3-.7.7-.7 1.2v13.6c0 .5.3 1 .7 1.2l11.8 6.8c.4.3 1 .3 1.4 0L584 235c.4-.3.7-.7.7-1.2v-13.6c0-.5-.3-1-.7-1.2l-11.8-6.8c-.4-.3-1-.3-1.4 0L559 219zm-254.2 43.5v-70.4c0-2.6-1.6-5.1-3.9-6.4l-61.1-35.2c-2.1-1.2-5-1.4-7.4 0l-61.1 35.2c-2.3 1.3-3.9 3.7-3.9 6.4v70.4c0 2.8 1.9 5.2 4 6.4l61.2 35.2c2.4 1.4 5.2 1.3 7.4 0l61-35.2c1.8-1 3.1-2.7 3.6-4.7.1-.5.2-1.1.2-1.7zm-74.3-124.9l-.8.5h1.1l-.3-.5zm76.2 130.2l-.4-.7v.9l.4-.2z"></path>
                      </svg>
                    </h1>
                    <h1 className="font-semibold text-[1.3rem]">Node Js</h1>
                  </div>
                  <div className="flex flex-col items-center justify-center bg-gray-900 h-40 w-32 rounded-lg border-2 border-white hover:scale-110 transition-all">
                    <h1>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        x="0px"
                        y="0px"
                        height="4vh"
                        width="4vw"
                        className="h-12 w-12 text-green-500"
                        viewBox="0 0 50 50"
                      >
                        <path
                          d="M49.729 11h-.85c-1.051 0-2.041.49-2.68 1.324l-8.7 11.377-8.7-11.377C28.162 11.49 27.171 11 26.121 11h-.85l10.971 14.346L25.036 40h.85c1.051 0 2.041-.49 2.679-1.324L37.5 26.992l8.935 11.684C47.073 39.51 48.063 40 49.114 40h.85L38.758 25.346 49.729 11zM21.289 34.242c-2.554 3.881-7.582 5.87-12.389 4.116C4.671 36.815 2 32.611 2 28.109L2 27h12v0h11l0-4.134c0-6.505-4.818-12.2-11.295-12.809C6.273 9.358 0 15.21 0 22.5l0 5.573c0 5.371 3.215 10.364 8.269 12.183 6.603 2.376 13.548-1.17 15.896-7.256 0 0 0 0 0 0h-.638C22.616 33 21.789 33.481 21.289 34.242zM2 22.5C2 16.71 6.71 12 12.5 12S23 16.71 23 22.5V25H2V22.5z"
                          fill="#88ab8e"
                        ></path>
                      </svg>
                    </h1>
                    <h1 className="font-semibold text-[1.3rem]">Express Js</h1>
                  </div>
                </div>
                <br />
                <div className="flex gap-6">
                  <div className="flex flex-col items-center justify-center bg-gray-900 h-40 w-32 rounded-lg border-2 border-white hover:scale-110 transition-all">
                    <h1>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        x="0px"
                        y="0px"
                        height="4vh"
                        width="4vw"
                        className="h-12 w-12 text-green-500"
                        viewBox="0 0 50 50"
                      >
                        <path
                          d="M 25 2 C 20.941406 2 18.1875 2.96875 16.4375 4.375 C 14.6875 5.78125 14 7.589844 14 9.09375 L 14 14 L 24 14 L 24 15 L 9.09375 15 C 7.265625 15 5.410156 15.792969 4.09375 17.46875 C 2.777344 19.144531 2 21.644531 2 25 C 2 28.355469 2.777344 30.855469 4.09375 32.53125 C 5.410156 34.207031 7.265625 35 9.09375 35 L 14 35 L 14 40.90625 C 14 42.410156 14.6875 44.21875 16.4375 45.625 C 18.1875 47.03125 20.941406 48 25 48 C 29.058594 48 31.8125 47.03125 33.5625 45.625 C 35.3125 44.21875 36 42.410156 36 40.90625 L 36 36 L 26 36 L 26 35 L 40.90625 35 C 42.734375 35 44.589844 34.207031 45.90625 32.53125 C 47.222656 30.855469 48 28.355469 48 25 C 48 21.644531 47.222656 19.144531 45.90625 17.46875 C 44.589844 15.792969 42.734375 15 40.90625 15 L 36 15 L 36 9.09375 C 36 7.550781 35.316406 5.738281 33.5625 4.34375 C 31.808594 2.949219 29.054688 2 25 2 Z M 25 4 C 28.746094 4 31.015625 4.875 32.3125 5.90625 C 33.609375 6.9375 34 8.136719 34 9.09375 L 34 21 C 34 22.65625 32.65625 24 31 24 L 19 24 C 16.941406 24 15.167969 25.269531 14.40625 27.0625 C 14.277344 27.359375 14.160156 27.675781 14.09375 28 C 14.027344 28.324219 14 28.65625 14 29 L 14 33 L 9.09375 33 C 7.824219 33 6.648438 32.503906 5.6875 31.28125 C 4.726563 30.058594 4 28.042969 4 25 C 4 21.957031 4.726563 19.941406 5.6875 18.71875 C 6.648438 17.496094 7.824219 17 9.09375 17 L 26 17 L 26 12 L 16 12 L 16 9.09375 C 16 8.199219 16.386719 6.980469 17.6875 5.9375 C 18.988281 4.894531 21.257813 4 25 4 Z M 20 7 C 18.898438 7 18 7.898438 18 9 C 18 10.101563 18.898438 11 20 11 C 21.101563 11 22 10.101563 22 9 C 22 7.898438 21.101563 7 20 7 Z M 36 17 L 40.90625 17 C 42.175781 17 43.351563 17.496094 44.3125 18.71875 C 45.273438 19.941406 46 21.957031 46 25 C 46 28.042969 45.273438 30.058594 44.3125 31.28125 C 43.351563 32.503906 42.175781 33 40.90625 33 L 24 33 L 24 38 L 34 38 L 34 40.90625 C 34 41.800781 33.613281 43.019531 32.3125 44.0625 C 31.011719 45.105469 28.742188 46 25 46 C 21.257813 46 18.988281 45.105469 17.6875 44.0625 C 16.386719 43.019531 16 41.800781 16 40.90625 L 16 29 C 16 28.792969 16.023438 28.601563 16.0625 28.40625 C 16.34375 27.039063 17.550781 26 19 26 L 31 26 C 33.746094 26 36 23.746094 36 21 Z M 30 39 C 28.898438 39 28 39.898438 28 41 C 28 42.101563 28.898438 43 30 43 C 31.101563 43 32 42.101563 32 41 C 32 39.898438 31.101563 39 30 39 Z"
                          fill="#88ab8e"
                        ></path>
                      </svg>
                    </h1>
                    <h1 className="font-semibold text-[1.3rem]">Python</h1>
                  </div>
                  <div className="flex flex-col items-center justify-center bg-gray-900 h-40 w-32 rounded-lg border-2 border-white hover:scale-110 transition-all">
                    <h1>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        x="0px"
                        y="0px"
                        height="4vh"
                        width="4vw"
                        className="h-12 w-12 text-green-500"
                        viewBox="0 0 50 50"
                      >
                        <path
                          d="M 25 2 C 24.285156 2 23.574219 2.179688 22.933594 2.539063 L 6.089844 12.003906 C 4.808594 12.726563 4 14.074219 4 15.535156 L 4 34.464844 C 4 35.929688 4.808594 37.277344 6.089844 38 L 22.933594 47.460938 C 24.214844 48.183594 25.785156 48.183594 27.066406 47.460938 L 43.910156 38 C 45.195313 37.277344 46 35.925781 46 34.464844 L 46 15.535156 C 46 14.074219 45.191406 12.726563 43.910156 12.003906 L 27.066406 2.539063 C 26.425781 2.179688 25.714844 2 25 2 Z M 25 4 C 25.375 4 25.753906 4.09375 26.089844 4.28125 L 42.933594 13.746094 C 43.601563 14.125 44 14.804688 44 15.535156 L 44 24 L 42 24 L 42 22 L 40 22 L 40 24 L 38 24 L 38 26 L 40 26 L 40 28 L 42 28 L 42 26 L 44 26 L 44 34.464844 C 44 35.195313 43.601563 35.875 42.929688 36.253906 L 26.089844 45.71875 C 25.417969 46.09375 24.582031 46.09375 23.910156 45.71875 L 7.070313 36.253906 C 6.398438 35.875 6 35.199219 6 34.464844 L 6 15.535156 C 6 14.804688 6.398438 14.125 7.070313 13.746094 L 23.910156 4.28125 C 24.246094 4.09375 24.625 4 25 4 Z M 25 12 C 17.839844 12 12 17.839844 12 25 C 12 32.160156 17.839844 38 25 38 C 29.089844 38 32.886719 36.09375 35.339844 32.863281 L 36.023438 31.960938 L 29.96875 28.453125 L 29.421875 29.046875 C 28.292969 30.28125 26.691406 31 25 31 C 21.683594 31 19 28.316406 19 25 C 19 21.683594 21.683594 19 25 19 C 26.691406 19 28.292969 19.71875 29.421875 20.953125 L 29.96875 21.546875 L 36.023438 18.039063 L 35.339844 17.136719 C 32.886719 13.90625 29.089844 12 25 12 Z M 25 14 C 28.074219 14 30.886719 15.316406 32.945313 17.511719 L 30.203125 19.097656 C 28.757813 17.832031 26.960938 17 25 17 C 20.597656 17 17 20.597656 17 25 C 17 29.402344 20.597656 33 25 33 C 26.960938 33 28.757813 32.167969 30.203125 30.902344 L 32.945313 32.488281 C 30.886719 34.683594 28.074219 36 25 36 C 18.925781 36 14 31.074219 14 25 C 14 18.925781 18.925781 14 25 14 Z M 33 22 L 33 24 L 31 24 L 31 26 L 33 26 L 33 28 L 35 28 L 35 26 L 37 26 L 37 24 L 35 24 L 35 22 Z"
                          fill="#88ab8e"
                        ></path>
                      </svg>
                    </h1>
                    <h1 className="font-semibold text-[1.3rem]">C++</h1>
                  </div>
                  <div className="flex flex-col items-center justify-center bg-gray-900 h-40 w-32 rounded-lg border-2 border-white hover:scale-110 transition-all">
                    <h1>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        height="5vh"
                        width="5vw"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="#88ab8e"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        class="h-12 w-12 text-green-500"
                      >
                        <ellipse
                          cx="12"
                          cy="5"
                          rx="9"
                          ry="3"
                          stroke="#88ab8e"
                        />
                        <path d="M3 5V19A9 3 0 0 0 15 21.84" stroke="#88ab8e" />
                        <path d="M21 5V8" stroke="#88ab8e" />
                        <path d="M21 12L18 17H22L19 22" stroke="#88ab8e" />
                        <path
                          d="M3 12A9 3 0 0 0 14.59 14.87"
                          stroke="#88ab8e"
                        />
                      </svg>
                    </h1>
                    <h1 className="font-semibold text-[1.3rem] ">MONGO DB</h1>
                  </div>
                </div>
              </>
            }
          </motion.h1>
        </div>
        <div className="text-white max-w-xl px-4 md:px-0 md:mr-8 lg:max-w-[80vw]">
          <motion.h1 {...animations1.h1}>
            <h1 className="text-[1.5rem] md:text-[1.8rem] lg:text-[2rem] font-semibold">
              MY SKILLS
            </h1>
            <h1 className="text-[2.5rem] md:text-[3rem] lg:text-[4rem] flex flex-col md:flex-row gap-3 font-bold ">
              <span>What</span>{" "}
              <span className="text-[#88ab8e] font-bold">can I do</span>
            </h1>
            <h1 className="text-[1.8rem] md:text-[2rem] lg:text-[2.5rem] text-[#88ab8e] font-semibold">
              <Typewriter
                options={{
                  strings: [
                    "Frontend...",
                    "Backend...",
                    "Devops...",
                    "Database...",
                  ],
                  autoStart: true,
                  loop: true,
                }}
              />
            </h1>
         
          <br />

          <div className=" text-[#dcdcdc] pt-8 pb-4 md:pb-8 max-w-xl mg:w-[90vw]">
            <div className="leading-7 md:leading-8">
              <h1>
                As an adept developer, I possess a rich skill like ,In frontend
                technologies, I am well-versed in HTML, CSS, and JavaScript, My
                proficiency extends to advanced frontend frameworks like
                React.js, empowering me to create dynamic and interactive user
                interfaces with ease. I leverage the power of utility CSS
                frameworks such as Tailwind CSS and Bootstrap to expedite
                development and ensure UI consistency across projects.
              </h1>
            </div>
            <div className="leading-7 md:leading-8">
              <h1>
                On the backend, I excel in Node.js and Express.js, crafting
                server-side applications that are not only high-performing but
                also scalable and maintainable. Coupled with my expertise in
                MongoDB, a leading NoSQL database.
              </h1>
            </div>
            <div className="leading-7 md:leading-8">
              <h1>
                In the realm of DevOps, I know tools like Git and GitHub for
                version control, enabling efficient collaboration and code
                management.
              </h1>
            </div>
          </div>
          </motion.h1>
        </div>
      </div>
    </>
  );
}

export default Myskills;
