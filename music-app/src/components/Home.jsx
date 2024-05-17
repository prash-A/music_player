//import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

// import axios from "axios";
// import Loading from "./Loading";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";
// import wavs from "../../public/wavs.gif";
// import wait from "../../public/wait.gif";
import {
  circIn,
  //circIn,
  //color,
  // animate,
  // circIn,
  // circInOut,
  // circOut,
  // easeIn,
  // easeInOut,
  // easeOut,
  motion,
} from "framer-motion";
// import { useAnimate, stagger } from "framer-motion";
// import { Bounce, Expo, Power4, Sine } from "gsap/all";
// import { Circ } from "gsap/all";
import { Toaster } from "react-hot-toast";
import logo from "./../assets/logo3.jpg";
import { useState } from "react";

const Home = () => {
  const [language, setlanguage] = useState("Hindhi");
  
  const options = [ "Hindhi","English"];
  // document.title = `${title ? title : "THE ULTIMATE SONGS"}`;
  // console.log(details);
  // console.log(home);
  // console.log(page);
  // console.log(page2);
  // console.log(songlink);
  // console.log(index);
return (
  <div className="w-full h-screen bg-slate-800">
    <Toaster position="top-center" reverseOrder={false} />
    <motion.div 
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ ease: circIn.easeIn, duration: 0.5 }}
      className="logo fixed z-[99] top-0 w-full duration-700 max-h-[20vh] flex items-center backdrop-blur-xl py-3 px-10 sm:px-5 gap-3"
    >
      <div className="flex items-center gap-3">
        <img className="w-[5vw] sm:w-[10vw] rounded-full" src={logo} alt="Logo" />
        <h1 className="text-2xl text-slate-900 p-2 rounded-full bg-neutral-500 sm:text-xl font-black">
          THE ULTIMATE SONGS
        </h1>
      </div>
      <motion.div 
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ ease: circIn.easeIn, duration: 1 }}
        className="ml-auto flex items-center text-zinc-500"
      >
        <h3 className="inline text-xl sm:hidden">Search: </h3>
        <Link
          className="text-xl sm:text-sm ml-3 sm:ml-0 sm:font-bold p-1 rounded-md hover:text-black hover:bg-neutral-500 duration-300 text-neutral-300 font-semibold"
          to="/songs"
        >
          Songs
        </Link>
        {/* <Link
          className=" text-xl sm:text-sm ml-3 sm:font-bold text-blue-900 font-semibold "
          to={"/download"}
        >
          Download Songs
        </Link> */}
        <Link
          className="  text-xl sm:text-sm ml-3 sm:ml-0 sm:font-bold  p-1 rounded-md hover:text-black  hover:bg-neutral-500 duration-300 text-neutral-300  font-semibold "
          to={"/playlist"}
        >
          PlayLists
        </Link>
        <Link
          className="  text-xl sm:text-sm ml-3 sm:ml-0 sm:font-bold  p-1 rounded-md hover:text-black  hover:bg-neutral-500 duration-300 text-neutral-300  font-semibold"
          to={"/artists"}
        >
          Artists
        </Link>
        <Link
          className="  text-xl sm:text-sm ml-3 sm:ml-0 sm:font-bold  p-1 rounded-md hover:text-black  hover:bg-neutral-500 duration-300 text-neutral-300  font-semibold "
          to={"/album"}
        >
          Album
        </Link>
        <Link
          className=" text-xl sm:text-sm ml-3 sm:ml-0 sm:font-bold  p-1 rounded-md hover:text-black  hover:bg-neutral-500 duration-300 text-neutral-300  font-semibold"
          to={"/likes"}
        >
          Likes
        </Link>
        <a
          target="_blank"
          href={
            "https://github.com/patelharsh80874/THE-ULTIMATE-SONGS-WEBAPP"
          }
          className="ml-4 sm:ml-2 cursor-pointer  text-3xl  text-zinc-500   ri-github-fill"
        ></a>
      </motion.div>
    </motion.div>

    <div className="w-full  bg-slate-800  min-h-[63vh] pt-[20vh] pb-[30vh]   text-zinc-300 p-5 flex flex-col gap-5 overflow-auto ">
      <Dropdown
            className="w-[15%] text-sm sm:w-[50%]"
            options={options}
            onChange={(e) => setlanguage(e.value)}
            placeholder={language ? ` ${language}  ` : "Select language"}
          />
      
      <div className="trending songs flex flex-col gap-3 w-full ">
        <h3 className="text-xl h-[5vh] font-semibold">{language} Songs</h3>
        <motion.div className="songs px-5 sm:px-3 flex flex-shrink  gap-5 overflow-x-auto overflow-hidden w-full ">

        // Add here
        </motion.div>


      </div>
  

    </div>


  </div>    

  );
};

export default Home;
