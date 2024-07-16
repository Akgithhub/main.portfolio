import React from 'react'

const time = () => {
  return (
    <div>
        <Timeline position="alternate">
            <TimelineItem>
              <TimelineOppositeContent
                sx={{ m: "auto 0" }}
                align="right"
                variant="body2"
                color="#b3b3b8"
                fontWeight={"bold"}
              >
                Dec 2023 - March 2024
              </TimelineOppositeContent>
              <TimelineSeparator>
                <TimelineConnector />
                <TimelineDot className="h-12vw md:h-10vh w-12vw md:w-10vw"></TimelineDot>

                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent sx={{ py: "12px", px: 2 }}>
                <Typography variant="h6" component="span">
                  <div className="text-[2rem] font-semibold flex gap-2">
                    Freelance <span className="text-[#88ab8e]">Project</span>
                  </div>
                </Typography>
                <Typography>
                  <div className="text-[1.1rem] hover:-translate-y-2 transition-all text-[#dcdcdc] bg-[#191919] border-2 border-y-white border-x-black font-medium rounded-xl p-6 max-w-[60vw] max-h-[50vh] overflow-y-auto lg:max-w-[30vw] lg:max-h-[30vh]">
                    In my freelance role as a frontend developer, I leveraged my
                    expertise in HTML, CSS, JavaScript, React.js, Tailwind CSS,
                    and Bootstrap to deliver high-quality and responsive user
                    interfaces. <br /> Collaborating closely with clients and
                    project stakeholders.
                  </div>
                </Typography>
              </TimelineContent>
            </TimelineItem>
            <TimelineItem>
              <TimelineOppositeContent
                sx={{ m: "auto 0" }}
                variant="body2"
                color="#b3b3b8"
                fontWeight={"bold"}
              >
                2022 - 2025
              </TimelineOppositeContent>
              <TimelineSeparator>
                <TimelineConnector />
                <TimelineDot className="h-12vw md:h-10vh w-12vw md:w-10vw"></TimelineDot>
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent sx={{ py: "12px", px: 2 }}>
                <Typography>
                  <div className="text-[2rem] font-semibold flex gap-2">
                    <span className="text-[#88ab8e]">College</span> Student
                  </div>
                </Typography>
                <Typography>
                  <div className="text-[1rem] hover:-translate-y-2 transition-all text-start text-[#dcdcdc] bg-[#191919] border-2 border-y-white border-x-black font-medium rounded-xl p-6 max-w-[60vw] max-h-[50vh] overflow-y-auto sm:max-w-[70vw] lg:max-w-[40vw]">
                    I'm a passionate second-year BCA student diving deep into
                    Full Stack Web Development. With skills spanning front-end
                    to back-end technologies, I create seamless digital
                    experiences that blend creativity with functionality.
                    Explore my projects and let's connect to collaborate on
                    exciting ventures!
                  </div>
                </Typography>
              </TimelineContent>
            </TimelineItem>
            <TimelineItem>
              <TimelineOppositeContent
                sx={{ m: "auto 0" }}
                align="right"
                variant="body2"
                color="#b3b3b8"
                fontWeight={"bold"}
              >
                May 2024 - June 2024
              </TimelineOppositeContent>
              <TimelineSeparator>
                <TimelineConnector />
                <TimelineDot className="h-12vw md:h-10vh w-12vw md:w-10vw"></TimelineDot>

                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent sx={{ py: "12px", px: 2 }}>
                <Typography variant="h6" component="span">
                  <div className="text-[2rem] font-semibold flex gap-2">
                    Internship{" "}
                    <span className="text-[#88ab8e]"> at Afame Tech</span>
                  </div>
                </Typography>
                <Typography>
                  <div className="text-[1.1rem] hover:-translate-y-2 transition-all text-[#dcdcdc] bg-[#191919] border-2 border-y-white border-x-black font-medium rounded-xl p-6 max-w-[60vw] max-h-[50vh] overflow-y-auto lg:max-w-[30vw] lg:max-h-[30vh]">
                    
                  </div>
                </Typography>
              </TimelineContent>
            </TimelineItem>
            <TimelineItem>
              <TimelineOppositeContent
                sx={{ m: "auto 0" }}
                variant="body2"
                color="#b3b3b8"
                fontWeight={"bold"}
              >
                June 2024 - July 2024
              </TimelineOppositeContent>
              <TimelineSeparator>
                <TimelineConnector />
                <TimelineDot className="h-12vw md:h-10vh w-12vw md:w-10vw"></TimelineDot>
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent sx={{ py: "12px", px: 2 }}>
                <Typography>
                  <div className="text-[2rem] font-semibold flex gap-2">
                    <span className="text-[#88ab8e]">Internship</span> at
                    DigiGlobe Solutions
                  </div>
                </Typography>
                <Typography>
                  <div className="text-[1rem] hover:-translate-y-2 transition-all text-start text-[#dcdcdc] bg-[#191919] border-2 border-y-white border-x-black font-medium rounded-xl p-6 max-w-[60vw] max-h-[50vh] overflow-y-auto sm:max-w-[70vw] lg:max-w-[40vw]">
                  
                  </div>
                </Typography>
              </TimelineContent>
            </TimelineItem>
          </Timeline>
    </div>
  )
}

export default time
