import Home from "./components/Home";
import Myexperience from "./components/Myexperience";
import Myskills from "./components/Myskills";
import Myproject from "./components/Myproject";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";


function App() {
  return (
    <>
      <div className="w-[80%] m-auto">
      
        <Navbar></Navbar>
        <Home></Home>
        <Myskills></Myskills>
        <Myexperience></Myexperience>
        <Myproject></Myproject>
        <Contact></Contact>
      </div>
    </>
  );
}

export default App;
