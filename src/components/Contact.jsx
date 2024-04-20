import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useRef } from "react";
import DOTS from "vanta/dist/vanta.dots.min.js";
import AOS from "aos";

const Contact = () => {
  const backref = useRef();
  const [backstate, setbackstate] = useState(0);

  useEffect(() => {
    AOS.init();
    if (!backstate) {
      setbackstate(
        DOTS({
          el: backref.current,
          mouseControls: true,
          touchControls: true,
          gyroControls: true,
          scale: 1.0,
          scaleMobile: 1.0,
          color: 0x0,
          color2: 0x0,
          backgroundColor: 0xffffff,
          size: 2.2,
          spacing: 55.0,
          showLines: false,
        })
      );
    }
  }, [backstate]);

  return (
    <>
      <section className="w-full h-full ">
        <div className="h-screen">
          <div
            ref={backref}
            className="w-full h-2/3 flex justify-center items-center"
          >
            <h2 className=" font-poppins text-7xl ">Contact Section</h2>
          </div>
        </div>
        <div>
          
        </div>
      </section>

      <motion.div
        className="slide-in"
        initial={{ scaleY: 0 }}
        
        animate={{ scaleY: 0 }}
        exit={{ scaleY: 1 }}
        transition={{ duration: 1, ease: [0, 1, 0.5, 1] }}
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
};

export default Contact;
