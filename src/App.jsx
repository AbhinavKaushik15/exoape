import React, { createContext, useState } from "react";
import Loader from "./components/Loader";
import Menu from "./components/Menu";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import White from "./components/White";
import Images from "./components/Images";
import Footer from "./components/Footer";
import PlayReel from "./components/PlayReel";
import LocomotiveScroll from 'locomotive-scroll';


export const contextMenu = createContext(null);


function App() {
  const locomotiveScroll = new LocomotiveScroll();
  const [isOpen, setisOpen] = useState(false);

  return (
    <contextMenu.Provider value={[isOpen, setisOpen]}>
      <div className="w-full min-h-screen overflow-hidden">
        <Loader />
        <Menu />
        <Navbar />
        <Home />
        <White />
        <PlayReel />
        <Images />
        <Footer />
      </div>
    </contextMenu.Provider>
  );
}

export default App;
