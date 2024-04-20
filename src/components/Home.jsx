import { motion } from "framer-motion";
import Typed from "react-typed";
import fotoprofil from "../assets/hro.png";
import { Tilt } from "react-tilt";
import bgroler from "../assets/bgcolor.png";
import { IoIosArrowDropright } from "react-icons/io";
import cv from "../assets/aji.pdf";
import { Link } from "react-router-dom";

function Home({openchat}) {
  const defaultOptions = {
    reverse: false, // reverse the tilt direction
    max: 35, // max tilt rotation (degrees)
  };

  return (
    <>
      <div className="w-full h-screen flex justify-center items-center  ">
        <div className="w-full flex h-5/6 mx-10 flex-col md:flex-row">
          <div className="w-full md:w-1/2 flex items-start text-center md:text-start flex-col justify-center mt-3 md:mt-0">
            <h1 className="font-poppins w-full text-4xl md:mt-0 mt-3 md:text-8xl  text-left ">
              Zulfikar 
            </h1>
            <h1 className="font-poppins w-full text-4xl md:mt-0 mt-3 md:text-8xl text-left ">
               Aji  
            </h1>
            <h1 className="font-poppins w-full text-4xl md:mt-0 mt-3 md:text-8xl text-left ">
              Santoso 
            </h1>
            <div className="w-full  mb-6 text-left mt-6">
            <Typed
              className="font-poppins text-1xl  md:text-3xl font-thin "
              strings={[
                "Fullstack Developer",
                "Web Developer",
                "FrontEnd Developer",
                "BackEnd Developer",
              ]}
              typeSpeed={40}
              loop={true}
            />
            </div>
            <p className="w-full md:w-3/4 text-left ">
              Saya adalah seorang software engineer dengan pengalaman 2 tahun lebih dan telah membuat berbagai jenis sistem ataupun website seperti kasir, travel, e-commerce dan masih banyak lagi
            </p>
            <div className="flex items-center w-full justify-center md:justify-start">
              <a href="mailto:zulfikarajisan@gmail.com" 
                type="button"
                className="warna but text-decoration-none"
              >
                Hire me
                <span></span>
                <span></span>
                <span></span> <span></span>
              </a>
              <a 
                href={cv}
                download
                className="text-4xl tooltip-right text-black"
                data-tooltip="Download CV"
              >
                <IoIosArrowDropright />
              </a>
            </div>
          </div>
          <motion.div className=" w-full md:w-1/2 flex justify-center items-center">
            <img src={bgroler} className="absolute w-[600px] z-0" alt="" />
            <Tilt
              options={defaultOptions}
              className="shadow-lg rounded-2xl z-[1]"
            >
              <img className="w-72 " src={fotoprofil} />
            </Tilt>
          </motion.div>
        </div>
      </div>
      <motion.div
        className="slide-in"
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 0 }}
        exit={{ scaleY: 1 }}
        transition={{ duration: 0.7, ease: [0, 1, 0.5, 1] }}
      ></motion.div>

      <motion.div
        className="slide-out"
        initial={{ scaleY: 1 }}
        animate={{ scaleY: 0 }}
        exit={{ scaleY: 0 }}
        transition={{ duration: 1, ease: [0, 1, 0.5, 1] }}
      ></motion.div>
    </>
  );
}

export default Home;
