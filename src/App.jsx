import Home from "./components/Home";
import Myexperience from "./components/Myexperience";
import Myskills from "./components/Myskills";
import Myproject from "./components/Myproject";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import AnimatedCursor from "react-animated-cursor";

function App() {
  return (
    <>
      <AnimatedCursor
        innerSize={16}
        outerSize={28}
        color="136, 171, 142"
        outerAlpha={0.2}
        innerScale={0.7}
        outerScale={5}
      />
      <Navbar></Navbar>
      <Home></Home>
      <Myskills></Myskills>
      <Myexperience></Myexperience>
      <Myproject></Myproject>
      <Contact></Contact>
    </>
  );
}

export default App;
