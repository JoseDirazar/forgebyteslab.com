import Navbar from "./components/Navbar";
import LandingPage from "./components/LandingPage";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      {/* <img src={backgroundImage} className="absolute inset-0" /> */}
      <div className="">
        <Navbar />
        <LandingPage />
        <Footer />
      </div>
    </>
  );
}

export default App;
