import React from "react";
import { Link } from "react-router-dom";
import {
  Drawer,
  DrawerBody,
  DrawerOverlay,
  DrawerContent,
  useDisclosure,
  Button,
} from "@chakra-ui/react";

function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [placement, setPlacement] = React.useState("left");

  return (
    <>
      <div className="navbar flex w-full h-[8vh] bg-[#000111] justify-around items-center fixed z-10  ">
        <h1 className="text-white text-[25px] font-bold flex ">
          Amaan Khan <h1 className="text-[#88ab8e]"> .Dev</h1>
        </h1>

        <Button colorScheme="blue" onClick={onOpen}>
          <div className="btn text-green-200">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="3"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="lucide lucide-align-justify"
            >
              <line x1="3" x2="21" y1="6" y2="6" />
              <line x1="3" x2="21" y1="12" y2="12" />
              <line x1="3" x2="21" y1="18" y2="18" />
            </svg>
          </div>
        </Button>
        <Drawer placement={placement} onClose={onClose} isOpen={isOpen}>
          <DrawerOverlay />
          <DrawerContent>
            <DrawerBody>
              <div className="flex flex-col justify-center items-center gap-[20px] z-10 text-white text-[30px] font-medium h-[100vh] w-full bg-[#191919] ">
                <div className="btn2 text-[#88ab8e] m-[20px] ">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    viewBox="0 0 1024 1024"
                    fill-rule="evenodd"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                    onClick={onClose}
                  >
                    <path d="M799.855 166.312c.023.007.043.018.084.059l57.69 57.69c.041.041.052.06.059.084a.118.118 0 0 1 0 .069c-.007.023-.018.042-.059.083L569.926 512l287.703 287.703c.041.04.052.06.059.083a.118.118 0 0 1 0 .07c-.007.022-.018.042-.059.083l-57.69 57.69c-.041.041-.06.052-.084.059a.118.118 0 0 1-.069 0c-.023-.007-.042-.018-.083-.059L512 569.926 224.297 857.629c-.04.041-.06.052-.083.059a.118.118 0 0 1-.07 0c-.022-.007-.042-.018-.083-.059l-57.69-57.69c-.041-.041-.052-.06-.059-.084a.118.118 0 0 1 0-.069c.007-.023.018-.042.059-.083L454.073 512 166.371 224.297c-.041-.04-.052-.06-.059-.083a.118.118 0 0 1 0-.07c.007-.022.018-.042.059-.083l57.69-57.69c.041-.041.06-.052.084-.059a.118.118 0 0 1 .069 0c.023.007.042.018.083.059L512 454.073l287.703-287.702c.04-.041.06-.052.083-.059a.118.118 0 0 1 .07 0Z"></path>
                  </svg>
                </div>
                <button onClick={onClose} className="hover:scale-110 transition-all">
                  <a href="#">Home</a>
                </button>
                {/* <button onClick={onClose}>
                  <Link to={"/"}>Home</Link>
                </button> */}
                <button onClick={onClose} className="hover:scale-125 transition-all">
                  <a href="#myskills">My Skills</a>
                </button>
                {/* <button onClick={onClose}>
                  <Link to={"/myskills"}>My Skills</Link>
                </button> */}
                <button onClick={onClose} className="hover:scale-125 transition-all">
                  <a href="#myexperience">My Experience</a>
                </button>
                {/* <button onClick={onClose}>
                  <Link to={"/myexperience"}>My Experience</Link>
                </button> */}
                <button onClick={onClose} className="hover:scale-125 transition-all">
                  <a href="#myprojects">My Projects</a>
                </button>
                {/* <button onClick={onClose}>
                  <Link to={"/myprojects"}>My Preojects</Link>
                </button> */}
                <button onClick={onClose} className="hover:scale-125 transition-all">
                  <a href="#contact">Contact</a>
                </button>
                {/* <button onClick={onClose}>
                  <Link to={"/contact"}>Contact</Link>
                </button> */}
              </div>
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </div>
    </>
  );
}

export default Navbar;
