import React from "react";
import { useForm } from "react-hook-form";
import { useForm as userformer } from "@formspree/react";
import { animate, motion } from "framer-motion";

function Contact() {
  const [state, handleSubmit1] = userformer("xwkgyyzj");
  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm();

  const animations = {
    h1: {
      initial: {
        y: "10vh", // Move up by 10% of viewport height initially
        opacity: 0,
      },
      whileInView: {
        y: 0, // Return to original position
        opacity: 1,
        transition: {
          duration: 2,
        },
      },
    },
  };

  return (
    <>
      <div
        id="contact"
        className="contact text-white bg-[#000111] min-h-screen w-full flex flex-col justify-center items-center py-16 "
      >
        <motion.h1 {...animations.h1}>
          <div className="text-lg md:text-xl lg:text-2xl font-semibold mb-4 mt-[20vh]">
            <h1>My Contact</h1>
          </div>

          <div className="text-[3rem] font-bold mb-4">
            <h1 className="flex gap-2">
              Contact <span className="text-[#88ab8e]">Me Here</span>
            </h1>
          </div>
          <div>
            <form
              onSubmit={handleSubmit(handleSubmit1)}
              className="flex flex-col justify-center items-center gap-6 text-black"
            >
              <input
                className="bg-[#191919] text-white font-medium border-2 border-white p-3 pr-16 rounded-full"
                type="text"
                id="name"
                name="name"
                placeholder="Enter your Name"
                {...register("name", {
                  required: "Please enter your name",
                })}
                aria-invalid={errors.name ? "true" : "false"}
              />
              {errors.name?.type === "required" && (
                <p className="text-[#88ab8e] bg-[#191919] border-2 border-white rounded-xl font-medium p-2">
                  Name is required
                </p>
              )}
              <input
                className="bg-[#191919] text-white font-medium border-2 border-white p-3 pr-16 rounded-full"
                id="email"
                type="email"
                name="email"
                placeholder="Enter your Email"
                {...register("mail", {
                  required: "Email Address is required",
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@gmail\.com$/i,
                    message: "Invalid email format or not a Gmail address",
                  },
                })}
                aria-invalid={errors.mail ? "true" : "false"}
              />

              {errors.mail && (
                <p className="text-[#88ab8e] bg-[#191919] border-2 border-white rounded-xl font-medium p-2">
                  {errors.mail.message}
                </p>
              )}
              <input
                className="bg-[#191919] text-white font-medium border-2 border-white p-3 pr-16 rounded-full"
                type="text"
                id="message"
                name="message"
                placeholder="Enter your Message"
                {...register("Message", { required: true })}
              />
              {errors.Message && (
                <p className="text-[#88ab8e] bg-[#191919] border-2 border-white rounded-xl font-medium p-2">
                  This field is required
                </p>
              )}
              <input
                type="submit"
                disabled={state.submitting}
                className="text-white bg-[#88ab8e] border-2 border-white rounded-xl font-medium p-2 pl-3 pr-3 hover:scale-110 transition-all"
              />
            </form>
          </div>
          <div className="flex justify-center items-center pt-8 gap-10">
            <div className="hover:scale-125 transition-all">
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
            <div className="hover:scale-125 transition-all">
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
          </div>
        </motion.h1>
      </div>
    </>
  );
}

export default Contact;
