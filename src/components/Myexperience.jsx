import React from "react";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import TimelineDot from "@mui/lab/TimelineDot";
import Typography from "@mui/material/Typography";
import { animate, motion } from "framer-motion";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

function Myexperience() {
  const animations = {
    h1: {
      initial: {
        y: "-10vh", // Move up by 10% of viewport height initially
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
        id="myexperience"
        className="experience text-white flex justify-center items-center flex-col w-[80%] m-auto"
      >
        <div class="text-lg md:text-xl lg:text-2xl font-semibold md:mt-0 mt-[30vh]">
          <motion.h1 {...animations.h1}>
            <h1>My Experience</h1>
          </motion.h1>
        </div>
        <div class="text-xl md:text-3xl lg:text-4xl font-bold pb-28">
          <motion.h1 {...animations.h1}>
            <h1 class="flex gap-3">
              Where <span class="text-[#88ab8e]">I have worked</span>
            </h1>
          </motion.h1>
        </div>

        <div className="w-full">
          <VerticalTimeline>
            <VerticalTimelineElement
              contentStyle={{ background: "#191919", color: "#fff" }}
              contentArrowStyle={{ borderRight: "7px solid  #191919" }}
              date="June 2024"
              iconStyle={{ background: "#88AB8E", color: "#fff" }}
            >
              <h3 className="vertical-timeline-element-title text-[1.5rem] font-semibold">
                Web Developer Intern
              </h3>
              <h4 className="vertical-timeline-element-subtitle text-[2rem] font-semibold">
                @ Afame Technologies
              </h4>
              <p>
                Built responsive web applications using HTML, CSS, JavaScript,
                and React. 🌐 Assisted in backend integration with Node.js and
                Express. 🔗 Debugged and optimized code, ensuring cross-browser
                compatibility. 🐞 Enhanced teamwork and communication skills
                while gaining valuable industry experience. 🤝
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              contentStyle={{ background: "#191919", color: "#88AB8E" }}
              contentArrowStyle={{ borderRight: "7px solid  #191919" }}
              date="2022 - 2025"
              iconStyle={{ background: "#88AB8E", color: "#fff" }}
            >
              {/* <h3 className="vertical-timeline-element-title">
                M.S. Mathematics and Computing
              </h3> */}
              <h4 className="vertical-timeline-element-subtitle text-[2rem] font-semibold">
                # Kurukshetra University
              </h4>
              <p>
                I'm a passionate 🎓 third-year BCA student diving deep into Full
                Stack Web Development. With skills spanning front-end to
                back-end technologies, I create seamless digital experiences
                that blend creativity with functionality. Explore my projects
                and let's connect to collaborate on exciting ventures! 🚀💻
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              contentStyle={{ background: "#191919", color: "#fff" }}
              contentArrowStyle={{ borderRight: "7px solid  #191919" }}
              date="July 2024"
              iconStyle={{ background: "#88AB8E", color: "#fff" }}
            >
              <h3 className="vertical-timeline-element-title text-[1.5rem] font-semibold">
                Frontend Developer Intern
              </h3>
              <h4 className="vertical-timeline-element-subtitle text-[2rem] font-semibold">
                @ DigiGlobe Solutions
              </h4>
              <p>
                Collaborated with senior developers to create responsive web
                applications using HTML, CSS, and JavaScript frameworks,
                including React.js and its libraries. 👨‍💻 Gained hands-on
                experience in frontend development practices and participated in
                code reviews. 🛠️ Assisted in optimizing website performance. 🚀
                Delivered project milestones on time, contributing to a dynamic
                and innovative team. 🎯
              </p>
            </VerticalTimelineElement>
          </VerticalTimeline>
        </div>
      </div>
    </>
  );
}

export default Myexperience;
