import { useState } from "react";
import Navbar from "./components/Navbar";
import LandingPage from "./components/LandingPage";
import backgroundImage from "./assets/landing/background.svg";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {/* <img src={backgroundImage} className="absolute inset-0" /> */}
      <div className="">
        <Navbar />
        <LandingPage />
      </div>
    </>
  );
}

export default App;
